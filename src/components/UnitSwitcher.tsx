import { useState, ReactElement } from 'react';

import MetricCalculator from './calculators/MetricCalculator';
import ImperialCalculator from './calculators/ImperialCalculator';

import './UnitSwitcher.css';

const activeTabClass = `tab active`;
const inactiveTabClass = `tab inactive`;

export default function UnitSwitcher(): ReactElement {
    const [isMetric, setIsMetric] = useState(true);

    return (
        <>
            <div className="container">
                <div className="tabs">
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
                <div className="calc">
                    {isMetric ? <MetricCalculator /> : <ImperialCalculator />}
                </div>
            </div>
        </>
    );
}
