import React, { useState, ReactElement } from 'react';

import LabelledInputRow from './LabelledInput';

export default function Calculator(): ReactElement {
    const [fuelCapacity, setFuelCapacity] = useState(70);
    const [fuelBuffer, setFuelBuffer] = useState(1);
    const [fullBurnConsumption, setFullBurnConsumption] = useState(4.0);
    const [targetLaps, setTargetLaps] = useState(20);
    const [fullBurnLaps, setFullBurnLaps] = useState(5);

    const saveLaps = targetLaps - fullBurnLaps;
    const burndown = fullBurnLaps * fullBurnConsumption;
    const targetConsumption = (fuelCapacity - fuelBuffer - burndown) / saveLaps;

    return (
        <>
            <table>
                <tbody>
                    <LabelledInputRow
                        label="Fuel Capacity (liters): "
                        value={fuelCapacity}
                        onChange={setFuelCapacity}
                        id="fuel-capacity"
                        min={0}
                        step={0.1}
                    />
                    <LabelledInputRow
                        label="Fuel Buffer (liters): "
                        value={fuelBuffer}
                        onChange={setFuelBuffer}
                        id="fuel-buffer"
                        min={0}
                        step={0.05}
                    />
                    <LabelledInputRow
                        label="'Full Burn' Consumption (liters/lap): "
                        value={fullBurnConsumption}
                        onChange={setFullBurnConsumption}
                        id="full-burn-consumption"
                        min={0}
                        step={0.01}
                    />
                    <LabelledInputRow
                        label="Stint Length: "
                        value={targetLaps}
                        onChange={setTargetLaps}
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
                        max={targetLaps}
                        step={1}
                    />
                </tbody>
            </table>

            <div style={{ marginTop: '2rem' }}>
                You must burn {targetConsumption.toFixed(3)} liters/lap for{' '}
                {saveLaps} laps to be able to burn {fullBurnConsumption}{' '}
                liters/lap for {fullBurnLaps} laps.
            </div>
        </>
    );
}
