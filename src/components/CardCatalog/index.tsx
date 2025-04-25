import carImg from '../../assets/car.png';
import ButtonBuy from '../ButtonBuy';
import './styles.css';

export default function CardCatalog() {
    return (
        <div className='dsc-card'>
                <img src={carImg} alt="Carro" />
                <h3>Audi Supra TT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                <ButtonBuy/>
        </div>
    );
}