import React from "react";
import './Main.css';
import Menu from '../images/menu.svg';
import Close from '../images/close.svg';

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

        console.log(this.state.showMenu);
        
    }

render (){
    const menuVis = this.state.showMenu ? 'open' : '';
    const imageSrc = this.state.mainClass == "open" ? Close : Menu;



    return (
        <main className={menuVis}>
          <a href="app" className="toggle-nav" onClick={this.toggleTag}>
    
            <img 
              src={imageSrc} 
              alt="menu icon" 
            />
            {/* {this.state.mainClass ==  "open" ? "Close" : "Menu"} */}
          </a>
        </main>
      );
}
};

export default Main;
