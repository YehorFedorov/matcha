import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

export default class Media extends React.Component {
    render() {
        return <Carousel>
            <CarouselItem>
                <img width="100%" height={500} alt="900x500" src="img/test.jpg"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
                <img width="100%" height={500} alt="900x500" src="img/test.jpg"/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
                <img width="100%" height={500} alt="900x500" src="img/test.jpg"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
    }
}