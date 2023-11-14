
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { styled } from '@mui/material';

import { bannerData } from '../../constants/data';

const Image= styled('img')({
    width:'100%',
    height:'270px'
})

const responsive = {
  
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Banner = () =>{
    return (
        <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        
        //ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        //customTransition="all .5"
        //transitionDuration={500}
        containerClass="carousel-container"
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
            {
                bannerData.map(data=>(
                    <Image src={data.url} alt='banner'/>
                ))
            }
           
            </Carousel>
    )
}
export default Banner;