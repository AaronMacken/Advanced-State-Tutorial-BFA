import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <ul className="footer">
              <li>If state is used in multiple places, it should have ONE place where it lives</li>
              <li>State can then be passed to child components as props</li>  
              <li>Functions to modify the state in the parent class can also be passed as props, and used by the children</li>
            </ul>
        )
    }
}
