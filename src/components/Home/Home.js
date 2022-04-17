
import React from 'react';
import Button from '../Button/Button';
import './Home.css'
const Home = () => {
    return (
        <>
            <section className="HeroSection">
                <div className="container">
                    <div className="row " >
                        <div className="col-md-12 ">
                            <div className="col-lg-8 col-md-12">
                                <h1 className="Hero_section_Heading ">Taking pictures is savoring life intensely</h1>
                                <p className="Hero_section_Paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices enim eu placerat lacus, duis duis. Consectetur et malesuada.</p>

                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 text-center">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 mt-3 ">
                                    <Button Link="/courses" buttonname="All Courses" classes="btn allCourse" />
                                </div>
                                <div className="col-lg-3 col-md-4  mt-3">
                                    <Button Link="/courses" buttonname="All Courses" classes="btn allCourse" />
                                </div>
                                <div className="col-lg-3 col-md-4  mt-3">
                                    <Button Link="/courses" buttonname="All Courses" classes="btn allCourse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;