import React from "react";
import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App(){

  let flag = false;

  if(flag){
    return <ListofPlayers />;
  }
  else{
    return <IndianPlayers />;
  }

}

export default App;