import React, { Component } from 'react'
import './App.css';
import ContrastChecker from './comppnents/ContrastChecker'
import Color from './comppnents/Color'
import ContrastSuggestions from './comppnents/ContrastSuggestions'
import ColorPickerDisplay from './comppnents/ColorPickerDisplay'
import { SketchPicker, ChromePicker} from 'react-color'

class App extends Component {
  state={
    backgroundColor: '#FFF',
    textColor: '#000',
    contrastColor:{
      hex:'#ffffff',
      rgb:{a:1,b:255,g:255,r:255},
      hsl: {a:1, h:0, l:1, s:0}
    },
    pickerColor:'#fff',
    newColor:{},
    showColorPicker:true
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

  setPickerColor = (hex) => {
    console.log('set picker color', hex)
    this.setState({pickerColor:hex, showColorPicker:true},this.handleColorPickerChange(hex))
  }

  getColorFromPicker = (color) => {
    console.log(color)
  }

  toggleShowColorPicker = () => {
    let showColorPicker = !this.state.showColorPicker
    this.setState({showColorPicker})
  }

  handleColorPickerChange = (color) => {
    this.setState({pickerColor:color.hex, newColor:color})
  }

  render() {
    const {backgroundColor, textColor} = this.state
    return (
      <div style={{padding:'1rem'}}>
        <div className='app-grid'>
          <div style={{border:'3px solid'}}>
            <Color 
              color={{
                hex:'#eed9b5',
                rgb:{a:1,b:181,g:217,r:238},
                hsl: {a:1, h:38, l:82, s:63}
              }} 
              setBackgroundColor={this.setBackgroundColor} 
              setTextColor={this.setTextColor}
              setContrastColor={this.setContrastColor}
              setPickerColor={this.setPickerColor} 
            />
            <Color 
              color={{
                hex:'#8BE4B8',
                rgb:{a:1,b:228,g:184,r:139},
                hsl: {a:1, h:150, l:72, s:62}
              }} 
              setBackgroundColor={this.setBackgroundColor} 
              setTextColor={this.setTextColor}
              setContrastColor={this.setContrastColor}
              setPickerColor={this.setPickerColor} 
            />
            <Color 
              color={{
                hex:'#5A5089',
                rgb:{a:1,b:137,g:80,r:90},
                hsl: {a:1, h:251, l:43, s:26}
              }} 
              setBackgroundColor={this.setBackgroundColor} 
              setTextColor={this.setTextColor}
              setContrastColor={this.setContrastColor}
              setPickerColor={this.setPickerColor} 
            />
            <Color 
              color={{
                hex:'#3a2a0d',
              rgb:{a:1,b:13,g:42,r:58},
              hsl: {a:1, h:39, l:14, s:63}
              }} 
              setBackgroundColor={this.setBackgroundColor} 
              setTextColor={this.setTextColor}
              setContrastColor={this.setContrastColor}
              setPickerColor={this.setPickerColor} 
            />
            <Color 
              color={{
                hex:'#000',
              rgb:{a:1,b:0,g:0,r:0},
              hsl: {a:1, h:0, l:0, s:0}
              }} 
              setBackgroundColor={this.setBackgroundColor} 
              setTextColor={this.setTextColor}
              setContrastColor={this.setContrastColor}
              setPickerColor={this.setPickerColor} 
            />
            <Color 
              color={{
                hex:'#fff',
              rgb:{a:1,b:255,g:255,r:255},
              hsl: {a:1, h:0, l:100, s:100}
              }} 
              setBackgroundColor={this.setBackgroundColor} 
              setTextColor={this.setTextColor}
              setContrastColor={this.setContrastColor}
              setPickerColor={this.setPickerColor} 
            />

            <ContrastSuggestions  
              contrastColor={this.state.contrastColor} 
              setPickerColor={this.setPickerColor} 
              toggleShowColorPicker={this.toggleShowColorPicker}
            />
          </div>
          <div>
            {/* {this.state.showColorPicker &&  */}
                <ColorPickerDisplay 
                  color={this.state.pickerColor}
                  setBackgroundColor={this.setBackgroundColor} 
                  setTextColor={this.setTextColor}
                  toggleShowColorPicker={this.toggleShowColorPicker}
                />
              <div style={{backgroundColor:this.state.pickerColor}}>
                <ChromePicker
                  color={ this.state.pickerColor}
                  onChangeComplete={ this.handleColorPickerChange }
                />
 
              </div>
            {/* } */}
            <ContrastChecker 
              backgroundColor={backgroundColor} 
              textColor={textColor}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App


