import React from 'react';
import {Button, Card, Carousel, Container} from "react-bootstrap";

const Main = () => {

    const carouselItem = [
            {
                "id" : "1",
                "title" : "d-block w-100",
                "desc" : "First slide",
                "img" : "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
            },
            {
                "id" : "2",
                "title" : "d-block w-100",
                "desc" : "First slide",
                "img" : "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000"
            },
            {
                "id" : "3",
                "title" : "d-block w-100",
                "desc" : "First slide",
                "img" : "https://static-cse.canva.com/blob/572626/1.magebyRodionKutsaevviaUnsplash.jpg"
            }

        ];

    return (
        <>
        <Carousel nextLabel={""} prevLabel={""}>

            {carouselItem && carouselItem.map(item => (
                <Carousel.Item key={item.id}>
                    <img
                        className={item.title}
                        src={item.img}
                        alt={item.desc}
                        style={{ height : "550px"}}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
        <Container style={{marginTop : "5rem"}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
        </>
    );
};

export default Main;