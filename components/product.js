import data from '../dataset/data.json'
const Product=()=>{

    const listItems = data.map((data) =>
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
            <div className="container container-product-grid">
             {listItems}
             </div>
        )
    }
    
    export default Product;