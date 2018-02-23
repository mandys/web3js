import React, { Component } from 'react';

var NotificationSystem = require('react-notification-system');

class Notify extends Component {
    constructor(props) {
        super(props);
        this._notificationSystem = null
    }
    _addNotification() {

        if(this._notificationSystem) {
            this._notificationSystem.addNotification({
                message: 'Notification message',
                level: 'success'
            });
        }
    }
     
    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
        this._addNotification();
        console.log("componentDidMount");
        console.log(this._notificationSystem);
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


export default Notify;