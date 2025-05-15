import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import "@fontsource/work-sans/300.css"; 



// css
import "../../styles/index.css"

//create your first component
const initialStateTask = {
	label: "",
	is_done: false
}

const urlBase = "https://playground.4geeks.com/todo"

const Home = () => {
	const [task, setTask] = useState(initialStateTask);
	const [todos, setTodos] = useState ([]);

	const handleChange = (event) => {
			setTask({
				...task,
				label: event.target.value
			})
		}
	const saveTask = async (event) =>{
		if(event.key === "Enter"){
			try{
				const response = await fetch (`${urlBase}/todos/glader0293`, {
				   method: "POST",
				   headers: {
					 "Content-Type": "application/json"
				   },
				   body:JSON.stringify(task)
				})
				if(response.ok){
					getAllTask();
					setTask(initialStateTask)
				}
			} catch (error){
				console.log(error)
			}
	}

	}

	const deleteTask = async (id) => {
        try {
            const response = await fetch(`${urlBase}/todos/${id}`, {
                method: "DELETE"
            })

            if (response.ok) {
                getAllTask()
            }
            if (response.status == 404) {
                console.log("El usuario no existe")
            }

        } catch (error) {
            console.log("Explote")
        }
    }

	 async function createUser() {
        try {
            const response = await fetch(`${urlBase}/users/glader0293`, {
                method: "POST"
            })

            if (!response.ok) {
                console.log("generamos error")
            }


        } catch (error) {
            console.log(error)
        }
    }
	 const getAllTask = async () => {
        try {
            const response = await fetch(`${urlBase}/users/glader0293`) // es un get
            const data = await response.json()

            if (response.ok) {
                setTodos(data.todos)
            }
            if (response.status == 404) {
                // hacer una funcion que crea el usuario
                console.log("crear el usuario")
                createUser()
            }

        } catch (error) {
            console.log(error)
        }
    }

	  useEffect(() => {
        getAllTask()
    }, [])

	return (
		
		<div className="container bg-light d-flex align-items-center justify-content-center flex-column w-50 h-40">
			<h1>todos</h1>
			
			
			<div className="container-box d-flex justify-content-between flex-column bg-white shadow bg-white">
				<ul className="p-0">
					
						<input type="text"
								className=" px-3 py-2"
								onChange={handleChange}
								value= {task.label}
								onKeyDown = {saveTask}
								placeholder="What do you need to do">
						</input>
					
					
					{todos.map((item,index) => (
							<div key ={item.id}className="d-flex align-items-center justify-content-between icon hover-item p-0">
								<li className="px-3 py-2">{item.label}</li> 
								<FontAwesomeIcon className="icon-hidden icon-color px-3 py-2" 
								onClick={()=> deleteTask(item.id)}
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