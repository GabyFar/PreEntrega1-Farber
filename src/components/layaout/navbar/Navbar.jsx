<link rel="stylesheet" href="./Navbar.css"></link>
import {RiShoppingCart2Line} from "react-icons/ri"
import React from 'react'


const Navbar = () => {
  return (
    <div>
        <h4>Imagen</h4>
        <ul>
            <li><button>Inicio</button></li>
            <li><button>Catalogo de productos</button></li>
            <li><button>Nosotros</button></li>
            <li><button>Contacto</button></li>
        </ul>
        <div>
        <RiShoppingCart2Line color="green" size="20px"/>
        <span>3</span>
        </div>
    </div>
  );
}

export default Navbar

