import React from 'react'
import evalmaqLogo from '../assets/img/logo.png'
const Footer = () => {
    return (
        <div className='Footer pt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='navLogo footer-logo d-flex  align-items-center'>
                            <img rel="preload" src={evalmaqLogo} alt='evalmaqlogo' className='logo' />
                            <a className="navbar-brand fw-bold text-black evalmaqText" href="">EvAlmaq.
                                <span className='colorGold'>az</span></a>
                        </div>
                        <div className='footer-logo-text'>
                            <p className='text-light fw-bold mx-4'>Ev tapmaq istəyirsiniz? Yeni başlanğıclar üçün ideal məkanlar! Ən yaxşı seçimləri sizin üçün tapırıq.</p>
                        </div>
                        <div className='footer-social-icons d-flex align-items-center'>
                            <a class="fa-brands fa-instagram colorGold" href="https://www.instagram.com/evalmaq.az/" target='_blank'></a>
                            <a class="fa-brands fa-facebook-f colorGold " href='#' target='_blank'></a>
                            <a class="fa-brands fa-tiktok colorGold " href='#' target='_blank'></a>
                            <a class="fa-brands fa-whatsapp colorGold " href='https://api.whatsapp.com/send/?phone=9940508604898' target='_blank'></a>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="mx-5 py-3">
                            <h5 className='fw-bold m-4 footer-contact-text'>Bizimlə Əlaqə</h5>
                        </div>
                        <div className='footer-contact mx-5'>
                            <ul>
                                <li className='mb-3'>
                                    <span className='fw-bold text-light'>
                                        <i class="fa-solid fa-location-dot colorGold me-3"></i>
                                        Sumqayıt şəhəri ....
                                    </span>

                                </li>
                                <li className='mb-3'>
                                    <span className='fw-bold text-light'>
                                        <i class="fa-solid fa-envelope colorGold me-3"></i>
                                        info@evalmaq.az
                                    </span>
                                </li>
                                <li className='mb-3'>
                                    <span className='fw-bold text-light'>
                                        <i class="fa-solid fa-phone colorGold me-3"></i>
                                        +994 50 860 48 98
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <div className="mx-5 py-3">
                            <h5 className='fw-bold m-4 footer-subscribe-text'>Yeniliklər üçün abunə</h5>

                        </div>
                        <div className='footer-subscribe mx-5'>
                            <p className='ms-4 text-light fw-bold'>Ən son ev, topağ və əmlaklar elanlarından xəbərdar olun</p>
                            <input type='email' placeholder='E-mail' className='form-control mx-4' />
                            <button className='btn bgGold fw-bold text-light m-4 '>Abunə ol</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='row py-3 footer-bottom d-flex justify-content-between '>
                    <div className='col-md-6'>
                        <p className=' text-light fw-bold'>© 2024 <span className='colorGold'>EvAlmaq.az</span> . Bütün hüquqlar qorunur.</p>
                    </div>
                    <div className='col-md-6 justify-content-end d-flex copyRightPolicy'>
                        <a className='text-light fw-bold'>Məxfilik Siyasəti</a>
                        <a className='text-light fw-bold'>Xidmət Şərtləri</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer