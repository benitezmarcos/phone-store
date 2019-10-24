import React, { Component } from 'react'
import banner from '../img/banner6.jpg'


export default class Banner extends Component {
    render() {
        return (
            <div className="container-fluid px-0">
                <img id="banner" className="fw-100 mh-75 img-fluid" src={banner}></img>
            </div>
        )
    }
}
