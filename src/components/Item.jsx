export function Item(props) {
  
  const { item } = props;

  return (
    <div className = 'card'>
      <img src={ item.url } alt="image" />
      <div className="card-title">{ item.name }</div>
      <div className="card-price">
        <strong>Price: </strong>
        ${ item.price }
      </div>
      <button>Add to Cart</button>
    </div>
  )
}