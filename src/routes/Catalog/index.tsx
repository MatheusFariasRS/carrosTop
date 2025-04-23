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
                
            </section>
        </main>
        </>
    );
}