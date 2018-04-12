import React from 'react';

export function Title(props){
	return(
		<h3 className="text-center">{props.title}</h3>
	);
}
export function Row(props){
	return(
		<div className={"row mt-"+ props.marginTop}>
			{props.children}
		</div>
	);
}

export function Column(props){
	return (
		<div className={"col-"+props.columnSize}>
			{props.children}
		</div>
	);
}

export function Form (props){
	return(
		<form className="col-sm-12">
			<div className="form-row">
				{props.children}
			</div>
		</form>
	);
}

export class Button extends React.Component{
	constructor(props){
		super(props);
		this.state = {value:""};

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		const buttonAction = this.props.buttonAction
		this.props.onClick(buttonAction);
	}

	render(){
		return (
			<button type="button" class={"btn btn-block btn-"+this.props.buttonColor} onClick={this.handleClick} buttonAction={this.props.buttonAction}>{this.props.buttonText}</button>
		)
	}
};

export class Input extends React.Component{
	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		const value = e.target.value;
		const ID = this.props.inputID;
		switch(ID){
			case "varA":
				this.props.onChange(ID,value);
				break;
			case "varB":
				this.props.onChange(ID,value);
				break;
		}
	}

	render(){
		if(this.props.inputIsReadOnly == "yes") {
			return (<input type="number" id="results" className="form-control"  placeHolder={this.props.placeholder} value={this.props.value} readOnly/>);
		} else {
			return (<input type="number" className="form-control" onChange={this.handleChange} placeHolder={this.props.placeholder} />);
		}
	}
}
