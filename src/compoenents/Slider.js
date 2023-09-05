import Carousel from 'react-bootstrap/Carousel';
import image1   from './Images/image1.jpg';
import image2   from './Images/image2.jpg';
import image3   from './Images/image3.jpg';
import './Slider.css';

function Slider() {
return (
    
    <Carousel data-bs-theme="light" >
        <Carousel.Item >
        <img className="d-block w-100 height" 
        src={image2}
        alt="First slide"/>
        <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 height"
        src={image1}
        alt="Second slide"/>
        <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 height"
        src={image3}
        alt="Third slide"/>
        <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export default Slider;