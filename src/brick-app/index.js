const brickpi3 = require('brickpi3');
const signalR = require('@microsoft/signalr');
const HOST = process.env.HOST || 'http://192.168.1.130:5000';
const CLIENTNAME = process.env.CLIENTNAME || 'defautlClient';

const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${HOST}/brickpi`)
    .configureLogging(signalR.LogLevel.Information)
    .build();

let BP = new brickpi3.BrickPi3();
brickpi3.utils.resetAllWhenFinished(BP);

function registerClient() {
    connection.send('RegisterClient', CLIENTNAME)
        .then(() => {
            startListenning();
        });
}

function startListenning() {

}

(async () => {
    try {
        connection.start().then(function () {
            console.log("Connected");
            registerClient();
        });

    } catch (err) {
        console.log(err);
    }
})();


