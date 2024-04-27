import "./App.css";

import { useState } from "react";

import viteLogo from "/vite.svg";

import reactLogo from "./assets/react.svg";
import { Button } from "./components/Button";
import { useEvent, useThrottle } from "./hooks";

function App(): JSX.Element {
    const [count, setCount] = useState(0);

    const onClick = useEvent((): void => {
        console.log("send text");
    });

    const onButtonClick = (): void => {
        console.log("press on throttled click");
    };
    const throttledButtonClick = useThrottle(onButtonClick, 3000);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <br />
                <br />
                <button onClick={throttledButtonClick}>Throttled click</button>
                <Button onClick={onClick} />
            </div>
        </>
    );
}

export default App;
