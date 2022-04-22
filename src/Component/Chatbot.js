import React, { useState } from "react";
import Chatbot from 'react-chatbot-kit';

import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
// import config from './Component/config';


import { createChatBotMessage } from 'react-chatbot-kit';





function Chatbotfunx(props) {

    const [state, setState] = useState(props.message);

    
    const config = {
        initialMessages: [createChatBotMessage(state)],
    }
    return (
        <>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />

        </>
    );
}

export default Chatbotfunx;