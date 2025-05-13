import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal, Carousel } from 'react-bootstrap';
import axios from 'axios';
import Searchs from '../components/Searchs';
import Services from './Services';
import Contact from './Contact';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const [emlaklar, setEmlaklar] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [currentImages, setCurrentImages] = useState([]);
    const [filteredEmlaklar, setFilteredEmlaklar] = useState([]);
    const [filters, setFilters] = useState({
        location: '',
        propertyType: ''
    });
    const [productLimit, setProductLimit] = useState(4);


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

    const handleWhatsAppClick = (unvani, tipi) => {
        const phoneNumber = '9940508604898';
        const whatsappMessage = `Salam Aleykum, ${unvani} yerləşən əmlak haqqında məlumat almaq istiyirdim.Əmlakın Tipi: ${tipi}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;


        window.open(whatsappUrl, '_blank');
    };

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredList = emlaklar.filter(emlak => {
            const matchesLocation = filters.location ? emlak.unvani.includes(filters.location) : true;
            const matchesPropertyType = filters.propertyType ? emlak.tipi === filters.propertyType : true;
            return matchesLocation && matchesPropertyType;
        });
        setFilteredEmlaklar(filteredList);
    };

    const handleShowMore = () => {
        setProductLimit(prevProductLimit => prevProductLimit + 4);
    };

    return (
        <div className='Home py-5 mt-5'>
            <Helmet>
                <title>Əmlak Al və Sat - Evalmaq.az</title>
                <meta
                    name="description"
                    content="Evalmaq.az ilə asanlıqla ev alın və ya satın. Azərbaycanın ən etibarlı emlak platformu."
                />
                <meta
                    name="keywords"
                    content="emlak, ev al, ev sat, Azerbaycan emlak, evalmaq.az"
                />
            </Helmet>
            <div className='container-fluid py-5 mt-5'>
                <h2 className='fw-bold text-center py-5' id='emlaklar'>Satılan Əmlaklar</h2>

                <Searchs handleFilterChange={handleFilterChange} handleSearch={handleSearch} />

                <div className='row justify-content-center align-items-center mx-4'>
                    {filteredEmlaklar.slice(0, productLimit).map((emlak, idx) => (
                        <div className='col-sm-3 my-5 realestateCol' key={emlak.emlakid}>
                            <Card className='shadow'>
                                <Carousel>
                                    {emlak.sekilleri.map((image, index) => (
                                        <Carousel.Item key={index} onClick={() => handleOpenModal(index, emlak.sekilleri)}>
                                            <Card.Img rel="preload" alt='emlaklar' variant="top" src={image} />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <Card.Body>
                                    <Card.Title className='fw-bold colorGold'>{emlak.tipi}</Card.Title>
                                    <Card.Text>
                                        <p>Ünvan : {emlak.unvani}</p>
                                    </Card.Text>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Button onClick={() => handleWhatsAppClick(emlak.unvani, emlak.tipi)} variant="primary" className='fw-bold bgGold'>Əlaqə Qur</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

                {productLimit < filteredEmlaklar.length && (
                    <div className='text-center'>
                        <button onClick={handleShowMore} className='fw-bold bgGold btn my-4'>Daha Çox</button>
                    </div>
                )}

                <Modal show={showModal} onHide={handleCloseModal} centered size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>Şəkil Önizləmə</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel activeIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
                            {currentImages.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img rel="preload" className="d-block w-100" src={image} alt={`Slide ${index}`} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Modal.Body>
                </Modal>
            </div>
            <Services />
            <Contact />
        </div>
    );
};

export default Home;