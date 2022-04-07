// Just one example
import {useState} from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer({score, setScore}) {
    let [displayMole, setDisplayMole] = useState(false);

    const handleClick = () => {
        setScore((score += 1));
        // console.log(score);
        setDisplayMole(false);
    };
    return (
        <div className="mole-container">
            {displayMole ? (
                <Mole
                    setDisplayMole={setDisplayMole}
                    handleClick={handleClick}
                />
            ) : (
                <EmptySlot
                    setDisplayMole={setDisplayMole}
                    handleClick={handleClick}
                />
            )}
        </div>
    );
}

export default MoleContainer;
