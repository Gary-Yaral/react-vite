import '../css/Payment.css'

function Payment({paymentState, hidePayment}){
  return (
    <section className= {
      paymentState === true ? "payment" : "payment payment-hidden"
    } >
      <form>
      <div className = "payment-close" onClick = {() => hidePayment()}>Close</div>
        <h2 className="payment-title">Information</h2>
        <label htmlFor="identifier">ID</label>
        <input type="text" id='identifier'/>
        <label htmlFor="full-name">Full name</label>
        <input type="text" id='full-name'/>
        <label htmlFor="cellphone">Cellphone</label>
        <input type="text" id='cellphone'/>
        <label htmlFor="address">Address</label>
        <input type="text" id='address'/>
        <input type="submit" value="Send" />
      </form>
    </section>
  )
}

export default Payment;