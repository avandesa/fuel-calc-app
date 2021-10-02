import { ReactElement } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import MetricCalculator from './calculators/MetricCalculator';
import ImperialCalculator from './calculators/ImperialCalculator';

import './UnitSwitcher.css';

export default function UnitSwitcher(): ReactElement {
    return (
        <>
            <div className="container">
                <div className="tabs">
                    <NavLink
                        to="/metric"
                        replace
                        className="tab"
                        activeClassName="active"
                    >
                        Metric
                    </NavLink>
                    <NavLink
                        to="/imperial"
                        replace
                        className="tab"
                        activeClassName="active"
                    >
                        Imperial
                    </NavLink>
                </div>
                <div className="calc">
                    <Switch>
                        <Route exact path="/metric">
                            <MetricCalculator />
                        </Route>
                        <Route exact path="/imperial">
                            <ImperialCalculator />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
}
