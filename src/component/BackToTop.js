import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './css/back-to-top.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class BackToTop extends Component {
	timeOut = null
	componentDidMount = () => {
		this.showScrollButton()
	}
	showScrollButton = () => {
		const MIN_SCROLL = 50
		const btnStyle = document.getElementById('scrollTop').style

		window.onscroll = () => {
			const { scrollTop } = document.documentElement
			clearTimeout(this.timeOut)
			this.timeOut = setTimeout(() => {
				btnStyle.display = btnStyle.display === 'block' ? 'none' : ''
			}, 5000)
			scrollTop > MIN_SCROLL ? (btnStyle.display = 'block') : (btnStyle.display = 'none')
		}
	}

	scrollTop = () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}

	render = () => (
		<Button id="scrollTop" className="btn-back-top" onClick={this.scrollTop}>
			<FontAwesomeIcon icon="angle-up" />
		</Button>
	)
}
