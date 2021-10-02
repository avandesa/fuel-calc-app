import { useState, ReactElement } from 'react';

import LabelledInputRow from './input/LabelledInput';
import { calcFuelImperial } from '../../lib/fuelCalc';

export default function ImperialCalculator(): ReactElement {
    const [capacity, setCapactiy] = useState(18.5);
    const [buffer, setBuffer] = useState(0.1);
    const [fullBurnCons, setFullBurnCons] = useState(4.0);
    const [stintLength, setStintLength] = useState(20);
    const [trackLength, setTrackLength] = useState(4);
    const [fullBurnLaps, setFullBurnLaps] = useState(5);

    const targetConsumption = calcFuelImperial(
        capacity,
        stintLength,
        trackLength,
        fullBurnLaps,
        fullBurnCons,
        buffer,
    );

    return (
        <>
            <div>
                <LabelledInputRow
                    label="Fuel Capacity (gallons): "
                    value={capacity}
                    onChange={setCapactiy}
                    id="fuel-capacity"
                    min={0}
                    step={0.05}
                />
                <LabelledInputRow
                    label="Fuel Buffer (gallons): "
                    value={buffer}
                    onChange={setBuffer}
                    id="fuel-buffer"
                    min={0}
                    step={0.05}
                />
                <LabelledInputRow
                    label="'Full Burn' Consumption (mpg): "
                    value={fullBurnCons}
                    onChange={setFullBurnCons}
                    id="full-burn-consumption"
                    min={0}
                    step={0.01}
                />
                <LabelledInputRow
                    label="Track Length (miles): "
                    value={trackLength}
                    onChange={setTrackLength}
                    id="track-length"
                    min={0.25}
                    step={0.01}
                />
                <LabelledInputRow
                    label="Stint Length (laps): "
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
                You must run at {targetConsumption.toFixed(3)} miles per gallon
                for {stintLength - fullBurnLaps} laps to be able to run at{' '}
                {fullBurnCons} miles per gallon for {fullBurnLaps} laps.
            </div>
        </>
    );
}
