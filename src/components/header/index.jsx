import { useEffect } from 'react';
import Logo from '../../assets/images/Logo.svg'
import './main.scss'
const Header = () => {
    const homeLinks = [
        {
            text: "HOME",
            url: "#home"
        },
        {
            text: "ABOUT",
            url: "#about"
        },
        {
            text: "FEATURES",
            url: "#features"
        },
        {
            text: "BLOG",
            url: "#blog"
        },
        {
            text: "CONTACTS",
            url: "#contacts"
        }
    ]

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.header');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
    return (
        <>
            <div className="header">
                <div className="header-container">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="links">
                        {
                            homeLinks.map((item, key) => (
                                <a key={key} href={item.url}>{item.text}</a>
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
export default Header