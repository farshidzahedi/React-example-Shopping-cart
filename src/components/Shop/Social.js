import React, { Component } from 'react'

export default class Social extends Component {
    render() {
        // console.log(this.props, 'props');
        let {href , img}=this.props
        return (
            <li>
                <a href={href} target="_blank">
                    <img src={img}/>
                </a>
            </li>
        )
    }
}
