import Item from './Item';
export function SearchResult({ items }) {

  return (
    <section className="section">
      <h3>Results: </h3>
      <div className='items-container'>
        {
          items.map(item => {
            return (
              <Item item = { item } key = { item.id }/>
            )
          })
        }
      </div>
    </section>
  )
}