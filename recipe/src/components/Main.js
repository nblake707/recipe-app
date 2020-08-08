import React from "react";
import Menu from '../images/menu.svg';

const Main = () => {
  return (
    <main>
      <a href="app" class="toggle-nav">
        <img 
          src={Menu} 
          alt="menu icon" 
        />
        Menu
      </a>
    </main>
  );
};

export default Main;
