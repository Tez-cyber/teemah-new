import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer relative z-10 text-gray-400 before:-z-10 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/70" id="footer">
            <div className=" ">
                <div className="row justify-center gap-8 items-center px-10 py-20 ">
                    <div className="w-1/3 py-0 px-4 text-center footer-item">
                        <h3 className='capitalize text-xl font-bold'>Our Location</h3>
                        <p>Gbokoniyi, lecturer bus stop,
                            <br />Abeokuta
                        </p>
                    </div>
                    <div className="w-1/3 py-0 px-4 text-center footer-item">
                        <h3 className='capitalize text-xl font-bold'>Opening Hours</h3>
                        <p>Monday to Sunday
                            <br />9:00AM - 10PM
                        </p>
                    </div>
                    <div className="w-1/3 py-0 px-4 text-center footer-item">
                        <h3 className='capitalize text-xl font-bold'>Contact Us</h3>
                        <p>+2347059269642</p>
                        <p>bisolatiamiyu3@gmail.com</p>
                        <div className="flex items-center justify-center gap-4 pt-4 text-2xl social-links">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https:instagram.com/teemah_confectionery?igshid=YmMyMTA2M2Y=">
                                <FaInstagram />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://wa.me/+2349090288329"><FaWhatsapp /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="text-center border-t border-t-gray-400 p-10 copyright">
                        &copy; 2021 - Designed by Tez-Cyber
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer