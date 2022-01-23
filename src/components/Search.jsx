export function Search () {
  return (
    <form className="search">
      <input
        type="text" 
        className = "inputSearch" 
        placeholder="search"/>
      <button type="submit" >
        <ion-icon name="search"></ion-icon>
      </button>
    </form>
  )
}