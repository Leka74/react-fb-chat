import * as React from "react";
import './BubbleAction.css';

interface IBubbleActionProps {
		side: "left" | "right";
		display: boolean;
		isFirst: boolean;
		deleteMessage(): void;
}

interface IBubbleActionState {
	showPopup: boolean;
}

class BubbleAction extends React.Component<IBubbleActionProps, IBubbleActionState> {
		public state = {
				showPopup: false
		}

		public render() {
				// Determine which side is the bubble so we can align the elements to that side
				const side = this.props.side;

				return (
						<div className={"actions " + side}>
								{this.props.display ? <img className="action-dots" src="https://www.svgrepo.com/show/124304/three-dots.svg" width={15} onClick={this.handleClick}/>: ""}
								{this.props.display && this.state.showPopup ? <span className={"popuptext " + (this.props.isFirst ? "first-element": "")} onClick={this.handleDelete}>Delete this</span>: ""}
						</div>
				)
		}

		public componentWillUpdate() {
				if (!this.props.display) {
						// this.setState({showPopup: false});
						this.state.showPopup = false;
				}
		}

		public handleClick = () => {
				this.setState((prevState: IBubbleActionState) => {
						return {...prevState, "showPopup": !prevState.showPopup};
				})
		}

		public handleDelete = () => {
				// alert("Deleting now");
				this.setState({showPopup: false});
				this.props.deleteMessage();
		}
}

export default BubbleAction;