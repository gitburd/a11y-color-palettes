import React, { Component } from 'react'
import './App.css';
import ContrastChecker from './comppnents/ContrastChecker'
import Color from './comppnents/Color'
import ContrastSuggestions from './comppnents/ContrastSuggestions'

class App extends Component {
  state={
    backgroundColor: '#FFF',
    textColor: '#000',
    contrastColor:'#FFF'
  }

  setBackgroundColor = (backgroundColor) => {
    console.log('set bgc')
    this.setState({backgroundColor})
  }

  setTextColor = (textColor) => {
    this.setState({textColor})
  }

  setContrastColor = (contrastColor) => {
    this.setState({contrastColor})
  }

  render() {
    const {backgroundColor, textColor} = this.state
    return (
      <div style={{padding:'1rem'}}>
        <div className='app-grid'>
          <div >
          <Color 
            color={'#A5AF76'} 
            setBackgroundColor={this.setBackgroundColor} 
            setTextColor={this.setTextColor}
            setContrastColor={this.setContrastColor}
          />
          <Color 
            color={'#5A5089'} 
            setBackgroundColor={this.setBackgroundColor} 
            setTextColor={this.setTextColor}
            setContrastColor={this.setContrastColor}
          />
          <Color 
            color={'#FFF'} 
            setBackgroundColor={this.setBackgroundColor} 
            setTextColor={this.setTextColor}
            setContrastColor={this.setContrastColor}
          />
          <Color 
            color={'#000'} 
            setBackgroundColor={this.setBackgroundColor} 
            setTextColor={this.setTextColor}
            setContrastColor={this.setContrastColor}
          />
          <Color 
            color={'#741B47'} 
            setBackgroundColor={this.setBackgroundColor} 
            setTextColor={this.setTextColor}
            setContrastColor={this.setContrastColor}
          />
          <Color 
            color={'#8BE4B8'} 
            setBackgroundColor={this.setBackgroundColor} 
            setTextColor={this.setTextColor}
            setContrastColor={this.setContrastColor}
          />
          <Color 
            color={'#eed9b5'} 
            setBackgroundColor={this.setBackgroundColor} 
            setTextColor={this.setTextColor}
            setContrastColor={this.setContrastColor}
          />
        
          <Color 
            color={'#3a2a0d'} 
            setBackgroundColor={this.setBackgroundColor} 
            setTextColor={this.setTextColor}
            setContrastColor={this.setContrastColor}
          /> 
          <Color 
            color={'#86239a'} 
            setBackgroundColor={this.setBackgroundColor} 
            setTextColor={this.setTextColor}
            setContrastColor={this.setContrastColor}
          />
          <Color 
            color={'#155b56'} 
            setBackgroundColor={this.setBackgroundColor} 
            setTextColor={this.setTextColor}
            setContrastColor={this.setContrastColor}
          />
          </div>
          <div>
            <ContrastSuggestions contrastColor={this.state.contrastColor}/>
          </div>
        </div>
      
        <ContrastChecker 
          backgroundColor={backgroundColor} 
          textColor={textColor}
        />
    
      </div>
      
    )
  }
}

export default App


