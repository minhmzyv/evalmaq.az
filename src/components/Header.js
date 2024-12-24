import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='Header'>
            <Navbar />
            <div className='container-fluid headerTexts py-5'>
                <div className='row py-4'>
                    <div className='col-sm-4 d-flex justify-content-center align-items-center flex-column'>
                        <h2 className='mx-5 py-4 fw-bold'>Xəyallarınızdakı evi bizimlə tapın</h2>
                        <p className='fw-bold mx-5'>Ev tapmaq istəyirsiniz? Yeni başlanğıclar üçün ideal məkanlar! Ən yaxşı seçimləri sizin üçün tapırıq.</p>
                    </div>
                </div>
                <button className='btn baslaBtn mx-5 py-3 fw-bold text-light'>İndi Başla</button>
                <div className='websiteLog row py-5 mx-5'>
                    <div className='col-sm-4'>
                        <div className='row py-5'>
                            <div className='col-sm-4'>
                                <h2 className='fw-bold'>100<span className='colorGold'>+</span></h2>
                                <p className='fw-bold'>Əmlak Elanları</p>
                            </div>
                            <div className='col-sm-4'>
                                <h2 className='fw-bold'>10<span className='colorGold'>+</span></h2>
                                <p className='fw-bold'>Tamamlanan Satış</p>
                            </div>
                            <div className='col-sm-4'>
                                <h2 className='fw-bold'>5<span className='colorGold'>+</span></h2>
                                <p className='fw-bold '>Şəhərdə Əmlak</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;