import React, { useState, ReactElement } from 'react';

import MetricCalculator from './Metric Calculator';
import ImperialCalculator from './ImperialCalculator';

export default function UnitSwitcher(): ReactElement {
    const [isMetric, setIsMetric] = useState(true);

    return (
        <>
            <div id="unit-header">
                <button onClick={() => setIsMetric(true)}>Metric</button>
                <button onClick={() => setIsMetric(false)}>Imperial</button>
            </div>
            <br />
            {isMetric ? <MetricCalculator /> : <ImperialCalculator />}
        </>
    );
}
