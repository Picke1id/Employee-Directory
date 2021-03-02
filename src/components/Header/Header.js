import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron';

function Header() {
    return (
        <Jumbotron fluid className="bg-secondary">
            <Container className="text-center">
                <h1 className="h1 text-white">Employee Directory</h1>
            </Container>
        </Jumbotron>
    )
}

export default Header;