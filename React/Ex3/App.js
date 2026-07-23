import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
    return (
        <div>
            <CalculateScore
                Name="Indu"
                School="ABC School"
                Total={480}
                goal={6}
            />
        </div>
    );
}

export default App;