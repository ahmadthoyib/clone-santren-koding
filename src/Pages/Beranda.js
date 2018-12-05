import React, {Component} from 'react'
import NavBar from '../components/Navbar'
import JumboTron from '../components/Jumbroton'
import Cards from '../components/Card'

export default class Beranda extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <JumboTron/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        )
    }
}