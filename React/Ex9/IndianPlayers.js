import React from "react";

function IndianPlayers(){

    const players = [
        "Dhoni",
        "Virat",
        "Rohit",
        "Jadeja",
        "Bumrah",
        "Rahul"
    ];


    // Destructuring
    const [player1,player2,player3,...rest] = players;


    const T20players=[
        "Surya",
        "Hardik",
        "Pant"
    ];


    const RanjiPlayers=[
        "Gill",
        "Sarfaraz",
        "Iyer"
    ];


    // ES6 Spread operator merge
    const allPlayers=[
        ...T20players,
        ...RanjiPlayers
    ];


    return(
        <div>

            <h2>Indian Players</h2>


            <h3>Odd Team Players</h3>
            <p>
                {player1}, {player3}, {rest[1]}
            </p>


            <h3>Even Team Players</h3>
            <p>
                {player2}, {rest[0]}, {rest[2]}
            </p>


            <h3>T20 + Ranji Players</h3>

            {
                allPlayers.map((player)=>
                    <p>{player}</p>
                )
            }

        </div>
    )
}

export default IndianPlayers;