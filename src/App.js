import React, { Component } from 'react'
import './App.css';
import ContrastChecker from './components/ContrastChecker'
import ContrastSuggestions from './components/ContrastSuggestions'
import ColorPickerDisplay from './components/ColorPickerDisplay'
import Palette from './components/Palette'
import { SketchPicker, ChromePicker} from 'react-color'

class App extends Component {
  state = {
    backgroundColor: '#FFF',
    textColor: '#000',
    contrastColor:{
      hex:'#ffffff',
      rgb:{a:1,b:255,g:255,r:255},
      hsl: {a:1, h:0, l:1, s:0}
    },
    pickerColor:{hex:'#fff'},
    newColor: {
      hex:'#ffffff',
      rgb:{a:1,b:255,g:255,r:255},
      hsl: {a:1, h:0, l:1, s:0}
    },
    showColorPicker:true,
    palette:[
      {
        hex:'#ffffff',
        rgb:{a:1,b:255,g:255,r:255},
        hsl: {a:1, h:0, l:1, s:0}
      },
      {
        hex:'#000',
        rgb:{a:1,b:0,g:0,r:0},
        hsl: {a:1, h:0, l:0, s:0}
      }
    ]
  }

  componentDidMount(){
    let palette = JSON.parse(localStorage.getItem('palette')) ||  
    [
      {
        hex:'#ffffff',
        rgb:{a:1,b:255,g:255,r:255},
        hsl: {a:1, h:0, l:1, s:0}
      },
      {
        hex:'#000',
        rgb:{a:1,b:0,g:0,r:0},
        hsl: {a:1, h:0, l:0, s:0}
      }
    ]
    let pickerColor = JSON.parse(localStorage.getItem('pickerColor')) || {hex:'#fff'}
    let backgroundColor = JSON.parse(localStorage.getItem('backgroundColor')) || '#FFF'
    let textColor = JSON.parse(localStorage.getItem('textColor')) || '#000'

    this.setState({
      palette, 
      pickerColor, 
      backgroundColor, 
      textColor
    })
  }

  componentDidUpdate(){
    localStorage.setItem('palette', JSON.stringify(this.state.palette))
    localStorage.setItem('pickerColor', JSON.stringify(this.state.pickerColor))
    localStorage.setItem('backgroundColor', JSON.stringify(this.state.backgroundColor))
    localStorage.setItem('textColor', JSON.stringify(this.state.textColor))
  }

  setBackgroundColor = (backgroundColor) => {
    this.setState({backgroundColor})
  }

  setTextColor = (textColor) => {
    this.setState({textColor})
  }

  setContrastColor = (contrastColor) => {
    this.setState({contrastColor})
  }

  setPickerColor = (hex) => {
    this.setState({pickerColor:hex, showColorPicker:true},this.handleColorPickerChange(hex))
  }

  handleColorPickerChange = (color) => {
    this.setState({pickerColor:color.hex, newColor:color})
  }

  addToPalette = (color) => {
    let palette = [...this.state.palette,color]
    this.setState({palette})
  }
  removeFromPalette = (color) => {
    let palette = [...this.state.palette]
    palette = palette.filter(element => {return element.hex !== color} ) 
    this.setState({ palette })
  }


  render() {
    const {backgroundColor, textColor} = this.state
    return (
      <div style={{padding:'1rem'}}>
        <div className='app-grid'>
          <div style={{border:'3px solid'}}>
            <Palette 
              palette = {this.state.palette}
              setContrastColor = {this.setContrastColor}
              setPickerColor = {this.setPickerColor} 
              deleteColor = {this.removeFromPalette}
            />
            {/* <Color 
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
            /> */}

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
                  addToPalette={this.addToPalette}
                  newColor={this.state.newColor}
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


