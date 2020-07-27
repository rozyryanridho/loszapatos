const Step=()=>{
    return(
<div className="section">
  <div className="steps" id="stepsDemo">
    <div className="step-item is-active">
      <div className="step-marker">1</div>
      <div className="step-details">
        <p className="step-title">Delivery</p>
      </div>
    </div>
    <div className="step-item">
      <div className="step-marker">2</div>
      <div className="step-details">
        <p className="step-title">Pament</p>
      </div>
    </div>
    <div className="step-item">
      <div className="step-marker">3</div>
      <div className="step-details">
        <p className="step-title">Order Complete</p>
      </div>
    </div>
    <div className="steps-content padding">
      <div className="step-content">
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
              <p className="price">Get your order sent to your chosen address, or arrange collection at a collection point or adidas store</p><br/>
                <div className="columns">
                <div className="column">
                  <input className="step-input" name="firstname" id="firstname" type="text" placeholder="Firstname" autoFocus data-validate="require"/>
                </div>
                <div className="column">
                  <input className="step-input" name="firstname" id="firstname" type="text" placeholder="Lastname" autoFocus data-validate="require"/>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field asd">
              <div className="control has-icon has-icon-right">
                <input className="step-input" type="password" name="password" id="password" placeholder="Street Address, PO Box" data-validate="require"/>
                <p className="price">E.g. 3 Stripes Street</p>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control has-icon has-icon-right">
                <input className="step-input" type="password" name="password" id="password" placeholder="Apartment/Unit (Optional)" data-validate="require"/>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                
                <div className="columns">
                  <div className="column">
                    <input className="step-input" type="city" name="city" id="city" placeholder="City" data-validate="require"/>
                  </div>
                  <div className="column">
                    <input className="step-input" type="city" name="city" id="city" placeholder="Zip Code" data-validate="require"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="step-content">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Account Number</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input className="input" name="firstname" id="firstname" type="text" placeholder="Account Number" autoFocus data-validate="require"/>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Code</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control has-icon has-icon-right">
                <input className="input" type="text" name="lastname" id="lastname" placeholder="Code" data-validate="require"/>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Email</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control has-icon has-icon-right">
                <input className="input" type="email" name="email" id="email" placeholder="Email" data-validate="require"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="step-content">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label has-text-centered">Order Complete</label>
          </div>
        </div>

      </div>
    </div>
    <div className="steps-actions">
      <div className="steps-action">
        <a href="#" data-nav="previous" className="button is-light">Previous</a>
      </div>
      <div className="steps-action">
        <a href="#" data-nav="next" className="button is-light">Next</a>
      </div>
    </div>
  </div>
</div>


    )
}

export default Step;