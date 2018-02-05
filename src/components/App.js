import React, {Component} from 'react'
import Header from './Header'
import CheckIn from './CheckIn'
import WorkSpace from './WorkSpace'
import './css/App.css'

class App extends Component {
  work = true;

  state = {
    isOpen: this.work
  };

  render () {
    const workSpace = this.state.isOpen && <WorkSpace />;
    console.log(this.state.isOpen);
    return (
      <div className="app">
        <Header context={this} />
        <CheckIn />
        {workSpace}
      </div>
    );
  }
}

export default App
