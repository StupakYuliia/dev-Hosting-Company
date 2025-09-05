import React from "react"

class WhyUsCard extends React.Component {
	render() {
		return (
			<div className="why-us__card">
				<div className="why-us__icon">
				<img src={this.props.image} alt={this.props.alt}/>
				</div>
				<h5>{this.props.title}</h5>
				<p>{this.props.text}</p>
			</div>
		)
	}
}

export default WhyUsCard
