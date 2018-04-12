import React from 'react';
import {Title, Row, Column, Form, Button, Input} from './FormElements';

export class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {valueA: 0, valueB:0, total:0};
		this.change = this.change.bind(this);
		this.calculate = this.calculate.bind(this);
	}
	change(ID,value){
		switch(ID){
			case "varA":
				this.setState({valueA: value});
				break;
			case "varB":
				this.setState({valueB: value});
				break;
		}		
	}
	calculate(buttonAction){
		let totalVal = 0;
		const varA = this.state.valueA;
		const varB = this.state.valueB;
		switch(buttonAction){
			case "add":
				totalVal = parseInt(varA)+parseInt(varB);
				break;
			case "substract":
				totalVal = varA - varB;
				break;
			case "divide":
				totalVal = varA / varB;
				break;
			case "multiply":
				totalVal = varA * varB;
				break;
			case "clear":
				totalVal = 0;
				break;
		}
		this.setState({total: totalVal});
	}
	render(){
		return (
			<div className="container">
				<Row marginTop="2">
					<Column columnSize="sm-12">
						<Title title="Simple Calculator"/>
					</Column>
				</Row>
				<Row marginTop="4">
					<Form>
						<Column columnSize="md-6">
							<Input placeholder="12345" inputID="varA" onChange={this.change}/>
						</Column>
						<Column columnSize="md-6">
							<Input placeholder="64789" inputID="varB" onChange={this.change}/>
						</Column>
					</Form>
				</Row>
				<Row marginTop="3">
					<Column columnSize="md-3">
						<Button buttonColor="primary" buttonAction="add" buttonText="+ Add" onClick={this.calculate}/>
					</Column>
					<Column columnSize="md-3">
						<Button buttonColor="primary" buttonAction="substract" buttonText="- Substract" onClick={this.calculate}/>
					</Column>
					<Column columnSize="md-3">
						<Button buttonColor="primary" buttonAction="divide" buttonText="/ Divide" onClick={this.calculate}/>
					</Column>
					<Column columnSize="md-3">
						<Button buttonColor="primary" buttonAction="multiply" buttonText="* Multiply" onClick={this.calculate}/>
					</Column>
				</Row>
				<Row marginTop="3">
					<Form>
						<Column columnSize="md-9">
							<Input placeholder="0" inputIsReadOnly="yes" value={this.state.total}/>
						</Column>
						<Column columnSize="md-3">
							<Button buttonColor="danger" buttonText="Clear" buttonAction="clear" onClick={this.calculate} />
						</Column>
					</Form>
				</Row>
			</div>
		)
	}
};
