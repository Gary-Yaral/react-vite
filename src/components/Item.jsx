import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';

function Item({ item, addToCart }) {
  const {name, price, url } = item;
  return (
    <div className = 'card'>
      <img src={ url } alt="image" />
      <div className="card-title">{ name }</div>
      <div className="card-price">
        <strong>Price: </strong>
        ${ price }
      </div>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item))
  }
}

export default connect(null, mapDispatchToProps)(Item)