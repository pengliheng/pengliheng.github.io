import React, { Component } from 'react'

import './index.scss'
import loadingSvg from '@/assets/loading.svg'

export default class Loading extends Component {
	render() {
		return (
			<div className="Loading">
				<img alt="loading" src={loadingSvg} />
			</div>
		)
	}
}
