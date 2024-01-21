"use client"
import {ReactElement, useEffect} from "react";
import {useScrollY} from "@/hooks/useScrollY";
import { motion, useAnimation } from "framer-motion";

import styles from './up.module.css';
import Image from "next/image";

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
        <Image
            width="24" height="24"
            src="./images/arrow-up.png" alt="external-up-arrows-those-icons-lineal-those-icons"
            priority
        />
    </motion.button>)
}