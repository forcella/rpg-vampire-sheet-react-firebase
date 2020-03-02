import React, { Component, Fragment } from 'react'
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import './css/attr.css'
import 'react-widgets/dist/css/react-widgets.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Attr extends Component {
	onCkeck = (event) => {
		const { setSheetState, list } = this.props
		const index = parseInt(event.target.attributes.index.value, 10)
		const position = parseInt(event.target.attributes.position.value, 10)
		const checked = event.target.checked
		list.forEach((attr, i) => {
			if (index === i) {
				if (position > attr.value) {
					for (let i = attr.value; i <= position; i++) {
						attr.checkList[i] = checked
					}
				} else {
					for (let i = position; i <= attr.value; i++) {
						attr.checkList[i] = checked
					}
				}
				attr.value = position
			}
		})
		setSheetState(this.props)
	}
	onChange = (event) => {
		const { value } = event.target
		const { list, setSheetState } = this.props
		const index = parseInt(event.target.attributes.index.value, 10)
		list[index].specialization = value
		setSheetState(this.props)
	}
	getChecked(list) {
		return list.filter((checked) => checked).length
	}
	render() {
		return (
			<Col xs={12} md={this.props.row} id={this.props.id}>
				<h5 className="text-center">{this.props.title}</h5>
				{this.props.list.map((attr, index) => (
					<Row key={`${attr.name}_${index}`} className="mobile-spacing">
						<InputGroup className="desktop">
							<InputGroup.Prepend className="info-title">
								<InputGroup.Text>{attr.title}</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								type="text"
								className="attr-input"
								onChange={this.onChange}
								value={attr.specialization}
								name={attr.name}
								index={index}
							/>
							<InputGroup.Prepend className="checkbox circular-checkbox">
								{attr.checkList.map((check, position) => (
									<InputGroup.Checkbox
										key={`${attr.name}_${position}`}
										index={index}
										position={position}
										name={attr.name}
										checked={check}
										onChange={this.onCkeck}
									/>
								))}
							</InputGroup.Prepend>
						</InputGroup>

						<InputGroup className="mobile">
							<InputGroup.Prepend>
								{attr.title && (
									<InputGroup.Text style={{ fontWeight: 600 }}>{attr.title}</InputGroup.Text>
								)}
							</InputGroup.Prepend>
							<FormControl
								type="text"
								onChange={this.onChange}
								value={attr.specialization}
								name={attr.name}
								index={index}
								disabled={attr.specialization === null ? true : false}
							/>

							<InputGroup.Append>
								<FormControl
									type="number"
									style={{ width: 30, padding: 0, margin: 0, textAlign: 'center' }}
									disabled
									value={this.getChecked(attr.checkList)}
								/>
								<InputGroup>
									<Button
										style={{ width: 30, padding: 5, textAlign: 'center', marginLeft: 5 }}
										variant="dark"
									>
										<FontAwesomeIcon icon="plus" />
									</Button>
									<span style={{ marginLeft: 5 }} />
									<Button
										style={{ width: 30, padding: 5, textAlign: 'center', marginLeft: 5 }}
										variant="dark"
									>
										<FontAwesomeIcon icon="minus" />
									</Button>
								</InputGroup>
							</InputGroup.Append>
						</InputGroup>
					</Row>
				))}
			</Col>
		)
	}
}

Attr.defaultProps = {
	row: 4
}
