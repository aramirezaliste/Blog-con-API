import React, {useContext} from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CartaIndividual = (props) => {
    const {store, actions} = useContext(Context);
    

    return (<div className="col m-2 p-0">
        <div className="card " style={{ minWidth: "18rem", maxWidth: "20%" }}>
            <img src="https://img1.pnghut.com/t/24/14/20/h7RAi8vtP1/emoticon-bulbasaur-ash-ketchum-charmeleon-charmander.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}{" "}{props.valor}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={props.url}>
                    <button className="btn btn-primary col-6 me-4"onClick={()=>{
                        actions.getDetallesPersonaje(props.valor)
                    }}>Ver {props.titulo}</button>
                </Link>
                <button className="btn btn-danger col-2 ms-5 p-1" onClick={()=>{
                    actions.addFavoritos(props.titulo)
                }}>💚</button>
            </div>
        </div>
    </div>)
}

export const CartaIndividual2 = (props) => {
    const {store, actions} = useContext(Context);
    

    return (<div className="col m-2 p-0">
        <div className="card " style={{ minWidth: "18rem", maxWidth: "20%" }}>
            <img src="https://img1.pnghut.com/t/24/14/20/h7RAi8vtP1/emoticon-bulbasaur-ash-ketchum-charmeleon-charmander.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}{" "}{props.valor}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={props.url}>
                    <button className="btn btn-primary col-6 me-4"onClick={()=>{
                        actions.getDetallesAreas(props.valor)
                    }}>Ver {props.titulo}</button>
                </Link>
                <button className="btn btn-danger col-2 ms-5 p-1" onClick={()=>{
                    actions.addFavoritos(props.titulo)
                }}>💚</button>
            </div>
        </div>
    </div>)
}

export const CartaDetalle = (props) => {
    const {store, actions} = useContext(Context);
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
                                <h6>Habilidades:</h6>
                                <p className="card-text">{store.detallesPersonaje.abilities.map((objeto,index)=>{
                                        return ( <li key={index}>{objeto.ability.name}</li>)
                                })}</p>
                                <h6>Peso:</h6>
                                <p className="card-text"> <li>{(store.detallesPersonaje.weight)/10} kg</li></p>
                                <h6>Altura:</h6>
                                <p className="card-text"><li>{(store.detallesPersonaje.height)/10} m</li></p>
                                <p className="card-text"><small className="text-muted">Base exp. : {store.detallesPersonaje.base_experience}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export const CartaDetalle2 = (props) => {
    const {store, actions} = useContext(Context);
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
                                <h5 className="card-title">{props.planetas}</h5>
                                <h6>Pokemones del Area:</h6>
                                <p className="card-text">{store.detallesAreas.pokemon_encounters.map((objeto,index)=>{
                                        return ( <li key={index}>{objeto.pokemon.name}</li>)
                                })}</p>
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