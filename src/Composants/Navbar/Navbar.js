import React from 'react'
import logo from '../../logo.png';
import './navbar.css';
import {Identification} from '../Identification/identification';

export default function Navbar() {
  return (
    <header>
        <div className='Navbar'>
        <a href='/'><img className='Logo' src={logo}  alt="Karmine Corp logo"/></a>
<ol>
    <li><a href="/News">News</a></li>
    <li><a href="">Nos teams </a></li>
    <li><a href="">Shop</a></li>
    <li><a href="">Nos sponsors</a></li>
    <li><a href=""> Notre shonen</a></li>
</ol>
        </div>
<>
<Identification />
</>
    </header>
    
  )
}
