import { Item } from './Item';

export function Block(props) {
 
  const { section } = props;
  const { id, name, items } = section;

  return (
    <section className="section">
      <h3>{ name }</h3>
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