import './styles.css'

export default function SearchBar(){
    return(
        <form className='dsc-search-bar'>
            <input className='dsc-form-control' type="text" placeholder='Digite sua busca' />
            <button className='dsc-search-bar-submit' type='submit'>Buscar</button>
        </form>
    );
}