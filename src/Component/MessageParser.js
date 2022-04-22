import React from "react";

class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }else if(lowerCaseMessage.includes("bye")){
        this.actionProvider.greetTwo()
      }else{
        this.actionProvider.greetWelcome()
      }
    }
  }
  
  export default MessageParser