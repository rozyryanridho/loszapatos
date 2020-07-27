import Steps from '../components/steps.js'
import Step from '../components/steps.js'
import Layout3 from '../layouts/layout3.js';
import Loginside from '../components/loginside.js';
const Checkout=()=> {
    return (
<Layout3>
<div className="container">
    <div className="columns">
        <div className="column is-three-fifths">
            <Step/>
        </div>
        <div className="column">
        <Loginside/>
        </div>
    </div>
</div></Layout3>

    )
}

export default Checkout;