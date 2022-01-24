import { Search } from './Search';
import { LogoName } from './LogoName';
import IconCart from './IconCart';

export function Navbar() {
  return (
    <nav className='navbar'>
      <LogoName />   
      <Search />
      <IconCart />
    </nav>
  )
}