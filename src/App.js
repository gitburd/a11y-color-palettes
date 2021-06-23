import React, { useState } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import ContrastChecker from './components/ContrastChecker'
import ContrastSuggestions from './components/ContrastSuggestions'
import ColorPickerDisplay from './components/ColorPickerDisplay'
import Palette from './components/Palette'
import SavedPalettes from './components/SavedPalettes'
import { ChromePicker } from 'react-color'
import Navbar from './components/Navbar'
import About from './components/About'
import { setPickerColor } from "./store/actions/toolsActions"
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import UserPalettes from './components/UserPalettes'
import Toast from './components/Toast';
import checkIcon from './assets/check.svg';

const App = ({ pickerColor, setPickerColor }) => {
  const showToast = (type, color) => {
    let toastProperties = {
      id: list.length + 2,
      title: 'Success',
      backgroundColor: '#000',
      icon: checkIcon
    }
    switch (type) {
      case 'copy-color':
        toastProperties.description = `${color} copied to clipboard.`
        break;
      case 'add-color':
        toastProperties.description = `${color} added to palette.`
        break;
      case 'save-palette':
        toastProperties.description = `Palette saved.`
        break;
      default:
        return
    }
    setList([...list, toastProperties]);
  }
  const [list, setList] = useState([]);

  return (
    <Router>
      <Navbar />
      <Toast
        toastList={list}
        position="bottom-right"
      />
      <Switch>
        <Route exact path='/' render={props =>
          <main className='app-grid' style={{ padding: '1rem' }}>
            <section style={{ border: '3px solid #181416' }}>
              <Palette showToast={showToast} />
              <ContrastSuggestions showToast={showToast} />
            </section>
            <section style={{ border: '3px solid #181416' }}>
              <ColorPickerDisplay
              // toggleShowColorPicker={this.toggleShowColorPicker}
              />
              <article style={{ backgroundColor: pickerColor.hex }}>
                <ChromePicker
                  color={pickerColor}
                  onChangeComplete={setPickerColor}
                />
              </article>
              <ContrastChecker
              />
            </section>
          </main>
        } />
        <Route path='/examples'>
          <SavedPalettes showToast={showToast} />
        </Route>
        <Route path='/palettes'>
          <UserPalettes showToast={showToast} />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/login'>
          <SignIn />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  )
}
// }

const mapStateToProps = (state) => ({
  backgroundColor: state.tools.backgroundColor,
  pickerColor: state.tools.pickerColor
})
const mapDispatchToProps = (dispatch) => {
  return {
    setPickerColor: (color) => dispatch(setPickerColor(color))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)


