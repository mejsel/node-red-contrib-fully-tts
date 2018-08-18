var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function(RED) {
    function FullyTtsNode(config) {
        RED.nodes.createNode(this, config);
        
        this.on("input", (msg) => {
            this.log("fully-tts: input message received");
            const http = new XMLHttpRequest();

            http.onreadystatechange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        this.log("success");
                    } else if (!isValid(this.response) && this.status == 0) {
                        this.error("not responding");                
                    } else {
                        this.error("error");
                    }
                }
            };

            const host = "192.168.0.173";
            const password = "fullypw";
            //const text = "Dies ist ein Test! A Ä u Ü o ö.";
            var text = msg.payload;
            const request = "http://"+host+":2323/?cmd=textToSpeech&text="+encodeURI(text)+"&password="+password;
            this.log(request);

            http.open("GET", request, true);
            http.send();
        });
    };
    RED.nodes.registerType("fully-tts", FullyTtsNode);
}
