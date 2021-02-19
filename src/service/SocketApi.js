import io from 'socket.io-client';
import { CommonActions } from '@react-navigation/native';
import { NavigationActions,StackActions } from 'react-navigation';
import {logoutUser} from "../actions/auth.actions";
export default class SocketApi {
    socket;
    // navigation;
    SocketApi(){
    }
    connectSocket(upUserDetails, token){
        const user_data = (upUserDetails.user);
        this.socket = io(ENV.SOCKET_URL);
        var _this = this;
        this.socket.on('connect', function () {
            console.log("connection found new asasas");
            _this.socket.emit('connect_user', { user: user_data, token: token });
        });
    
        this.socket.on("connect_user", function (data) {
            console.log(data.msg, "-> Got On Connect user data");
        });
    
        this.socket.on("disable_user", function (data) {
            if (data.status == 0) {
                message("Account is suspended, please contact admin for more details");
                _this.props.dispatch(logoutUser());
            }
        });
    
        this.socket.on('message', function (data) {
            //vars.setNotif(data);
        });
    
        this.socket.on('online_offline', function (data) {
            console.log(data, "Online Offline data");
            //set_status.setConnectStatus(data.userid, data.status);
        });
    
    
    
        this.socket.on('connect_error', function (err) {
            console.log("connection error", err);
        });
        this.socket.on('connect_timeout', function () {
            console.log("connection timeout");
        });
    }

    updateMyPositionServer = (latitude, longitude) => {
        this.socket.emit("update_driver_position", {latitude, longitude});
    }
}

