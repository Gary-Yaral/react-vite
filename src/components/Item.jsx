import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';

function Item({ item, addToCart }) {

  return (
    <div className = 'card'>
      <img src={ item.url } alt="image" />
      <div className="card-title">{ item.name }</div>
      <div className="card-price">
        <strong>Price: </strong>
        ${ item.price }
      </div>
      <button onClick={() => addToCart(item.id)}>Add to Cart</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default connect(null, mapDispatchToProps)(Item)