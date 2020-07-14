import React, { Component } from 'react'
import './App.css';
import ContrastChecker from './comppnents/ContrastChecker'
import Color from './comppnents/Color'

class App extends Component {
  state={
    backgroundColor: '#fff',
    textColor: '#000'
  }

  setBackgroundColor = (backgroundColor) => {
    console.log('set bgc')
    this.setState({backgroundColor})
  }

  setTextColor = (textColor) => {
    this.setState({textColor})
  }

  render() {
    const {backgroundColor, textColor} = this.state
    return (
      <div>
        <Color 
          color={'#A5AF76'} 
          setBackgroundColor={this.setBackgroundColor} 
          setTextColor={this.setTextColor}
        />
        <Color 
          color={'#fff'} 
          setBackgroundColor={this.setBackgroundColor} 
          setTextColor={this.setTextColor}
        />
        <Color 
          color={'#000'} 
          setBackgroundColor={this.setBackgroundColor} 
          setTextColor={this.setTextColor}
        />
        <Color 
          color={'#741B47'} 
          setBackgroundColor={this.setBackgroundColor} 
          setTextColor={this.setTextColor}
        />
        <ContrastChecker 
          backgroundColor={backgroundColor} 
          textColor={textColor}
        />
      </div>
    )
  }
}

export default App


