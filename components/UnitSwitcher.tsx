import React, { useState, ReactElement } from 'react';

import styles from '../styles/UnitSwitcher.module.css';

import MetricCalculator from './Metric Calculator';
import ImperialCalculator from './ImperialCalculator';

const activeTabClass = `${styles.tab} ${styles.active}`;
const inactiveTabClass = `${styles.tab} ${styles.inactive}`;

export default function UnitSwitcher(): ReactElement {
    const [isMetric, setIsMetric] = useState(true);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.tabs}>
                    <button
                        className={isMetric ? activeTabClass : inactiveTabClass}
                        onClick={() => setIsMetric(true)}
                    >
                        Metric
                    </button>
                    <button
                        className={isMetric ? inactiveTabClass : activeTabClass}
                        onClick={() => setIsMetric(false)}
                    >
                        Imperial
                    </button>
                </div>
                <div className={styles.calc}>
                    {isMetric ? <MetricCalculator /> : <ImperialCalculator />}
                </div>
            </div>
        </>
    );
}
