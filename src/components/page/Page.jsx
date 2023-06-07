import Fondo from '../../assets/fondoBlackboard.jpg';
import { CT } from '../body/comoTrabajamos/CT';
import { QS } from '../body/quienesSomos/QS';
import { NavBar } from '../navBar/NavBar';
import { SliderComponent } from '../slider/SliderComponent';

const styles = {
    fondoStyle: {
        backgroundImage: `url(${Fondo})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
    }
};

export const Page = () => {
  return (
    <div style={styles.fondoStyle}>
        <NavBar/>

        <SliderComponent/>

        <QS/>

        <CT/>

    </div>
  )
}
