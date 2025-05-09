import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import "@fontsource/work-sans/300.css"; 



// css
import "../../styles/index.css"

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState ([]);
	return (
		<div className="container bg-light d-flex align-items-center justify-content-center flex-column w-50 h-40">
			<h1>todos</h1>
			
			<div className="container-box d-flex justify-content-between flex-column bg-white shadow bg-white">
				<ul className="p-0">
					
						<input type="text"
								className="border-bottom px-3 py-2"
								onChange={(e) => setInputValue(e.target.value)}
								value= {inputValue}
								onKeyPress = {(e)=> {
									if(e.key === "Enter"){
										setTodos(todos.concat(inputValue));
									}
								}} 
								placeholder="What do you need to do">
						</input>
					
					
					{todos.map((item,index) => (
							<div className="d-flex align-items-center justify-content-between icon hover-item p-0">
								<li className="px-3 py-2">{item}</li> 
								<FontAwesomeIcon className="icon-hidden icon-color px-3 py-2" 
								onClick={() =>
								setTodos(
									todos.filter(
										(t, currentIndex) =>
											index != currentIndex
									)
								)	
								}
								icon={faX} size="2xs" />
								
								
							</div>
					))}
					
					
					
				
				</ul>
				<span className="d-flex align-items justify-content-start px-3 py-2 m-0">{todos.length} items left</span>
			</div>
			
		</div>
	);
};

export default Home;