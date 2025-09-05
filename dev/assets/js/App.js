import React from "react"
import ContentBlock from "../../components/ContentBlock"
import WhyUsCard from "../../components/WhyUsCard"


class App extends React.Component {
    render() {
        return (
			<div className="container">
				<div className="why-us__top">
					<ContentBlock
						title="True Cloud Web  Hosting"
						text="True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable."
					/>
					<div className="why-us__images">
						<div className="why-us__image">
							<img src="./assets/img/cPanel.png" alt="cPanel"/>
						</div>
						<div className="why-us__image">
							<img src="./assets/img/secured-by-Imunify360.png" alt="secured by Imunify 360"/>
						</div>
						<div className="why-us__image">
							<img src="./assets/img/litespeed.png" alt="litespeed"/>
						</div>
						<div className="why-us__image">
							<img src="./assets/img/softaculous.png" alt="softaculous"/>
						</div>
						<div className="why-us__image">
							<img src="./assets/img/word-press.png" alt="WordPress"/>
						</div>
						<div className="why-us__image">
							<img src="./assets/img/cloudflare.png" alt="cloudflare"/>
						</div>
					</div>
				</div>

				<div className="why-us__bottom">
					<WhyUsCard
						image="./assets/img/icon-time.png"
						alt="icon time"
						title="99.9% Uptime"
						text="We Keep Your Web build Online 24x7x365.
						Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
					/>
					<WhyUsCard
						image="./assets/img/icon-cloud-settings.png"
						alt="icon cloud settings"
						title="Blazing Fast Web Hosting"
						text="We Keep Your Web build Online 24x7x365.
						Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
					/>
					<WhyUsCard
						image="./assets/img/icon-growth.png"
						alt="icon growth"
						title="Free SSL Certificates"
						text="We Keep Your Web build Online 24x7x365.
						Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
					/>
					<WhyUsCard
						image="./assets/img/icon-support.png"
						alt="icon support"
						title="24x7 Friendly Support"
						text="We Keep Your Web build Online 24x7x365.
						Downtime not only costs you lost visitors but also damages your reputation and search engine rankings."
					/>
				</div>
			</div>
        )
    }
}

export default App
