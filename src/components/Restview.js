import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap'
function Restview() {
  var [Allrestaurants,setRestaurants]=useState([])

  const fetchRestaurant=async()=>{
    const result=await fetch('/restaurants.json')
  result.json().then(data=>{
      setRestaurants(data.restaurants)
    }
  )
}

 const params=useParams()
 const restaurant=Allrestaurants.find(item=>item.id==params.id)

console.log(restaurant);
 useEffect(()=>{
  fetchRestaurant()
 },[])
  
  return (
    <>
      <Row>
        <Col>
            
        </Col>
      </Row>
    </>
  )}
export default Restview