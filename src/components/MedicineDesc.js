import React from "react";
import pic from '../static/pic.jpg'
import '../static/css/MedicineDesc.css'
const MedicineDesc=(props)=>{
    return(
        <div className="card cardDimention float-right" style={{width:"400px"}} >
            <img src={pic} className="card-img-top" alt="..." style={{width:"390px",padding:"10px"}}/>
            {console.log(props)}
            <div className="card-body text-center">
                <h5 className="card-title">{props.name}</h5>
                <h5 className="card-text text-danger ">{props.price}</h5>
                <h6 className="">{props.brand}</h6>
                <h6 className="text-muted">{props.address}</h6>
                <hr/>
                <a href="#" className="btn btn-primary">Contact Supplier</a>
            </div>
        </div>
    );
}
export default MedicineDesc;