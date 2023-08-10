import React from 'react'

export default function FoodCard(props) {
  return (
    <div className='col-md-12'>
        <div className="card resturant-card mt-4" >
            <img className={"card-img-top "+props.img_class} src={process.env.PUBLIC_URL+""+props.img} alt="Card image cap"/>
            <div className="card-body">
                <div className='row'>
                    <div className='col-md-9 col-sm-9 col-9'>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.timing}</p>
                    </div>
                    <div className='col-md-3 col-md-3 col-3 text-center'>
                        <a href="#" className="btn btn-primary"><i className="fa fa-arrow-right" style={{color:'white',fontSize:'30px'}}></i></a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
