import React from "react";

class MessageBar extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.state = {messageText: ''};
    }

    handleChange(e) {
        this.setState({messageText: e.target.value});
    }

    handleSend(){
        console.log(this.state.messageText)
        document.getElementById("input_text").value = '';
    }

    render(){
        
        const messageText = this.state.messageText;
        return(
            <div>
                <input className="input-text" id="input_text" onChange={this.handleChange}></input>
                <button className="button-send" onClick={this.handleSend}>SEND</button>
            </div>
        )
    }
}

export default MessageBar;
