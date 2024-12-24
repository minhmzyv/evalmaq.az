import React from 'react';

const Searchs = ({ handleFilterChange, handleSearch }) => {
    return (
        <div className='Search d-flex justify-content-center align-items-center'>
            <div className='container d-flex justify-content-center'>
                <div className="search-container p-4 shadow bg-white">
                    <h3 className='text-center fs-5'>Mövcud əmlaklar üçün axtarış edin</h3>
                    <form className="row g-3 py-1 justify-content-center" onSubmit={handleSearch}>
                        <div className="col-md-4">
                            <div className="input-group">
                                <select className="form-select fw-bold" aria-label="Property" name="location" onChange={handleFilterChange}>
                                    <option value="" className='fw-bold'>Məkanlar</option>
                                    <option value="Sumqayıt" className='fw-bold'>Sumqayıt</option>
                                    <option value="Bakı" className='fw-bold'>Bakı</option>
                                    <option value="Quba" className='fw-bold'>Quba</option>
                                    <option value="Qusar" className='fw-bold'>Qusar</option>
                                </select>
                                <span className="input-group-text colorGold">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </span>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="input-group">
                                <select className="form-select fw-bold" aria-label="Property Type" name="propertyType" onChange={handleFilterChange}>
                                    <option value="" className='fw-bold'>Əmlak Tipi</option>
                                    <option value="Mənzil" className='fw-bold'>Mənzillər</option>
                                    <option value="Torpağ Sahəsi" className='fw-bold'>Torpağ Sahələri</option>
                                    <option value="Villa" className='fw-bold'>Villalar</option>
                                </select>
                                <span className="input-group-text colorGold">
                                    <i className="bi bi-house-door-fill"></i>
                                </span>
                            </div>
                        </div>

                        {/* <div className="col-md-3">
                            <div className="input-group">
                                <input
                                    type="number"
                                    className="form-control fw-bold"
                                    placeholder="Büdcə"
                                    aria-label="Budget"
                                    name="budget"
                                    onChange={handleFilterChange}
                                />
                                <span className="input-group-text colorGold fw-bold">₼</span>
                            </div>
                        </div> */}

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
