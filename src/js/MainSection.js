import React, { Component } from 'react'
import '../css/MainSection.css'
import Home from './Home'

class MainSection extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             menuOption : 'Home'
        }
    }
    

    changeState = () => {
        
    }
    render() {
        return (
            <>
                <div className='horizontalBar'>
                    <div style={{ overflow: 'auto' }}>
                        <div className='leftBar'>
                            <ul>
                                <li><button onClick={this.changeState}>Home</button></li>
                                <li><button>Register</button></li>
                                <li><button>Login</button></li>
                                <li><button>About</button></li>
                            </ul>
                        </div>
                    </div>                    
                </div>
                <div>
                    <Home></Home>
                </div>
            </>
        )
    }
}

export default MainSection
