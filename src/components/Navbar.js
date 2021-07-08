import React from 'react'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Advanced State
                </a>

                <div className="nav-item me-5">
                    number of posts: {props.numberOfPosts}
                </div>
            </div>
        </nav>
    )
}
