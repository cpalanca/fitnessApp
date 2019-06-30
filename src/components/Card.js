//importar las librerias lo primero
import React from 'react'
import emptyImg from '../images/empty.png'
import circlesImg from '../images/circles.png'
import './styles/Card.css'

//vamos a crear una clase
// vamos ahora hacer el componente dinamico para poder reutilizarlo cuando queramos
//con la info que queramos.
class Card extends React.Component{
    render(){
     const { title, img, description, leftColor, rightColor } = this.props
     return (
            <div className="card mx-auto Fitness-Card"
            style={{
                /*USANDO ESTILOS EN LINEA PARA REUTILIZAR EL COMPONENTE*/
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img || emptyImg} className="float-right" alt="exercise"/>
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

