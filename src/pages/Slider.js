import Carousel from 'react-bootstrap/Carousel';
import coverImg from '../images/Blue Purple Orange Cartoon Playful Web Software Development Announcement Banner.png';

export default function Slider()  {
  return (
    <Carousel fade interval={3000} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://www.techbooky.com/wp-content/uploads/2018/04/technology-and-us-scaled.jpg'
          alt="First slide"
          height='800px'
        />
        <Carousel.Caption>
        <h1 style={{fontFamily:'Times New Roman',fontWeight:'bold',color:'#fff' ,fontSize:'60px',marginBottom:'45px'}}>Welcome For EveryTime</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={coverImg}
          alt="Second slide"
          height='800px'
        />

        <Carousel.Caption>
                <h1 style={{fontFamily:'Times New Roman',fontWeight:'bold',color:'#555' ,fontSize:'60px',marginBottom:'45px'}}>Today Better Than Yesterday</h1>

          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://importanceoftechnology.net/wp-content/uploads/2020/10/Possible-Future-Technology-of-the-World.jpg'
          alt="Third slide"
          height='800px'
        />

        <Carousel.Caption>
        <h1 style={{fontFamily:'Times New Roman',fontWeight:'bold',color:'#555' ,fontSize:'60px',marginBottom:'45px'}}>We Can Help You</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
