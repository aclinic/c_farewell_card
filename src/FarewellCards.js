import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const FarewellCards = (props) => {
    const cards = props.messages.map((message, idx) => {
        return (
            <Col key={idx}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><b>{message.author}</b></Card.Title>
                        <Card.Text>
                            {message.farewellMessage}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return (
        <Container>
            <Row>
                {cards}
            </Row>
        </Container>
    )
}

export default FarewellCards
