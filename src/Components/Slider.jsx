import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../Images/slider/slide1.jpg';
import slide2 from '../Images/slider/slide2.jpg';
import slide3 from '../Images/slider/slide3.jpg';
import slide4 from '../Images/slider/slide4.jpg';
import slide5 from '../Images/slider/slide5.jpg';
import slide6 from '../Images/slider/slide6.jpg';

export default function Slider(){
    return (
        <div className="slider px-10 py-4 bg-black">
        <Carousel>
          <Carousel.Item>
            <img src={slide1} style={{width:"100%",height:"300px"}}/>
          </Carousel.Item>

          <Carousel.Item>
          <img src={slide2} style={{width:"100%",height:"300px"}}/>
          </Carousel.Item>
          
          <Carousel.Item>
          <img src={slide3} style={{width:"100%",height:"300px"}}/>
          </Carousel.Item>

          <Carousel.Item>
          <img src={slide4} style={{width:"100%",height:"300px"}}/>
          </Carousel.Item>

          <Carousel.Item>
          <img src={slide5} style={{width:"100%",height:"300px"}}/>
          </Carousel.Item>

          <Carousel.Item>
          <img src={slide6} style={{width:"100%",height:"300px"}}/>
          </Carousel.Item>
        </Carousel>
        </div>
      );
      
}
