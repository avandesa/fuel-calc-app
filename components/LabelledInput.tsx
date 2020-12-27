import React from 'react';

export default function LabelledInputRow({
    label,
    value,
    onChange,
    id,
    min,
    max,
    step,
}: {
    label: string;
    value: number | string;
    onChange: (newVal: number, event: React.ChangeEvent) => void;
    id: string;
    min?: number;
    max?: number;
    step?: number;
}): JSX.Element {
    return (
        <tr>
            <td>
                <label htmlFor={id}>{label}</label>
            </td>
            <td>
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
            </td>
        </tr>
    );
}
