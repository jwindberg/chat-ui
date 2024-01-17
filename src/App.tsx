import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Chat from "./chat/Chat";
import {dumb} from "./dumb";
import { initializeStomp} from "./listeners/stomp";
// import * as s from "./stomp.ts"

initializeStomp();
const App = () => (


  <Chat />
);
ReactDOM.render(<App />, document.getElementById("app"));
