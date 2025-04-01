import React from 'react';

export default function Footer() {
    return (
        <footer className="footer bg-dark text-light py-4 mt-5">
            <div className="container text-center">
                <div className="row">
                    {/* Contact Information */}
                    <div className="col-md-4">
                        <h5 className="fw-bold">Contact</h5>
                        <p>Email: <a href="mailto:your.email@example.com" className="text-light">abhinavsahu120@gmail.com, <br />sahuabhinav619@gmail.com</a></p>
                        <p>Phone: +91 6264843994</p>
                    </div>

                    {/* Location */}
                    <div className="col-md-4">
                        <h5 className="fw-bold">Location</h5>
                        <p>Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka, 560068
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="col-md-4">
                        <h5 className="fw-bold">Follow Me</h5>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="https://www.linkedin.com/in/abhinav-sahu-790646296" className="text-light" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                            <a href="https://github.com/ABHINAV192001" className="text-light" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github fa-2x"></i>
                            </a>
                            <a href="mailto:abhinavsahu120@gmail.com" className="text-light">
                                <i className="fas fa-envelope fa-2x"></i>
                            </a>

                        </div>
                    </div>
                </div>
                <hr className="my-3 border-light" />
                <p className="mb-0">&copy; 2024 Abhinav Sahu. All Rights Reserved.</p>
            </div>
        </footer>
    );
}