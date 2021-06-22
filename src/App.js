import React, { Component } from 'react'
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
import { db } from './FirebaseDB'
// import { ToastContainer, toast } from 'react-toastify';
import { setPickerColor } from "./store/actions/toolsActions"
// import 'react-toastify/dist/ReactToastify.css';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import UserPalettes from './components/UserPalettes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showColorPicker: true,
    }
  }

  render() {

    return (
      <Router>
        <Navbar />
        {/* <ToastContainer
          autoClose={2000}
          position="top-center"
        /> */}
        <Switch>
          <Route exact path='/' render={props =>
            <main className='app-grid' style={{ padding: '1rem' }}>
              <section style={{ border: '3px solid #181416' }}>
                <Palette />
                <ContrastSuggestions />
              </section>
              <section style={{ border: '3px solid #181416' }}>
                <ColorPickerDisplay
                  toggleShowColorPicker={this.toggleShowColorPicker}
                />
                <article style={{ backgroundColor: this.props.pickerColor.hex }}>
                  <ChromePicker
                    color={this.props.pickerColor}
                    onChangeComplete={this.props.setPickerColor}
                  />
                </article>
                <ContrastChecker
                />
              </section>
            </main>
          } />
          <Route path='/examples'>
            <SavedPalettes />
          </Route>
          <Route path='/palettes'>
            <UserPalettes />
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
}

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


