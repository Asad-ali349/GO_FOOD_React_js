import React from 'react'
import ResturantCard from './ResturantCard'

export default function Resturants() {
  return (
    <section className='resturant-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
                <center><h2><span style={{'color':'#E73D61'}}>Top</span> Resturants</h2></center>
            </div>
          <div className='col-md-4'>
            <ResturantCard timing='10:00am-11:00pm' name='Pizza Hutt' img='/assets/images/pizzahut.jpg' img_class='resturant-card-image1'/>
          </div>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-6'>
                <ResturantCard timing='10:00am-11:00pm' name='Burger king' img='/assets/images/burgerking.jpg' img_class='resturant-card-image'/>
              </div>
              <div className='col-md-6'>
                <ResturantCard timing='10:00am-11:00pm' name='Kabab King' img='/assets/images/kabab.jpg' img_class='resturant-card-image'/>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <ResturantCard timing='10:00am-11:00pm' name='Royal Kabab' img='/assets/images/kababking.jpg' img_class='resturant-card-image'/>
              </div>
              <div className='col-md-6'>
                <ResturantCard timing='10:00am-11:00pm' name='Fried Fish' img='/assets/images/fish.jpg' img_class='resturant-card-image'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
