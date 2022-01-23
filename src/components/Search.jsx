export function Search () {
  return (
    <form>
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