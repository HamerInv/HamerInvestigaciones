import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
//fotos
import Foto1 from '../../assets/foto1.jpg';
import Foto2 from '../../assets/foto2.jpg';
import Foto3 from '../../assets/foto3.jpg';
import { Box, Button, Typography } from '@mui/material';
import AdsClickIcon from '@mui/icons-material/AdsClick';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "transparent", margin: "0 4%", zIndex: '2'}}
      onClick={onClick}
    />
  );
}

export const SliderComponent = ({
  titulo1 = 'Hamer',
  subtitulo1 = 'Investigaciones',
  p1 = 'Descubre la verdad, confía en Hamer Investigaciones. Tu detective privado de confianza.',
  titulo2 = 'Garantizamos completa discreción y reserva',
  p2 = 'Conozca ¿Cómo trabajamos?',
  titulo3 = 'Expertos en infidelidades',
  p3 = 'Vea nuestros servicios y herramientas'
}) => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 5000,
  };

    return (
      <div sx={{zIndex: '1'}}>
        <Slider {...settings}>
            <div>
              <Typography sx={{color: 'secondary.main', position: 'absolute', top:'30%', fontSize: {xs:'2.5rem', lg:'4rem'}, textTransform: 'uppercase', fontFamily: 'Sorts Mill Goudy', fontWeight: '700', m:{xs:'0 25px', lg: '0 110px'}}}>{titulo1}</Typography>
              <Typography sx={{color: 'third.main', position: 'absolute', top:'40%', fontSize: {xs:'2rem', lg:'3rem'}, textTransform: 'uppercase', fontFamily: 'Montserrat', m:{xs:'0 25px', lg:'0 110px'}}}>{subtitulo1}</Typography>
              <Box sx={{color: 'primary.main', position: 'absolute', top:{xs:'50%', lg:'52%'}, fontSize: {xs:'1rem'}, maxWidth: {xs:'290px', lg:'550px'}, m:{xs:'0 35px', lg:'0 110px'}, fontFamily: 'Montserrat'}}>{p1}</Box>
              <img src={Foto1} className='img'/>
            </div>
            <div>
              <Box sx={{color: 'third.main', position: 'absolute', top:{xs:'15%', lg:'23%'}, fontSize: {xs:'2rem', lg:'3rem'}, textTransform: 'uppercase', fontFamily: 'Sorts Mill Goudy', m:{xs:'0 30px', lg:'0 110px'}, maxWidth: {xs:'300px', lg:'800px'}}}>{titulo2}</Box>
              <Box sx={{color: 'primary.main', position: 'absolute', top:'47%', fontSize: {xs:'1rem'}, fontFamily: 'Montserrat', m:{xs:'0 30px', lg:'0 110px'}, maxWidth: {xs:'300px'}}}>{p2}</Box>
              <Button variant="outlined" href="#outlined-buttons" sx={{position: 'absolute', top: '52%', m:{xs:'0 35px', lg:'0 110px'}, borderColor:'transparent'}}>
                <AdsClickIcon/>
              </Button>
              <img src={Foto2} className='img'/>
            </div>
            <div>
              <Box sx={{color: 'third.main', position: 'absolute', top:'27%', fontSize: {xs:'2rem', lg:'3rem'}, textTransform: 'uppercase', fontFamily: 'Sorts Mill Goudy', m:{xs:'0 35px', lg:'0 110px'}, maxWidth: {xs:'350px', lg:'900px'}}}>{titulo3}</Box>
              <Box sx={{color: 'primary.main', position: 'absolute', top:{xs:'44%', lg:'40%'}, fontSize: {xs:'1rem'}, fontFamily: 'Montserrat', m:{xs:'0 40px', lg:'0 110px'}, maxWidth: {xs:'300px', lg:'500px'}}}>{p3}</Box>
              <Button variant="outlined" href="#outlined-buttons" sx={{position: 'absolute', top:{xs:'52%', lg:'45%'}, m:{xs:'0 40px', lg:'0 110px'}, borderColor:'transparent'}}>
                <AdsClickIcon/>
              </Button>
              <img src={Foto3} className='img'/>
            </div>
            </Slider>
      </div>
    )
  }