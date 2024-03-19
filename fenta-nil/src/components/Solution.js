// Solution.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Solution.css'; // Make sure you import the Solution CSS for custom styling
import '../assets/theme.css';

function Solution() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="container-fluid px-0 py-5">
            <div className="row justify-content-center mb-5" data-aos="fade-up">
                <div className="col-12 text-center">
                    <h1 className="display-4">FENTA-NIL: Zeroing in on Toxic Drug Deaths</h1>
                </div>
            </div>
            <div className="row align-items-center mb-1">
                <div className="col-lg-5 offset-lg-1" data-aos="fade-right"> {/* Adjust the offset to match the gap */}
                    <p className="lead fs-1 custom-padding-left">An Innovative fusion of Technology and Prowess in detecting Fentanyl</p>
                </div>
                <div className="col-lg-6 text-center" data-aos="fade-left">
                    <img src="/3Dprint1.png" alt="Fenta-Nil 3D Model 1" className="solution-image1" />
                </div>
            </div>

            <div className="new-section">
              <div className="container-fluid px-0">
                <div className="row text-center">
                  <div className="col feature-word">Discreet</div>
                  <div className="col feature-word">Save Lives</div>
                  <div className="col feature-word">User-Friendly</div>
                  <div className="col feature-word">Easily Accessible</div>
                </div>
              </div>
            </div>



            <div className="row align-items-center mt-5">
                <div className="col-lg-5" data-aos="fade-right">
                    <img src="/3Dprint2.png" alt="Fenta-Nil 3D Model 2" className="solution-image2" />
                </div>
                <div className="col-lg-6 offset-lg-1" data-aos="fade-left"> {/* Use offset to create the gap */}
                    <p className="lead fs-1 custom-padding-right">Fenta-Nil leverages advanced technology to ensure fentanyl detection in just 2 steps</p>
                </div>
            </div>
        </div>
    );
}

export default Solution;
