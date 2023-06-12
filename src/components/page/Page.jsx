import { NavBar } from '../navBar/NavBar';
import { SliderComponent } from '../slider/SliderComponent';
import { QuienesSomos } from '../body/quienesSomos/QuienesSomos';
import { ComoTrabajamos } from '../body/comoTrabajamos/ComoTrabajamos';
import { Servivios } from '../body/servicios/Servivios';
import { Herramientas } from '../body/herramientas/Herramientas';
import { Contratacion } from '../body/contratacion/Contratacion';
import { Contacto } from '../body/contacto/Contacto';
import { Footer} from '../footer/Footer'

const styles = {
    fondoStyle: {
    backgroundColor: '#EFE7DD',
    width: '100%',
    height:'100%',
    },
    bgStyle: {
      backgroundColor: '#9B4922',
      width: '100%',
      height:'100%',
    },
    bgBlackStyle:{
      backgroundColor: '#000',
      width: '100%',
      height:'100%'
    }
};

export const Page = () => {
  return (
    <div style={styles.bgBlackStyle}>
        <NavBar/>

        <SliderComponent/>
        <div style={styles.bgStyle}>
          <QuienesSomos/>

          <ComoTrabajamos/>
        </div>
        <div style={styles.fondoStyle}>
          <Servivios/>

          <Herramientas/>
        </div>

        <div style={styles.bgStyle}>
          <Contratacion/>

          <Contacto/>
        </div>  

        <div style={styles.fondoStyle}>

          <Footer/>
        </div>
    </div>
  )
}
