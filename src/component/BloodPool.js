import React, { Component } from 'react'
import { Row, Col, InputGroup } from 'react-bootstrap'

export default class BloodPool extends Component {
	onCkeck = (event) => {
		const { list } = this.props
		const index = parseInt(event.target.attributes.index.value, 10)
		const check = event.target.checked
		const length = list.secondPool.length

		for (let i = length; i > index; i--) {
			list.secondPool[i - 1] = check
		}
		this.props.setSheetState(this.props)
	}
	render() {
		return (
			<Row className="footer-spacing footer-spacing-print">
				<Col xs={12}>
					<h5 className="text-center">{this.props.list.title}</h5>
				</Col>
				<Col xs={12}>
					<InputGroup.Prepend className="big-checkbox square-checkbox">
						{this.props.list.firstPool.map((check, position) => (
							<InputGroup.Checkbox
								key={`${this.props.name}_${position}`}
								position={position}
								name={this.props.name}
								checked={check}
								onChange={() => false}
							/>
						))}
					</InputGroup.Prepend>
				</Col>
				<Col xs={12}>
					<InputGroup.Prepend className="big-checkbox square-checkbox">
						{this.props.list.secondPool.map((check, index) => (
							<InputGroup.Checkbox
								key={`${this.props.name}_${index}`}
								index={index}
								name={this.props.name}
								checked={check}
								onChange={this.onCkeck}
							/>
						))}
					</InputGroup.Prepend>
				</Col>
			</Row>
		)
	}
}
