import React , { Component } from 'react';


class Header extends Component{
    render(){
        return(
            <div>
            <h1>nama saya :{this.props.nama}</h1>
            <h1>alamat :{this.props.alamat}</h1>
            <h1>eazyy</h1>
            </div>
        );
    }
}
export default Header