import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
function Restcard({ restdata }) {
    return (
        <>
            <Link to={`/view-restaurant/${restdata.id}`} style={{textDecoration:'none'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={restdata.photograph} />
                    <Card.Body>
                        <Card.Title><h4 className='text-primary'>{restdata.name}</h4></Card.Title>
                        <Card.Text>
                            <p>{restdata.neighborhood}{restdata.address}</p>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default Restcard