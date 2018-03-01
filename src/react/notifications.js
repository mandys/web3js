import React, { Component } from 'react';

var NotificationSystem = require('react-notification-system');
function showMessage (data) {
    return (() => {
      this.setState(data)
    });
  }
  
 class Notify extends Component {
    constructor(props) {
        super(props);
        this._notificationSystem = null;
        this.state = {
            message: "welocme to binkd",
            level: 'success'
        }
        this.showMessage = showMessage.bind(this);
    }
    _addNotification() {
        if(this._notificationSystem) {
            this._notificationSystem.addNotification(this.state);
        }
    }
     
    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
        this._addNotification();
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidMount");
        this._addNotification();
    }

    render() {
        return (
            <div>
                <h1>Welcome to Binkd</h1>
                <NotificationSystem ref="notificationSystem" />
            </div>
        );
    }
}


// export default Notify;
module.exports = {showMessage,Notify}