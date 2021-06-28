import React, { Component } from 'react'
import '../css/MainSection.css'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import About from './About'

class MainSection extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menuOption: 'Home'
        }

        this.listRef = React.createRef()
    }

    changeMenuOption = (event) => {
        this.setState({
            menuOption: event.target.textContent
        })
    }

    displayMenuContent = () => {
        if (this.state.menuOption === 'Home')
            return <Home />
        else if (this.state.menuOption === 'Register')
            return <Register />
        else if (this.state.menuOption === 'Login')
            return <Login />
        else if (this.state.menuOption === 'About')
            return <About />
    }

    render() {
        let menuContent = this.displayMenuContent()

        return (
            <>
                <div className='horizontalBar'>
                    <ul>
                        <li><button onClick={this.changeMenuOption}>Home</button></li>
                        <li><button onClick={this.changeMenuOption}>Register</button></li>
                        <li><button onClick={this.changeMenuOption}>Login</button></li>
                        <li><button onClick={this.changeMenuOption}>About</button></li>
                    </ul>
                </div>
                <div>{menuContent}</div>
            </>
        )
    }
}

export default MainSection
