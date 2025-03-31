import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from "./Loading";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [moveToNavbar, setMoveToNavbar] = useState(false);
    const [hideFloatingE, setHideFloatingE] = useState(false);
    const [open, setOpen] = useState(false);

    const drawerRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const moveTimeout = setTimeout(() => setMoveToNavbar(true), 2800);
        const hideTimeout = setTimeout(() => setHideFloatingE(true), 4500);
        return () => {
            clearTimeout(moveTimeout);
            clearTimeout(hideTimeout);
        };
    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);


    return (
        <Router>
            <div className={`flex items-center justify-center bg-black relative
             transition-all duration-500 ${loading ? "w-screen h-screen" : "w-full h-full"}`}>
                {!hideFloatingE && (
                    <motion.div
                        initial={{ x: "-50%", y: "-50%", opacity: 1 }}
                        animate={moveToNavbar ? { top: "30px", left: "40px", translateX: "0%", translateY: "0%" } : {}}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute flex items-center justify-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 1.4, opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="absolute w-16 h-16 border-4 border-amber-400 rounded-full"
                        />
                        <motion.span
                            initial={{ opacity: 1 }}
                            animate={hideFloatingE ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="text-neutral-300 text-3xl font-bold relative"
                        >
                            E
                        </motion.span>
                    </motion.div>
                )}

                {loading ? null : <Loading />}
            </div>
        </Router>
    );
};

export default Home;
