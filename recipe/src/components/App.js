import React from "react";
import SideBar from './SideBar';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <div>
        <SideBar />
        <Main />
      </div>
    );
  }
}

export default App;
