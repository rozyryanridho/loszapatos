const Card2=()=>{
    return(
        <div className="hero card2-hero" >
            <div className="hero-body card2-hero-body">
              <img className="image" src="https://picsum.photos/id/14/400/300" alt=""/>
              <div className="container">
                <div className="row">
                <div className="col-9"><p className="header-card">ADIDAS FLOW</p></div>
                <div className="col col-trash"><i className="fas fa-trash-alt"></i></div>
                <div className="w-100"></div>
                <div className="col-9 col-heart"><p className="header-card">CLOUD WHITE</p></div>
                <div className="col col-heart col-trash" ><i className="fas fa-heart"></i></div>
                <div className="w-100"></div>
                <div className="col col-heart" ><p className="price">Size: 13(Woman)</p></div>
                <div className="w-100"></div>
                <div className="col">
                  <div className="input-group mb-3">
                    <select className="custom-select" id="inputGroupSelect01">
                      <option defaultValue="1" selected>One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Card2;