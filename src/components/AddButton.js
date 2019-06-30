import React from 'react'
import './styles/AddButton.css'
import buttomImg from '../images/add.png'
import { Link } from 'react-router-dom'


//function AddButton2(props) {
//   return(
//      <a href="/exercise/new">
//         <img src={buttomImg} className="Fitness-Add" alt="exercise"/>
//      </a>
//   )
//}

const AddButton = () => (
   <Link to="/exercise/new">
       <img src={buttomImg} className="Fitness-Add" alt="exercise"/>
   </Link>
)

export default AddButton