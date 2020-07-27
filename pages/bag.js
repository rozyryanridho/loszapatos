import Card2 from '../components/card2.js'
import Layout2 from '../layouts/layout2.js'
import Link from 'next/link';

const Bag=()=>{
    return(
        <Layout2>
        <div className="container">
      <h1 className="title">kampret</h1>
      <p className="price2">Total:[2 items]$89.00</p>
      <div className="columns">
        <div className="column is-two-thirds">
            <Card2/>
        </div>
        <div className="column">
        <Link href='/checkout'><button type="button" className="btn btn-primary btn-lg btn-block btn-checkout">Checkout <i className="fas fa-arrow-right"></i></button></Link>
          
          <div className="container-summary">
            <h1 className="title">ORDER SUMMARY</h1>
            <div className="leve" >
              <div className="left">
                <p className="price mar">ORIGINAL PRICE</p>
                <p className="price mar">SALE</p>
                <p className="price mar">DELIVERY</p>
              </div>
              <div className="right">
                <p className="price mar">$19.00</p>
                <p className="price mar">-$4.00</p>
                <p className="price mar">FREE</p>
              </div>
            </div>
          </div>
          <div className="ipaymen pay">
            <h6>ACCEPTED PAYMENT METHODS</h6>
            <figure>
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/visa-master-amex-disc-pp-apple-affirm-klarna_tcm221-520677.png" alt=""/>
            </figure>
          </div>
        </div>
        </div>
        </div>
        </Layout2>
    )
}

export default Bag;