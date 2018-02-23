import React from 'react';
import ReactDOM from "react-dom";
import initMetamaskFlow from "./crypto/metamask";
import Notify from "./react/notifications";
console.log("hello");
initMetamaskFlow();
ReactDOM.render(<Notify />, document.getElementById('root')); 



