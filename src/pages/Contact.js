import React from 'react'

const Contact = () => {
    return (
        <div className='container py-5 Contact'>
            <div className='row'>
                <h2 className='text-center fw-bold py-5' id='contact'>Bizimlə Əlaqə</h2>
                <div className='col-sm-12 card'>
                    <h5 className='py-4 text-center'>Arzuladığınız evi tapmaqda sizə kömək etməkdən məmnun olarıq. Bizimlə əlaqə saxlayın!</h5>
                    <form>
                        <div className='d-flex justify-content-center align-items-center py-4 firstInputs'>
                            <div className='mx-2'>
                                <h6>Adınız <span className='text-danger'>*</span></h6>
                                <input type='text' placeholder='Adınızı yazın' className='form-control nameForm' />
                            </div>
                            <div className='mx-2'>
                                <h6>Soy Adınız <span className='text-danger'>*</span></h6>
                                <input type='text' placeholder='Soyadınızı yazın' className='form-control nameForm' />
                            </div>

                        </div>

                        <div className='d-flex align-items-center flex-column firstInputs'>
                            <div className='py-3'>
                                <h6 className='text-start'>E-mail <span className='text-danger'>*</span></h6>
                                <input type='email' placeholder='E-mail' className='form-control emailForm' />
                            </div>
                            <div className='pb-5'>
                                <h6>Mesaj <span className='text-danger'>*</span></h6>
                                <textarea type='text' placeholder='Mesaj' className='form-control emailForm my-3' />
                                <button className='btn bgGold fw-bold emailForm'>Göndərmək</button>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact