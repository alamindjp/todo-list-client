import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-primary text-gray-300 mt-10'>
            <div className="footer footer-center p-4 ">
                <p>Copyright © {year} - All Right</p>
            </div>
        </footer>
    );
};

export default Footer;