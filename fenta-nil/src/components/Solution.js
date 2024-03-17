// Solution.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Solution.css'; // Make sure you import the Solution CSS for custom styling

function Solution() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="container py-5">
            <div className="row justify-content-center mb-5" data-aos="fade-up">
                <div className="col-12 text-center">
                    <h1 className="display-4">FENTA-NIL: Zeroing in on Toxic Drug Deaths</h1>
                </div>
            </div>
            <div className="row align-items-center mb-5">
                <div className="col-lg-4" data-aos="fade-right">
                    <p className="lead fs-3">A groundbreaking solution designed to empower individuals</p>
                </div>
                <div className="col-lg-8 text-center" data-aos="fade-left">
                    <img src="/3Dprint1.png" alt="Fenta-Nil 3D Model 1" className="solution-image1" />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6 text-center" data-aos="fade-right">
                    <img src="/3Dprint2.png" alt="Fenta-Nil 3D Model 2" className="solution-image2" />
                </div>
                <div className="col-lg-6" data-aos="fade-left">
                    <p className="lead fs-3">Fenta-Nil leverages advanced, user-friendly technology to provide rapid results</p>
                </div>
            </div>
        </div>
    );
}

export default Solution;
