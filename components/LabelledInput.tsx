import React from 'react';

import styles from '../styles/LabelledInput.module.css';

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
        <div className={styles.row}>
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
