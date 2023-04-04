import React, { useState, useEffect } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Restaurant() {
  //state to hold data from api
  var [retaurantList, setRestaurant] = useState([])
  //function to call api
  const fetchData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(
      data => {
        setRestaurant(data.restaurants)
      }
    )
  }
  console.log(retaurantList);
  useEffect(() => {
    fetchData()
  }, [])



  return (
    <Row>

      {retaurantList.map(item => (
       <Col className='p-5'  lg={4} md={6}> 
       <Restcard restdata={item}></Restcard></Col>
      ))}
    </Row>
  )
}

export default Restaurant