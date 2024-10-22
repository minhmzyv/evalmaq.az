import React from 'react';

const Searchs = () => {
    return (
        <div className='Search d-flex justify-content-center align-items-center'>
            <div className='container d-flex justify-content-center'>
                <div className="search-container p-4 shadow bg-white">
                    <h5 className='text-center'>Mövcud əmlaklar üçün axtarış edin</h5>
                    <form className="row g-3 py-1">
                        <div className="col-md-3">
                            <div className="input-group">
                                <select className="form-select fw-bold" aria-label="Property">
                                    <option defaultValue className='fw-bold'>Məkanlar</option>
                                    <option value="1" className='fw-bold'>Sumqayıt</option>
                                    <option value="2" className='fw-bold'>Bakı</option>
                                    <option value="3" className='fw-bold'>Quba</option>
                                    <option value="4" className='fw-bold'>Qusar</option>
                                </select>
                                <span className="input-group-text colorGold">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="input-group">
                                <select className="form-select fw-bold" aria-label="Property Type">
                                    <option defaultValue className='fw-bold'>Əmlak Tipi</option>
                                    <option value="1" className='fw-bold'>Mənzillər</option>
                                    <option value="2" className='fw-bold'>Torpağ Sahələri</option>
                                    <option value="3" className='fw-bold'>Villalar</option>
                                </select>
                                <span className="input-group-text colorGold">
                                    <i className="bi bi-house-door-fill"></i>
                                </span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="input-group">
                                <input
                                    type="number"
                                    className="form-control fw-bold"
                                    placeholder="Büdcə"
                                    aria-label="Budget"
                                />
                                <span className="input-group-text colorGold fw-bold">₼</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <button type="submit" className="btn baslaBtn text-light fw-bold w-100">İndi Axtarın</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Searchs;
