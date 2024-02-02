import {Client, IFrame} from '@stomp/stompjs';

const stompClient = new Client({
    brokerURL: 'ws://localhost:7071/gs-guide-websocket'
});

stompClient.onConnect = (frame) => {
    setConnected(true);
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/answers', (answer) => {
        console.log('Received answer:'+ answer.body);
        // showAnswer(JSON.parse(answer.body).answer);
    });
};

stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
};

stompClient.onStompError = (frame : IFrame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};

function setConnected(connected: boolean) {
    // $("#connect").prop("disabled", connected);
    // $("#disconnect").prop("disabled", !connected);
    // if (connected) {
    //     $("#conversation").show();
    // }
    // else {
    //     $("#conversation").hide();
    // }
    // $("#answers").html("");
}

export function connect() {
    stompClient.activate();
}

export function disconnect() {
    stompClient.deactivate();
    // setConnected(false);
    console.log("Disconnected");
}

// function sendQuestion() {
//     showAnswer("Question: " + $("#question").val() )
//     stompClient.publish({
//         destination: "/app/ask",
//         body: JSON.stringify({'question': $("#question").val()})
//     });
// }

// function showAnswer(message: string) {
//     $("#answers").append("<tr><td>" + message + "</td></tr>");
// }

// $(function () {
//     $("form").on('submit', (e) => e.preventDefault());
//     $( "#connect" ).click(() => connect());
//     $( "#disconnect" ).click(() => disconnect());
//     $( "#send" ).click(() => sendQuestion());
// });



export default stompClient;