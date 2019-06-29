//MODO JAVASCRIPT 
//const element = document.createElement('h1')
//element.innerText = 'Hola React..'
//const container = document.getElementById('root')
//container.appendChild(element)

//MODO REACTJS
import React from 'react'
import ReactDOM from 'react-dom'

// COMPONENTES JSX
const user = {
    firstName: 'Carlos',
    lastName: 'Palanca',
    avatar: 'https://cdn4.iconfinder.com/data/icons/superheroes/512/ironman-512.png'   
}

function getName(user){
    return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
    if(user){
        return <h1>Hola {getName(user)}</h1>
    }
    return <h1>Hola Estraño</h1>
}

const name = 'Carlos'

const element = (
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar} />
    </div>
)
const container = document.getElementById('root')

//ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(element, container)