import UnitSwitcher from './components/UnitSwitcher';

import './App.css';

function App() {
    return (
        <div>
            <main className="main">
                <h1>Fuel Calculator</h1>
                <UnitSwitcher />
            </main>

            <footer className="footer">
                <a
                    href="https://github.com/avandesa/fuel-calc-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/img/github.png"
                        alt="View source code on Github"
                    />
                </a>
                <a
                    href="https://twitter.com/alexvds17"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/img/twitter.png" alt="Follow me on Twitter" />
                </a>
            </footer>
        </div>
    );
}

export default App;
