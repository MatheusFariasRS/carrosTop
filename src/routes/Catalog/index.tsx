import CardCatalog from '../../components/CardCatalog';
import HeaderCatalog from '../../components/HeaderCatalog';
import SearchBar from '../../components/SearchBar';
import './styles.css'
export default function Catalog(){
    return (
        <>
        <HeaderCatalog/>
        <main className='dsc-catalog-main'>
            <section id="catalog-section" className="dsc-container">
                <div className='dsc-search-bar-container'>
                <SearchBar />
                </div>
                <div className='dsc-container dsc-card-catalog'>
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                </div>
            </section>
        </main>
        </>
    );
}