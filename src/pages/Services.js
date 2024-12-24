import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Services = () => {
    return (
        <div className='container py-5'>
            <h6 className='text-center colorGold fw-bold pt-5' id='services'>Xidmətlərimiz</h6>
            <h2 className='text-center fw-bold'>Biz nə edirik?</h2>
            <div className='row py-5'>
                <div className='col-sm-4 servicesCol'>
                    <Card className='service-card'>
                        <Card.Img rel="preload" alt='services' variant='top' src='https://homelengo.vercel.app/images/service/home-1.png' className='service-image' />
                        <Card.Body>
                            <Card.Title className='text-center fw-bold'>Yeni Ev Alın</Card.Title>
                            <Card.Text className='text-center'>
                                Xəyal etdiyiniz evi səylə kəşf edin. Müxtəlif xassələri və ekspert rəhbərliyini araşdırın.
                            </Card.Text>
                            <div className='text-center'>
                                <Button variant='primary' className='bgGold fw-bold' >Ətraflı məlumat</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-sm-4 servicesCol'>
                    <Card className='service-card'>
                        <Card.Img variant='top' alt='services' rel="preload" src='https://homelengo.vercel.app/images/service/home-2.png' className='service-image' />
                        <Card.Body>
                            <Card.Title className='text-center fw-bold'>Ev Satmaq</Card.Title>
                            <Card.Text className='text-center'>
                                Uğurlu satış üçün ekspert rəhbərliyi və effektiv strategiyaları ilə inamla satış edin.
                            </Card.Text>
                            <div className='text-center'>
                                <Button variant='primary' className='bgGold fw-bold'>Ətraflı məlumat</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-sm-4 servicesCol'>
                    <Card className='service-card'>
                        <Card.Img variant='top' alt='services' rel="preload" src='https://homelengo.vercel.app/images/service/home-3.png' className='service-image' />
                        <Card.Body>
                            <Card.Title className='text-center fw-bold'>Kirayə Ev</Card.Title>
                            <Card.Text className='text-center'>
                                Ehtiyaclarınıza uyğun hazırlanmış siyahılarla mükəmməl kirayənizi asanlıqla kəşf edin.
                            </Card.Text>
                            <div className='text-center'>
                                <Button variant='primary' className='bgGold fw-bold'>Ətraflı məlumat</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Services;