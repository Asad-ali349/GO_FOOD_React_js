import React from 'react'

export default function FoodCard(props) {
  return (
    <div className='col-md-12 p-3'>
        <div className="card" >
            <img className="card-img-top" src={process.env.PUBLIC_URL+""+props.img} alt="Card image cap"/>
            <div className="card-body">
                <center><h5 className="card-title">{props.cardheading}</h5>
                <p className="card-text">{props.price}</p>
                <a href="#" className="btn btn-primary">Add To Cart</a></center>
            </div>
        </div>
    </div>
  )
}
