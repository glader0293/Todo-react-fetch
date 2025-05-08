import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// css
import "../../styles/index.css"

//create your first component
const Home = () => {
	return (
		<div className="container bg-white d-flex align-items-center justify-content-center flex-column">
			<h1>todos</h1>
			<div className="container-box">
				<ul>
					<li><input type="text" placeholder="What do you need to do"></input></li>
					<li>Take a shower</li>
					<li>Sleep a lot</li>
					<li>Place a market order</li>
					<li>Do some homework</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;