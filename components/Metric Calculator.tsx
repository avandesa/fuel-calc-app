import React, { useState, ReactElement } from 'react';

import LabelledInputRow from './LabelledInput';

import { calcFuelMetric } from '../lib/fuelCalc';

export default function MetricCalculator(): ReactElement {
    const [capacity, setCapactiy] = useState(70);
    const [buffer, setBuffer] = useState(1);
    const [fullBurnCons, setFullBurnCons] = useState(4.0);
    const [stintLength, setStintLength] = useState(20);
    const [fullBurnLaps, setFullBurnLaps] = useState(5);

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
                    onChange={setCapactiy}
                    id="fuel-capacity"
                    min={0}
                    step={0.1}
                />
                <LabelledInputRow
                    label="Fuel Buffer (liters): "
                    value={buffer}
                    onChange={setBuffer}
                    id="fuel-buffer"
                    min={0}
                    step={0.05}
                />
                <LabelledInputRow
                    label="'Full Burn' Consumption (liters/lap): "
                    value={fullBurnCons}
                    onChange={setFullBurnCons}
                    id="full-burn-consumption"
                    min={0}
                    step={0.01}
                />
                <LabelledInputRow
                    label="Stint Length: "
                    value={stintLength}
                    onChange={setStintLength}
                    id="target-laps"
                    min={0}
                    step={1}
                />
                <LabelledInputRow
                    label="Desired laps at 'full burn': "
                    value={fullBurnLaps}
                    onChange={setFullBurnLaps}
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
