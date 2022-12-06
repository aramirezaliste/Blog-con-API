import React from "react";
import { Link } from "react-router-dom";

export const CartaIndividual = (props) => [
    <div className="col m-1">
        <div className="card " style={{ width: "18rem"}}>
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={props.url}>
                <a className="btn btn-primary col-6 me-4">Ir al {props.titulo}</a>
                </Link>
                <button className="btn btn-danger col-2 ms-5">💚</button>
            </div>
        </div>
    </div>
]