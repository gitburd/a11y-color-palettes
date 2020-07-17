import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import ContrastChecker from './components/ContrastChecker'
import ContrastSuggestions from './components/ContrastSuggestions'
import ColorPickerDisplay from './components/ColorPickerDisplay'
import Palette from './components/Palette'
import StoredPalettes from './helpers/StoredPalettes'
import SavedPalettes from './components/SavedPalettes'
import { SketchPicker, ChromePicker} from 'react-color'
import Navbar from './components/Navbar'

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
    ],
    palettes:StoredPalettes
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
    let palettes = JSON.parse(localStorage.getItem('palettes')) || StoredPalettes

    this.setState({
      palette, 
      pickerColor, 
      backgroundColor, 
      textColor,
      palettes
    })
  }

  componentDidUpdate(){
    localStorage.setItem('palette', JSON.stringify(this.state.palette))
    localStorage.setItem('pickerColor', JSON.stringify(this.state.pickerColor))
    localStorage.setItem('backgroundColor', JSON.stringify(this.state.backgroundColor))
    localStorage.setItem('textColor', JSON.stringify(this.state.textColor))
    localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
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
    let newColor = {hex:hex}
    console.log('new color', newColor)
    this.setState({pickerColor:hex, newColor})
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

  savePalette = (palette) => {
    console.log(palette)
    const newPalettes = [palette, ...this.state.palettes]
    this.setState({palettes:newPalettes})
  }


  render() {
    const {backgroundColor, textColor} = this.state
    return (
      <div >
        <Navbar/>
        <Router>
          <Switch>
            <Route exact path='/' render={props =>
              <div>
                <div className='app-grid' style={{padding:'1rem'}}>
                  <div style={{border:'3px solid #181416'}}>
                    <Palette 
                      savePalette = {this.savePalette}
                      palette = {this.state.palette}
                      setContrastColor = {this.setContrastColor}
                      setPickerColor = {this.setPickerColor} 
                      deleteColor = {this.removeFromPalette}
                    />
                  
                    <ContrastSuggestions  
                      contrastColor={this.state.contrastColor} 
                      setPickerColor={this.setPickerColor} 
                      toggleShowColorPicker={this.toggleShowColorPicker}
                      palette={this.state.palette}
                    />
                  </div>
                  <div style={{border:'3px solid #181416'}}>
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
                    <ContrastChecker 
                      backgroundColor={backgroundColor} 
                      textColor={textColor}
                    />
                  </div>
                </div>
              </div>
            } />
            <Route path='/examples'>
              <SavedPalettes palettes={this.state.palettes}/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App


