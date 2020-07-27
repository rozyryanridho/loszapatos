import Layout from '../../layouts/layout.js'
import Dropdown from '../../components/dropdown.js'
import Pagination from '../../components/pagination.js'
import HeroSignIn from '../../components/hero-signin.js'
import Level from '../../components/level.js'
import Product from '../../components/product.js'
import dummyData from '../../dataset/data.json';

const Main=(props)=>{
    const listItems = dummyData.map((data) =>
    <div className="card" key={data.id.toString()}>
            <img className="img-card" src={data.gambar} alt="Denim Jeans"/>
            <div className="content">
            <p className="title2">{data.nama}</p>
            <p className="price">{data.harga}</p>
            <p>{data.kategori}</p>
            </div>
           </div>
  );
    return(
<Layout>
<section className="container">
<br/>
<br/>
    <h1 className="title">ALL PRODUCT</h1>
    <Dropdown/>
    <div className="container container-product-grid">
             {listItems}
    </div>
    <Pagination/>
</section>
    <HeroSignIn/>
    <Level/>
</Layout>
    )
}

export default Main;