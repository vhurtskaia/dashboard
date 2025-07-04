"use client"

import React, {JSX} from "react";
import Link from "next/link";

import styles from "./Button.module.css";

interface IButtonProps {
    type?: "button" | "reset" | "submit";
    ref?: React.RefObject<null>;
    className?: string;
    size?: "small" | "big";
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
    bg?: boolean,
    href?: string | undefined;
    target?: "_self" | "_blank" | "_parent" | "_top";
}

export const Button = ({
                           children,
                           className,
                           ref,
                           onClick,
                           type = "button",
                           size = "big",
                           bg,
                           href,
                       }: IButtonProps): JSX.Element => {

    const sizes = size === "big" ? styles['button--big'] : styles['button--small']
    const background = bg ? styles["button--background"] : ""
    const classNames = `${styles.button} ${styles.buttonSmall} ${sizes} ${background}${className ? ` ${className}` : ""}`

    return href ? (
        <Link
            className={classNames}
            href={href}
            ref={ref}
            type={type}
        >
            {children}
        </Link>
    ) : (
        <button
            className={classNames}
            onClick={onClick}
            ref={ref}
            type={type}
        >
            {children}
        </button>
    );
}