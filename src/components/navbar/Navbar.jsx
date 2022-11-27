import React, { useState } from 'react'
import './navbar.css';


function Header() {
    
    const[Toggle,showMenu] = useState(false);
  return (
     <header className='header '>
          <nav className="nav container">
             <a href="index.html" className="nav__logo">Atlas</a>
          <div className={Toggle ? "nav__menu show-menu":"nav__menu"}>
            <ul className="nav__list grid">
                <li className="nav__item">
                    <a href="/home" className="nav__link  active-link">
                        <i className="uil uil-estate nav__icon"></i> Ana Sayfa
                    </a>
                </li>               
                <li className="nav__item">
                    <a href="/etkinlikler" className="nav__link">
                        <i className="uil uil-user nav__icon"></i> Etkinlikler
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/blog" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i>Blog
                        
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/hatlar" className="nav__link">
                        <i className="uil uil-bus nav__icon"></i>Hatlar
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/mekanlar" className="nav__link">
                        <i className="uil uil-building nav__icon"></i>Mekanlar
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/iletisim" className="nav__link">
                        <i className="uil uil-message nav__icon"></i>İletisim
                    </a>
                </li>
            
            </ul>
            <div className="nav__signBtn">
            <div className="nav__item nav__sign">
                    <a class="nav__btn" href="#btn" className="nav__link">
                        <i className="uil uil-user nav__icon nav__btnIcon"></i>Giris
                    </a>
            </div>
            </div>
         
            <i className="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>
          </div>
          <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
          </nav>
          
     </header>
  )
}

export default Header

