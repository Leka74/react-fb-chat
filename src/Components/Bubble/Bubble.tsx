import * as React from 'react';
import './Bubble.css';
import BubbleAction from '../BubbleAction/BubbleAction';

interface IBubbleProps {
	side: "left" | "right";
	index: number;
	handleDeletion(key: number): void;
}

interface IBubbleState {
	displayOptions: boolean;
}

class Bubble extends React.Component<IBubbleProps, IBubbleState> {
	public state = {
		displayOptions: false
	}

	public render() {
		// Determine which side to render the bubble
		const side = this.props.side;

		return (
			<div className="bubble-container" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
				<div className={"bubble " + side}>
					{this.props.children}
				</div>
				{this.props.children !== "Message has been deleted"? <BubbleAction side={side} display={this.state.displayOptions} deleteMessage={this.handleDeletion} isFirst={this.props.index === 0}/>: ""}
			</div>
		)
	}

	public handleDeletion = () => {
		this.props.handleDeletion(this.props.index);
	}

	public handleMouseEnter = () => {
		this.setState({displayOptions: true});
	}

	public handleMouseLeave = () => {
		this.setState({displayOptions: false});
	}
}

export default Bubble;