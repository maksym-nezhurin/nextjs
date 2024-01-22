'use client'
import {ReactElement, useEffect, useMemo, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import cn from 'classnames';

import styles from './animatedTubes.module.css';

type Item = {
    id: string,
    subtitle: string,
    title: string,
}

export const AnimatedTubes = (): ReactElement => {
    const items: Item[] = [
        {
            id: '1',
            title: 'first element',
            subtitle: 'subtitle'
        },
        {
            id: '2',
            title: 'second element',
            subtitle: 'subtitle 2'
        },
        {
            id: '3',
            title: 'third element',
            subtitle: 'subtitle 3'
        }
    ];
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [item, setItem] = useState<Item | null>(null)

    useEffect(() => {
        const item = items.find(item => item.id === selectedId);
        item && setItem(item);
    }, [selectedId]);

    return <div className={styles.container}>
        {items.map(item => (
            <motion.div layoutId={item.id} key={item.id} onClick={() => setSelectedId(item.id)}>
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
            </motion.div>
        ))}

        <AnimatePresence>
            <div className={cn(styles.background, {
                [styles.backgroundActive]: !!selectedId
            })} onClick={() => setSelectedId(null)} ></div>
            {selectedId && item && (
                <motion.div layoutId={selectedId} className={styles.animatedItem}>
                    <motion.h5>{item?.subtitle}</motion.h5>
                    <motion.h2>{item?.title}</motion.h2>
                    <motion.button className={styles.animatedItemClose} onClick={() => setSelectedId(null)}>
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50">
                            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                        </svg>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
}