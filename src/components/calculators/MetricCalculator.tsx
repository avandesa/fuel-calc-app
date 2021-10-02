import { useEffect, ReactElement } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { parse as parseQuery, stringify as encodeQuery } from 'query-string';
import * as _ from 'lodash';

import LabelledInputRow from './input/LabelledInput';

import { calcFuelMetric } from '../../lib/fuelCalc';

type MetricParams = {
    capacity: number;
    buffer: number;
    fullBurnCons: number;
    stintLength: number;
    fullBurnLaps: number;
};

const defaultParams: MetricParams = {
    capacity: 70,
    buffer: 0.3,
    fullBurnCons: 4.0,
    stintLength: 20,
    fullBurnLaps: 5,
};

function paramsFromQuery(query: string): MetricParams {
    const parsed = parseQuery(query, { parseNumbers: true });
    const filtered = _.pick(parsed, [
        'capacity',
        'buffer',
        'fullBurnCons',
        'stintLength',
        'fullBurnLaps',
    ]);

    const partialParams = _.mapValues(filtered, (val: number | number[]) =>
        Array.isArray(val) ? _.tail(val) : val,
    );

    return { ...defaultParams, ...partialParams };
}

type History = ReturnType<typeof useHistory>;

function setParams(params: MetricParams, history: History) {
    const newQuery = encodeQuery(params);
    history.replace({ search: newQuery });
}

function replaceParam(
    params: MetricParams,
    key: keyof MetricParams,
    newVal: MetricParams[typeof key],
    history: History,
) {
    const newParams = { ...params, [key]: newVal };
    setParams(newParams, history);
}

export default function MetricCalculator(): ReactElement {
    const location = useLocation();
    const history = useHistory();
    const query = paramsFromQuery(location.search);

    const { capacity, buffer, fullBurnCons, stintLength, fullBurnLaps } = query;

    useEffect(() => {
        setParams(
            { capacity, buffer, fullBurnCons, stintLength, fullBurnLaps },
            history,
        );
    }, [capacity, buffer, fullBurnCons, stintLength, fullBurnLaps, history]);

    const targetConsumption = calcFuelMetric(
        capacity,
        stintLength,
        fullBurnLaps,
        fullBurnCons,
        buffer,
    );

    return (
        <>
            <div>
                <LabelledInputRow
                    label="Fuel Capacity (liters): "
                    value={capacity}
                    onChange={(val) =>
                        replaceParam(query, 'capacity', val, history)
                    }
                    id="fuel-capacity"
                    min={0}
                    step={0.1}
                />
                <LabelledInputRow
                    label="Fuel Buffer (liters): "
                    value={buffer}
                    onChange={(val) =>
                        replaceParam(query, 'buffer', val, history)
                    }
                    id="fuel-buffer"
                    min={0}
                    step={0.05}
                />
                <LabelledInputRow
                    label="'Full Burn' Consumption (liters/lap): "
                    value={fullBurnCons}
                    onChange={(val) =>
                        replaceParam(query, 'fullBurnCons', val, history)
                    }
                    id="full-burn-consumption"
                    min={0}
                    step={0.01}
                />
                <LabelledInputRow
                    label="Stint Length: "
                    value={stintLength}
                    onChange={(val) =>
                        replaceParam(query, 'stintLength', val, history)
                    }
                    id="target-laps"
                    min={0}
                    step={1}
                />
                <LabelledInputRow
                    label="Desired laps at 'full burn': "
                    value={fullBurnLaps}
                    onChange={(val) =>
                        replaceParam(query, 'fullBurnLaps', val, history)
                    }
                    id="full-burn-laps"
                    min={0}
                    max={stintLength}
                    step={1}
                />
            </div>

            <div
                style={{
                    marginTop: '2rem',
                    maxWidth: '30rem',
                    textAlign: 'center',
                }}
            >
                You must burn {targetConsumption.toFixed(3)} liters/lap for{' '}
                {stintLength - fullBurnLaps} laps to be able to burn{' '}
                {fullBurnCons} liters/lap for {fullBurnLaps} laps.
            </div>
        </>
    );
}
