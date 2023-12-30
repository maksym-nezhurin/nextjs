"use client"
import {ReactElement, useEffect} from "react";
import {useScrollY} from "@/hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";

import styles from './up.module.css';

export const Up = (): ReactElement => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight})
    }, [y, controls])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (<motion.button
        className={styles.up}
        onClick={scrollToTop}
        animate={controls}
        initial={{ opacity: 0 }}
    >
        <img width="24" height="24" src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-up-arrows-those-icons-lineal-those-icons.png" alt="external-up-arrows-those-icons-lineal-those-icons"/>
    </motion.button>)
}