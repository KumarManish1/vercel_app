import React from "react";
import '../static/css/ItemCategory.css'


const ItemCategory=(props)=>{
    return (
        <>
            <div className="card cardDimention " >
                <div className="card-header">
                    <b>{props.heading}</b>
                </div>
                <ul className="p-2">
                    {props.other.map(it => {
                    return <a className="list-group-item p-1">{it}</a>})}
                </ul>
            </div>
        </>
    )
}
export default ItemCategory;