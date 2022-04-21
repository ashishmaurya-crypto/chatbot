import React from "react";

const Header = () => {
    
    return (
        <>
            <div className="header">
                <h1 >IRIS</h1>
                <h3>Hello <span className="wave">👋</span></h3>
                <p>I am Iris, a Virtual Assistant <br /> How may I help you?</p>
            </div>
            <div className="box">
                <h4>Frequenty Asked Questions <i className="fa fa-question-circle"></i></h4>
                <div className="box1">
                    <button className="btn default">
                        <i className="fa fa-circle"></i>
                        Can I redeem my FB before the original term?
                    </button>
                </div>
                <div className="box2">
                    <button className="btn default">
                        <i className="fa fa-circle"></i>
                        How do I pay my Credit card bill?
                    </button>
                </div>
                <div className="box3">
                    <button className="btn default">
                        <i className="fa fa-circle"></i>
                        How can I get my Account Statemnet?
                    </button>
                </div>
                <div className="box4">
                    <button className="btn default">
                        <i className="fa fa-circle"></i>
                        What is the tenure of Fixed deposit?
                    </button>
                </div>
                <div className="button-container">
                    <button className="button" type="button"><i className='far fa-comment-alt'></i> Start a New Conversation</button>
                </div>
            </div>

            <div className="circle"><i className='fas fa-robot fa-spin'></i></div>

        </>
    )
}

export default Header;