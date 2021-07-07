import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton]= useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton =() => {
        if(window.innerWidth <= 960)
        {
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    useEffect(() => {
        showButton() ;
    },[]);

    window.addEventListener('resize', showButton);

    return (
       <>
       <nav className='navbar'>
           <div className='navbar-container'>
               <Link to='/' className='navbar-logo'>Cheers Bhaisahab    <i className='fas fa-glass-cheers'/>
               </Link>
               <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-wine-bottle' : 'fas fa-glass-whiskey'} />
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                       <Link to='/Beer' className='nav-links' onClick={closeMobileMenu}>Beer 
                         <i class="fas fa-beer"></i>
                           
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/Whiskey' className='nav-links' onClick={closeMobileMenu}>
                           Whisky<i class="fas fa-glass-whiskey"></i>
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/CockTails' className='nav-links' onClick={closeMobileMenu}>CockTails
                       <i class="fas fa-glass-martini-alt"></i>
                           
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/Sutta' className='nav-links' onClick={closeMobileMenu}>Smoke Eh?
                       <i class="fas fa-smoking"></i>
                           
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Bottoms Up
                     </Link>
                   </li>
               </ul>
               {button && <Button buttonStyle='btn--outline'>Bottoms Up</Button>}

           </div>
       </nav>
       </>
    )
}

export default Navbar
