import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal, Carousel } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
    const [emlaklar, setEmlaklar] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [currentImages, setCurrentImages] = useState([]);
    const [filteredEmlaklar, setFilteredEmlaklar] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/data.json');
                setEmlaklar(response.data);
                setFilteredEmlaklar(response.data);
            } catch (error) {
                console.error('Əmlak Datası Çəkilmədi:', error);
            }
        };

        fetchData();
    }, []);

    const handleOpenModal = (index, images) => {
        setSelectedIndex(index);
        setCurrentImages(images);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='Home py-5 mt-5'>
            <div className='container-fluid py-5 mt-5'>
                <h2 className='fw-bold mx-5 py-5'>Satılan Əmlaklar</h2>
                <div className='row justify-content-center align-items-center mx-4'>
                    {filteredEmlaklar.map((emlak, idx) => (
                        <div className='col-sm-3 my-5 realestateCol' key={emlak.emlakid}>
                            <Card className='shadow'>
                                <Carousel>
                                    {emlak.sekilleri.map((image, index) => (
                                        <Carousel.Item key={index} onClick={() => handleOpenModal(index, emlak.sekilleri)}>
                                            <Card.Img variant="top" src={image} />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <Card.Body>
                                    <Card.Title className='fw-bold colorGold'>{emlak.tipi}</Card.Title>
                                    <Card.Text>
                                        <p>Ünvan : {emlak.unvani}</p>
                                    </Card.Text>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Button variant="primary" className='fw-bold bgGold'>Əlaqə Qur</Button>
                                        <h5 className='fw-bold'>₼{emlak.qiymeti}</h5>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

                <Modal show={showModal} onHide={handleCloseModal} centered size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>Şəkil Önizləmə</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel activeIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
                            {currentImages.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default Home;
