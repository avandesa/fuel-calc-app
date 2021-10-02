import { useEffect, ReactElement } from 'react';
import { useLocation, useHistory } from 'react-router';

import MetricCalculator from './calculators/MetricCalculator';
import ImperialCalculator from './calculators/ImperialCalculator';

import './UnitSwitcher.css';

const activeTabClass = `tab active`;
const inactiveTabClass = `tab inactive`;

export default function UnitSwitcher(): ReactElement {
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        // Default to the metric calculator
        if (location.hash !== '#metric' && location.hash !== '#imperial') {
            history.replace('#metric');
        }
    }, [location.hash, history]);

    const isMetric = location.hash === '#metric';

    return (
        <>
            <div className="container">
                <div className="tabs">
                    <button
                        className={isMetric ? activeTabClass : inactiveTabClass}
                        onClick={() => history.replace('#metric')}
                    >
                        Metric
                    </button>
                    <button
                        className={isMetric ? inactiveTabClass : activeTabClass}
                        onClick={() => history.replace('#imperial')}
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
