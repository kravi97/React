import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar({ title = 'Set title here', aboutText = 'About Text here', mode, toggleMode }) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-Link active me-3 text-decoration-none text-${mode === 'dark' ? 'light' : 'dark'}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-Link active text-decoration-none text-${mode === 'dark' ? 'light' : 'dark'}`} to="/about">{aboutText}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-Link ms-3 active text-decoration-none text-${mode === 'dark' ? 'light' : 'dark'}`} to="/registration">Registration</Link>
                        </li>
                    </ul>

                    <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={() => toggleMode('primary')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-danger rounded mx-2" onClick={() => toggleMode('danger')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-success rounded mx-2" onClick={() => toggleMode('success')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-warning rounded mx-2" onClick={() => toggleMode('warning')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-dark rounded mx-2" onClick={() => toggleMode('dark')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-light rounded mx-2" onClick={() => toggleMode('light')} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                    </div>

                    <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : (mode === 'dark' ? 'light' : 'success')}`}>
                        <input className="form-check-input" type="checkbox" onClick={() => toggleMode(null)} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
}
