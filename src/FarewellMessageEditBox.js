import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const handleClick = (id, event) => {
    console.log(id)
    console.log(event.target.elements.formBasicText.value)
    event.preventDefault()
    event.stopPropagation()
    fetch('https://cory-farewell-card.herokuapp.com/message',
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id: id, farewellMessage: event.target.elements.formBasicText.value }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            document.location.href='/'
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}

const FarewellMessageEditBox = (props) => {
    return (
        <Form onSubmit={(e) => { handleClick(props.id, e) }}>
            <Form.Group as={Row} controlId='formBasicText'>
                <Col sm={3}>
                    <Form.Label>Your Farewell Wishes To Cory</Form.Label>
                </Col>
                <Col sm={6}>
                    <Form.Control type="text" placeholder="Enter your wish here."></Form.Control>
                </Col>
                <Col sm={3}>
                    <Button type='submit'>
                        Submit
                        </Button>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default FarewellMessageEditBox
