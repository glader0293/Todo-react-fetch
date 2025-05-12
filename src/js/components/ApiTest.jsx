import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const ApiTest =  () =>{
    const urlBase = "https://rickandmortyapi.com/api"
    const [characters, setCharacters] = useState([])
    const getAllCharacter = () =>{
        fetch(`${urlBase}/character`)
        .then((response) => response.json())
        .then ((data) => setCharacters(data.results))
        .catch((error) => console.log(error))

    }
    useEffect(() =>{
        getAllCharacter()
    }, [])

    return (
      <div className="container">
        <div className="row">
            <div className="col-12">
              {
                characters.map((item) =>(
                  <p key={item.id}>
                    Hola que tal <span className="text-danger">{item.name}</span>
                  </p>
                ))
              }          
            </div>
        </div>
      </div>
    )

};



export default ApiTest;










