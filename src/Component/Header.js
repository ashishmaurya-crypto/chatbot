import React, { useState } from "react";
import Chatbotfunx from "./Chatbot";

const Header = () => {

    const [selected, setSelected] = useState(false);

    const [boxmessage, setBoxmessage] = useState('')

    const handleChange = (e) => {
        if (selected) {
            setSelected(false)
        } else {
            setSelected(true);
            setBoxmessage(e.target.value);
        }
    }

    return (
        <>
            {selected ?  <Chatbotfunx message={boxmessage}/> :
                <div className="">
                    <div className="header">
                        <h1>IRIS</h1>
                        <h3><b>Hello</b><span className="wave">👋</span></h3>
                        <p><b>I am Iris, a Virtual Assistant</b><br /><b>How may I help you?</b></p>
                    </div>
                    <div className="box d-flex flex-column justify-content-center">
                        <h4 className="d-flex">Frequenty Asked Questions <i className="fa fa-question-circle"></i></h4>
                        <div className="box1">
                            <button className="btn default d-flex" onClick={handleChange} value={"Can I redeem my FB before the original term?"}>
                                <i className="fa fa-circle"></i>
                                Can I redeem my Account before term?
                            </button>
                        </div>
                        <div className="box2">
                            <button className="btn default d-flex" onClick={handleChange} value={"How do I pay my Credit card bill?"}>
                                <i className="fa fa-circle"></i>
                                How do I pay my Credit card bill?
                            </button>
                        </div>
                        <div className="box3">
                            <button className="btn default d-flex" onClick={handleChange} value={"How can I get my Account Statemnet?"}>
                                <i className="fa fa-circle"></i>
                                How can I get my Account Statemnet?
                            </button>
                        </div>
                        <div className="box4">
                            <button className="btn default d-flex" onClick={handleChange} value={"What is the tenure of Fixed deposit?"}>
                                <i className="fa fa-circle"></i>
                                What is the tenure of Fixed deposit?
                            </button>
                        </div>
                        <div className="button-container">
                            <button className="button" type="button" value={"Hi, I'm here to help. What do you want to learn?"} onClick={handleChange}><i className='far fa-comment-alt'></i> Start a New Conversation</button>

                        </div>
                    </div>

                    <div className="circle"><i className='fas fa-robot fa-spin'></i></div>


                </div>}
        </>

      



    )
}

export default Header;