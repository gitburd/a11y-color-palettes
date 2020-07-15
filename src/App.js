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
        <div style={{width:'50%'}}>
        <Color 
          color={'#A5AF76'} 
          setBackgroundColor={this.setBackgroundColor} 
          setTextColor={this.setTextColor}
        />
       <Color 
          color={'#5A5089'} 
          setBackgroundColor={this.setBackgroundColor} 
          setTextColor={this.setTextColor}
        />
        <Color 
          color={'#FFF'} 
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
         <Color 
          color={'#8BE4B8'} 
          setBackgroundColor={this.setBackgroundColor} 
          setTextColor={this.setTextColor}
        />
        <Color 
          color={'#eed9b5'} 
          setBackgroundColor={this.setBackgroundColor} 
          setTextColor={this.setTextColor}
        />
       
        <Color 
          color={'#3a2a0d'} 
          setBackgroundColor={this.setBackgroundColor} 
          setTextColor={this.setTextColor}
        /> 

        </div>
       

        <Color 
          color={'#86239a'} 
          setBackgroundColor={this.setBackgroundColor} 
          setTextColor={this.setTextColor}
        />
        <Color 
          color={'#155b56'} 
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


