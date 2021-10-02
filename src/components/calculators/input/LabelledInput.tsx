import React from 'react';

import './labelled-input.css';

export default function LabelledInputRow({
    label,
    value,
    onChange = () => void 0,
    id,
    min,
    max,
    step,
}: {
    label: string;
    value: number | string;
    onChange?: (newVal: number, event: React.ChangeEvent) => void;
    id: string;
    min?: number;
    max?: number;
    step?: number;
}): JSX.Element {
    return (
        <div className="row">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="number"
                value={value}
                onChange={(event) => {
                    onChange(Number(event.target.value), event);
                }}
                min={min}
                max={max}
                step={step}
            />
        </div>
    );
}
