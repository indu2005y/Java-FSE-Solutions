import React from "react";

function ListofPlayers() {

    const players = [
        {name:"Virat Kohli", score:95},
        {name:"Rohit Sharma", score:85},
        {name:"KL Rahul", score:65},
        {name:"Hardik Pandya", score:75},
        {name:"Jadeja", score:60},
        {name:"Shubman Gill", score:80},
        {name:"Rishabh Pant", score:55},
        {name:"Bumrah", score:90},
        {name:"Shami", score:68},
        {name:"Surya Kumar", score:88},
        {name:"Dhoni", score:70}
    ];


    // ES6 map() method
    const allPlayers = players.map((player) =>
        <li key={player.name}>
            {player.name} - {player.score}
        </li>
    );


    // ES6 arrow function + filter()
    const lowScorePlayers = players.filter((player) =>
        player.score < 70
    );


    return (
        <div>

            <h1>Cricket App</h1>

            <h2>List of Players</h2>

            <h3>All Players</h3>

            <ul>
                {allPlayers}
            </ul>


            <h3>Players with score below 70</h3>

            <ul>
                {
                    lowScorePlayers.map((player)=>
                        <li key={player.name}>
                            {player.name} - {player.score}
                        </li>
                    )
                }
            </ul>

        </div>
    );
}

export default ListofPlayers;