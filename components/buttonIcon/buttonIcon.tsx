import {ButtonHTMLAttributes, DetailedHTMLProps, ReactElement} from "react";
import cn from 'classnames';

import facebook from '../../public/icons/svg/facebook.svg';
import linkedin from '../../public/icons/svg/linkedin.svg';
import upwork from '../../public/icons/svg/upwork.svg';
import github from '../../public/icons/svg/github.svg';
import instagram from '../../public/icons/svg/instagram.svg';
import done from '../../public/icons/svg/done.svg';
import search from '../../public/icons/svg/search.svg';

import styles from './buttonIcon.module.css'

export const icons = {
    facebook,
    linkedin,
    upwork,
    github,
    done,
    instagram,
    search
}

export type IconName = keyof typeof icons;

interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    icon: IconName,
    text?: string,
    appearance: 'primary' | 'white'
}

export const ButtonIcon = ({ appearance, icon, className, text, ...props }: ButtonIconProps): ReactElement => {
    const Icon = icons[icon];

    return (<button className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.white]: appearance === 'white',
    })}{...props}>
        {text && <div className={styles.text}>{text}</div>}
        <div className={styles.icon}><Icon /></div>
    </button>)
}