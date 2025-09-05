import React from "react"

class ContentBlock extends React.Component {
    render() {
        return (
            <div className='content-block'>
				<h3>{this.props.title}</h3>
				<p>{this.props.text}</p>
			</div>
        )
    }
}

export default ContentBlock
