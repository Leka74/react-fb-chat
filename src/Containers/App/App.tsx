import * as React from 'react';
import Bubble from '../../Components/Bubble/Bubble';
import Input from '../../Components/Input/Input';
import './App.css';

interface IMessage {
  text: string,
  side: "left" | "right";
}

interface IAppState {
  messages: IMessage[];
}

class App extends React.Component<{}, IAppState> {
  public state = {
    messages: []
  }

  public lastBubble: any;

  public render() {
    return (
      <React.Fragment>
          {/* Header */}
          <div id="header">react-fb-chat</div>
          {/* Chat */}
          <div id="chat">
            {this.state.messages.map((message: IMessage, index: number) => {
              return (<Bubble key={index} index={index} side={message.side} handleDeletion={this.handleDeletion}>{message.text}</Bubble>)
            })}
            <div className="seen">Seen</div>
            <div  style={{ float:"left", clear: "both" }} ref={(el) => {this.lastBubble = el}}/>
          <br/>
          </div>
          {/* Footer */}
          <div id="footer">
            <Input onInput={this.handleInput}/>
          </div>
      </React.Fragment>
    );
  }

  public scroll = () => {
    this.lastBubble.scrollIntoView({ behavior: "instant", block: "end"});
  }

  public handleInput = (message: string) => {
    this.setState((prevState: IAppState) => {
      return {...prevState, messages: [...prevState.messages, {text: message, side: "right"}]}
    });

    this.setState((prevState: IAppState) => {
      return {...prevState, messages: [...prevState.messages, {text: message, side: "left"}]}
    });

    this.scroll();
  }

  public handleDeletion = (key: number) => {
    const messages: IMessage[] = this.state.messages.slice();
    messages[key].text = "Message has been deleted";
    this.setState((prevState: IAppState) => {
      return {...prevState, "messages": messages};
    })
  }
}

export default App;
