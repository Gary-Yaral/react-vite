import { connect } from 'react-redux';
import { searchItem } from '../redux/actions';

function Search ({searchItem, dataList}) {
  function searchProduct(value) {
    let itemName = value;
    const itemResult = [];

    if (itemName === "" ) {
      return searchItem([false])
    }

    dataList.forEach(section => {
      const result = section.items.filter(item => {
        let str = new RegExp('^'+itemName, 'i');
        return str.test(item.name)
      })

      itemResult.push(result)
    })

    if (itemResult[0].length === 0 )  return searchItem(['Not results'])
    
    return searchItem(...itemResult);
  }

  function activateSearch(e) {
    e.preventDefault();
    let value;
    if(e.currentTarget.className === "search"){
      value = e.currentTarget.search.value
      return searchProduct(value);
    }

    value = e.target.value;
    return searchProduct(value);
  }

  
  return (
    <form className="search" 
      onSubmit={(e) => activateSearch(e)}>
      <input
        name="search"
        type="text" 
        className = "inputSearch" 
        placeholder="search"
        onChange={(e) => activateSearch(e)}/>
      <button type="submit">
        <ion-icon name="search"></ion-icon>
      </button>
    </form>
  )
}

const searchNow = dispatch => {
  return {
    searchItem: (item) => dispatch(searchItem(item))
  }
}

const allData = state => {
  return {
    dataList: state.load
  }
}

export default connect(allData,searchNow)(Search)