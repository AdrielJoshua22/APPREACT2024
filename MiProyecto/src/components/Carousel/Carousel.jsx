import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

export function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block h-75 w-100 h-75"
          src="./Img/img.jpg"
          alt="First slide"
          style={{ height: '300px' }}
        />
        <Carousel.Caption>
         {/*  <h5>First slide label</h5>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Img/img2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
       {/*    <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Img/img.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
     {/*      <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
