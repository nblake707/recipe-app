import React from "react";
import './Main.css';
import Menu from '../images/menu.svg';
import Close from '../images/close.svg';
import WelcomeSection from "./WelcomeSection";
import SearchSection from './SearchSection';

class Main extends React.Component {

    state = {
        showMenu : false
    }

    toggleTag = (e) => {
        // add the open class to the classList
        e.preventDefault();
        this.setState({
            showMenu: !this.state.showMenu
        })
        
    }

render (){
    const menuVis = this.state.showMenu ? 'open' : '';
    const imageSrc = this.state.showMenu ? Close : Menu;
    const menuText = this.state.showMenu ? 'Close' : 'Open';

    return (
        <main className={menuVis}>
          <a href="app" className="toggle-nav" onClick={this.toggleTag}>
    
            <img 
              src={imageSrc} 
              alt="menu icon" 
            />
            {menuText}
          </a>
          <WelcomeSection />
          <SearchSection />
        </main>
      );
}
};

export default Main;
