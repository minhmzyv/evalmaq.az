import React from 'react'
import evalmaqLogo from '../assets/img/logo.png'
const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav className="navbar navbar-expand-sm navbar-dark">
                <div className="container">
                    <div className='navLogo d-flex justify-content-center align-items-center'>
                        <img src={evalmaqLogo} alt='evalmaqlogo' className='logo' />
                        <a className="navbar-brand fw-bold text-black evalmaqText" href="">EvAlmaq.
                            <span className='colorGold'>az</span></a>
                    </div>

                    <button className="navbar-toggler colorGold" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto d-flex justify-content-center w-100">
                            <li className="nav-item mx-3">
                                <a className="nav-link active fw-bold fs-5" href="">Ana Səhifə</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link fw-bold fs-5" href="">Əmlaklar</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link fw-bold fs-5" href="">Əlaqə</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link fw-bold fs-5" href="">Haqqımızda</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar