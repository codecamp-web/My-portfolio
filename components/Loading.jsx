import React, { useState, useEffect, useCallback, useRef, lazy, Suspense } from 'react';
import { navbarList } from './data';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { RiMenu3Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const About = lazy(() => import('../pages/About'));
const Works = lazy(() => import('../pages/Works'));
const Experiences = lazy(() => import('../pages/Experiences'));
const Contact = lazy(() => import('../pages/Contact'));

const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/codecamp-web' },
    { icon: FaInstagram, url: 'https://www.instagram.com/sixneuf_/' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/edward-ogheneochuko/' },
];

const Loading = () => {
    const [open, setOpen] = useState(false);
    const drawerRef = useRef(null);

    const handleClickOutside = useCallback((event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
            setOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [handleClickOutside]);

    const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);

    return (
        <div className="flex flex-col transition-all duration-300">
            <motion.nav
                initial={{ y: '-100%' }} // Start off-screen (above)
                animate={{ y: 0 }}        // Animate to top
                transition={{ duration: 0.5, ease: 'easeOut' }} // Timing for smooth drop
                className="fixed top-0 left-0 w-full bg-black text-white py-4 text-lg font-semibold px-12 z-10 flex justify-between items-center"
            >
                <div className="relative flex items-center justify-center w-12 h-12 border-2 border-amber-400 rounded-full">
                    <h1 className="text-2xl font-bold">E</h1>
                </div>
                <motion.ul className="hidden md:flex gap-x-10 text-sm items-center">
                    {navbarList.map((navbar, index) => (
                        <motion.li key={index}>
                            <span className="text-green-300 font-mono">&gt; {navbar.number}</span>
                            <Link to={navbar.id} smooth={true} duration={500} className="hover:text-amber-300 cursor-pointer transition duration-200">
                                {navbar.name}
                            </Link>
                        </motion.li>
                    ))}
                    <motion.li className="border p-3 hover:bg-amber-600 duration-300 transition cursor-pointer rounded-sm">
                        <a href="https://drive.google.com/file/d/1ExKz7QqVe_TQPXfYOI99ha9u5lRaa3hd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="no-underline">
                            Resume
                        </a>
                    </motion.li>
                </motion.ul>
                <div className="md:hidden text-3xl text-amber-300 cursor-pointer" onClick={toggleMenu}>
                    <RiMenu3Fill />
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div ref={drawerRef} initial={{ x: '100%' }} animate={{ x: open ? '0%' : '100%' }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="md:hidden fixed top-0 right-0 w-2/3 h-full bg-neutral-900 text-white shadow-lg z-10 flex-col p-6">
                <div className="flex justify-end">
                    <AiOutlineClose className="text-3xl cursor-pointer mr-7 text-amber-300" onClick={toggleMenu} />
                </div>
                <ul className="flex flex-col gap-y-10 mt-30 w-20 mx-auto text-md text-center items-center">
                    {navbarList.map((navbar, index) => (
                        <li key={index} className="flex flex-col">
                            <span className="text-green-300">{navbar.number}</span>
                            <Link to={navbar.id} smooth={true} duration={500} className="hover:text-amber-300 cursor-pointer" onClick={toggleMenu}>
                                {navbar.name}
                            </Link>
                        </li>
                    ))}
                    <li className="border px-4 py-3 hover:bg-amber-600 transition duration-200 cursor-pointer rounded-sm" onClick={toggleMenu}>
                        <a href="https://drive.google.com/file/d/1ExKz7QqVe_TQPXfYOI99ha9u5lRaa3hd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="no-underline">
                            Resume
                        </a>
                    </li>
                </ul>
            </motion.div>

            {/* Social Links */}
            <aside className="hidden md:flex fixed top-40 left-0 h-full flex-col items-center text-white text-2xl gap-y-5 justify-center w-30">
                {socialLinks.map(({ icon: Icon, url }, index) => (
                    <motion.a key={index} href={url} className="hover:text-yellow-400" whileHover={{ scale: 1.2, opacity: 0.8 }}>
                        <Icon />
                    </motion.a>
                ))}
                <div className="w-0.5 h-30 bg-white"></div>
            </aside>

            {/* Email Link - Opens Email Client */}
            <aside className="hidden md:flex fixed top-40 right-0 h-full flex-col items-center justify-center w-30">
                <motion.a
                    className="text-white transition duration-75 text-md font-medium transform rotate-90 tracking-widest hover:text-yellow-400 cursor-pointer"
                    href="mailto:headiesed@gmail.com?subject=Hello Edward!&body=Hi Edward, I wanted to reach out regarding..."
                >
                    headiesed@gmail.com
                </motion.a>
            </aside>

            {/* Main Content */}
            <main className={`mx-5 md:mx-auto md:w-2/3 text-white ${open ? 'blur-md md:blur-none' : ''} px-4 sm:px-6`}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Dashboard />
                    <section id="about"><About /></section>
                    <section id="experience"><Experiences /></section>
                    <section id="works"><Works /></section>
                    <section id="contact"><Contact /></section>
                </Suspense>
            </main>
        </div>
    );
};

export default Loading;
