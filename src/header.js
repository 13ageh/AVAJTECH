import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <img src="/images/android-chrome-100x100.png" alt="Logo" />
        <h1>AVAJTECH</h1>
      </nav>
      <nav>
        <ul>
          <li><a href="inicio.js">Inicio</a></li>
          <li><a href="info.js">Acerca de nosotros</a></li>
          <li><a href="portafolio.js">Nuestros proyectos</a></li>
          <li><a href="contacto.js">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
