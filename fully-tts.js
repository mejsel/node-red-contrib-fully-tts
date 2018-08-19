var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function(RED) {
    function FullyTtsNode(config) {
        RED.nodes.createNode(this, config);
        const http = new XMLHttpRequest();
        var node = this;
        node.log("instance created");

        node.on("input", (msg) => {
            node.log("input message received");
            http.onreadystatechange = function() {
                if (http.readyState === 4) {
                    if (http.status === 200) {
                        node.log("success");
                        node.status({fill: "green", shape: "dot", text: "success"});
                    //} else if (!isValid(node.response) && this.status == 0) {
                    } else if (node.status == 0) {
                        node.error("not responding");                
                        node.status({fill: "yellow", shape: "dot", text: "not responding"});
                    } else {
                        node.error("error");
                        node.status({fill: "red", shape: "dot", text: "transmission error"});
                    }
                }
            };

            var host = config.host;
            var password = config.password;
            if (typeof msg.payload != "string")
            {
                node.error("msg.payload has to be a string!");
                node.status({fill: "yellow", shape: "dot", text: "input error"});
                return;
            }
            var text = encodeURI(msg.payload);
            const requeststring = "http://"+host+":2323/?cmd=textToSpeech&text="+text+"&password="+password;
            node.log(requeststring);

            http.open("GET", requeststring, true);
            http.send();
            node.status({fill: "blue", shape: "dot", text: "sending..."});
        });
    };
    RED.nodes.registerType("fully-tts", FullyTtsNode);
}
