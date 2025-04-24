import carImg from '../../assets/car.png';
import ButtonBuy from '../ButtonBuy';
import './styles.css';

export default function CardCatalog() {
    return (
        <div className='dsc-card'>
            <div className='dsc-catalog-card-top'>
                <img src={carImg} alt="Carro" />
            </div>
            <div className='dsc-catalog-card-bottom'>
                <h2>Audi Supra TT</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
            <div className="dsc-catalog-card-btn">
                <ButtonBuy/>
            </div>
        </div>
    );
}