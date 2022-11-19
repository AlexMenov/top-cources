import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import style from "./Button.module.css"
import classnames from "classnames"
import Arrow from "../../public/arrow.svg"
interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    appearance: "primary" | "ghost",
    arrow?: "none" | "down" | "right"
}

export const Button = ({ appearance, children, className, arrow = "none", ...otherProps }: ButtonProps): JSX.Element => {
    return <button
        className={classnames(style.button,
            className,
            {
                [style.primary]: appearance === "primary",
                [style.ghost]: appearance === "ghost"
            })}
        {...otherProps}>
        {children}
        {arrow !== "none" && <span className={classnames(
            style.arrow,
            {
                [style.down]: arrow === "down",
                [style.right]: arrow === "right"
            })}>
            <Arrow />
        </span>
        }
    </button >
}