

const Trending=()=>{
const numbers = [1, 2, 3, 4];
const listItems = numbers.map((number) =>
  <div className="card" key={number.toString()}>
          <img className="img-card" src="https://picsum.photos/500/500" alt="Denim Jeans"/>
          <div className="content">
          <p className="title2">Tailored Jeans</p>
          <p className="price">$19.99</p>
          <p>Some text about the jeans..</p>
          </div>
         </div>
);
    return(
        <div>
        <h1 className="title has-text-centered">WHAT'S TRENDING</h1>
        <div className="container container-product-grid">
         {listItems}
         </div>
      </div>
    )
}

export default Trending;