import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Chat from "./chat/Chat";
import Question from "./chat/Question";
import stompClient from "./stomp";
// import { initializeStomp} from "./listeners/stomp";
// import * as s from "./stomp.ts"

// initializeStomp();
const App = () => (
    <div>
        <Chat/>
        <Question/>
    </div>

);
ReactDOM.render(<App/>, document.getElementById("app"));
