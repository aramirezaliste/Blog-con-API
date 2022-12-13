import React from "react";
import { Link } from "react-router-dom";


export const CartaIndividual = (props) => [
    <div className="col m-2 p-0">
        <div className="card " style={{ minWidth: "18rem", maxWidth: "20%" }}>
            <img src="https://img1.pnghut.com/t/24/14/20/h7RAi8vtP1/emoticon-bulbasaur-ash-ketchum-charmeleon-charmander.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}{" "}{props.valor}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={props.url}>
                    <button className="btn btn-primary col-6 me-4">Ver {props.titulo}</button>
                </Link>
                <button className="btn btn-danger col-2 ms-5">💚</button>
            </div>
        </div>
    </div>
]

export const CartaDetalle = (props) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="card mb-3" style={{ width: "60rem" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://www.pngfind.com/pngs/m/665-6650179_pikachu-sleep-asriel-dreemurr-pixel-art-hd-png.png" className="img-fluid rounded-start" alt="..." style={{}} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.personaje}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export const CartaInicio = (props) =>{
    return (
        <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="card mb-3" style={{ width: "60rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://www.pngfind.com/pngs/m/665-6650179_pikachu-sleep-asriel-dreemurr-pixel-art-hd-png.png" className="img-fluid rounded-start" alt="..." style={{}} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.titulo}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Link to={props.ruta}>
                            <button className="btn btn-danger">Ver {props.titulo}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}