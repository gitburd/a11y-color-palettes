import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import ContrastChecker from './components/ContrastChecker'
import ContrastSuggestions from './components/ContrastSuggestions'
import ColorPickerDisplay from './components/ColorPickerDisplay'
import Palette from './components/Palette'
// import StoredPalettes from './helpers/StoredPalettes'
import SavedPalettes from './components/SavedPalettes'
import { ChromePicker} from 'react-color'
import Navbar from './components/Navbar'
import About from './components/About'
import {db} from './FirebaseDB'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor(props) {
    super(props);   
    this.state = {   
      backgroundColor: '#FFF',
      textColor: '#000',
      contrastColor: {
        hex: '#ffffff',
        rgb:{a:1,b:255,g:255,r:255},
        hsl: {a:1, h:0, l:1, s:0}
      },
      pickerColor: {hex: '#fff'},
      newColor: {
        hex: '#ffffff',
      },
      showColorPicker: true,
      palette: [],
      palettes:[]
    }
  }

  componentDidMount(){
    let palette = JSON.parse(localStorage.getItem('palette')) || []
    let pickerColor = JSON.parse(localStorage.getItem('pickerColor')) || {hex: '#fff'}
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
    localStorage.setItem('backgroundColor', 
      JSON.stringify(this.state.backgroundColor)
    )
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
    this.setState({pickerColor:hex, newColor})
  }

  handleColorPickerChange = (color) => {
    this.setState({
      pickerColor:color.hex, 
      newColor:color
    })
  }

  addToPalette = (color, alert) => {
    let palette = [...this.state.palette,color]
    let hex = color.hex
    this.setState({palette})
    if(alert){toast.dark(` ${hex} added to palette!`)};
  }

  removeFromPalette = (index) => {
    let palette = [...this.state.palette]
    console.log('?',index)
    if (palette.length > 0 ){
      palette = palette.filter((element, idx) => {return idx !== index} ) 
      this.setState({ palette })
    }
  }

  savePalette = (palette) => {
    db.collection("palettes").add({
      colors: palette
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }


  render() {
    const {backgroundColor, textColor} = this.state
    return (
      <div >
        <Router>
          <Navbar/>
          <ToastContainer
            autoClose={2000} 
            position="top-center"
          />
          <Switch>
            <Route exact path='/' render={props =>
              <div>
                <div className='app-grid' style={{padding: '1rem'}}>
                  <div style={{border: '3px solid #181416'}}>
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
                      palette={this.state.palette}
                    />
                  </div>
                  <div style={{border: '3px solid #181416'}}>
                    <ColorPickerDisplay 
                      color={this.state.pickerColor}
                      setBackgroundColor={this.setBackgroundColor} 
                      setTextColor={this.setTextColor}
                      toggleShowColorPicker={this.toggleShowColorPicker}
                      addToPalette={this.addToPalette}
                      newColor={this.state.newColor}
                      palette={this.state.palette}
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
              <SavedPalettes  addToPalette={this.addToPalette} />
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App


