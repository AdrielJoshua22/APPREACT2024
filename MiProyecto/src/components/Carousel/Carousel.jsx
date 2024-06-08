import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

export function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carousel"
          src="./Img/img.jpg"
          alt="First slide"
          style={{ height: '400px' }} 
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Img/img2.jpg"
          alt="Second slide"
          style={{ height: '400px' }} 
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Img/img.jpg"
          alt="Third slide"
          style={{ height: '400px' }} 
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

