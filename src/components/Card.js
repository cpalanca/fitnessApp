//importar las librerias lo primero
import React from 'react'
import exerciseImg from '../images/exercise.png'
import circlesImg from '../images/circles.png'
import './styles/Card.css'

//vamos a crear una clase
// vamos ahora hacer el componente dinamico para poder reutilizarlo cuando queramos
//con la info que queramos.
class Card extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state = {
            image: 'https://www.fitnessenfemenino.com/wp-content/uploads/4_Fondo-de-triceps_cuadricula.gif'
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
            })
        }, 5000);
    }

    render(){
     const { title, img, description, leftColor, rightColor } = this.props
     return (
            <div className="card mx-auto Fitness-Card"
            style={{
                /*USANDO ESTILOS EN LINEA PARA REUTILIZAR EL COMPONENTE*/
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="float-right" alt="imagen flexi&oacute;n"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card

