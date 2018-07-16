import * as React from 'react';
import './Input.css';

interface IInputState {
    message: string;
}

interface IInputProps {
    onInput(message: string): void;
}

class Input extends React.Component<IInputProps, IInputState> {
    public state = {
        message: ""
    }

    public inputEl: HTMLInputElement | null;

    public render() {
        return (
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <input type="text" id="chat-input" value={this.state.message} autoFocus={true} autoComplete="off" placeholder="Type a message..." ref={(ref) => this.inputEl = ref}/>
                <img id="chat-send" src="https://www.svgrepo.com/show/15468/send.svg" width={25} onClick={this.handleSubmit}/>
            </form>
        );
    }

    public handleChange = (event: any) => {
        this.setState({message: event.target.value});
    }

    public handleSubmit = (event: any) => {
        event.preventDefault();
        if (this.state.message.length === 0) {
            return;
        }
        this.props.onInput(this.state.message);

        this.setState({message: ""});
        if (this.inputEl) {
            this.inputEl.focus();
        }
    }
}

export default Input;