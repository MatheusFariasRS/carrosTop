import CardCatalog from '../../components/CardCatalog';
import HeaderCatalog from '../../components/HeaderCatalog';
import SearchBar from '../../components/SearchBar';
import './styles.css'
export default function Catalog(){
    return (
        <>
        <HeaderCatalog/>
        <main>
            <section id="catalog-section" className="dsc-container">
            <SearchBar />
                <div className='dsc-container dsc-card-catalog dsc-mt40'>
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