const Loginside=()=>{
    return (
        <div className="section padding">
    <h1 className="title">
    LOG IN
  </h1>
  <div className="field is-horizontal">
          <div className="field-body">
            <div className="field asd">
              <div className="control has-icon has-icon-right">
                <input className="step-input" type="password" name="password" id="password" placeholder="Email" data-validate="require"/>
              </div>
            </div>
          </div>
        </div>
    <div className="field is-horizontal">
          <div className="field-body">
            <div className="field asd">
              <div className="control">
                <input className="step-input" type="password" name="password" id="password" placeholder="Password" data-validate="require"/>
                <a href="#"><p className="price">Forgot Password ?</p></a>
              </div>
            </div>
          </div>
        </div>
   <div className="field is-horizontal">
          <div className="field-body">
            <div className="field asd">
              <div className="control">
                <button type="button" className="btn btn-primary btn-lg btn-block">Log In</button>
                <br/>
                <p className="price">
                  By clicking 'Log In' you agree to our website Creators Club Terms & Conditions, adidas Privacy Notice and Terms & Conditions.
                </p>
                <br/>
              </div>
            </div>
          </div>
        </div>

</div>
    )
}

export default Loginside;