import logo from "./logo.svg";
import "./App.css";
import React, {useState} from "react";
import MoleContainer from "./MoleContainer";

function App() {
    let [score, setScore] = useState(0);

    const createMoleHill = () => {
        let hills = [];
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer key={i} score={score} setScore={setScore} />
            );
        }
        return <div className="row">{hills}</div>;
    };

    return (
        <div className="App">
            {score}
            {createMoleHill()}
        </div>
    );
}

export default App;
