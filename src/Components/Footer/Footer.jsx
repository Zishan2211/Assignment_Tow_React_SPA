import React from 'react';
import facebook from "../../assets/Facebook.png"
import twitter from "../../assets/xLogo.png"
import instagram from "../../assets/instagram.png"
import support from "../../assets/support.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content mt-15 p-10 flex flex-col lg:flex-row lg:justify-evenly gap-10">
                <nav className='w-full lg:w-1/4'>
                    <h2 className='font-bold text-2xl mb-3'>CS — Ticket System</h2>
                    <p className='text-sm opacity-80 leading-relaxed'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Sales</a>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav className="flex flex-col gap-2 ">
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover flex gap-2"><img className='w-5 h-4' src={facebook} alt="" /> CS — Ticket System</a>
                    <a className="link link-hover flex gap-2"><img className='w-5 h-4' src={twitter} alt="" /> CS — Ticket System</a>
                    <a className="link link-hover flex gap-2"><img className='w-5 h-4' src={instagram} alt="" /> CS — Ticket System</a>
                    <a className="link link-hover flex gap-2"><img className='w-5 h-4' src={support} alt="" /> support@cst.com</a>
                </nav>
            </footer>
            <hr className="border-t border-gray-300" />
            <div className="footer sm:footer-horizontal footer-center bg-black text-white p-4">
                <aside>
                    <p>Copyright © 2025 CS — Ticket System. All rights reserved.</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;