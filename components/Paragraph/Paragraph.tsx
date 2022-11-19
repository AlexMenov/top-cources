import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import style from "./Paragraph.module.css"
import classnames from "classnames"
interface Paragraph extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode,
    size: "L" | "M" | "S"
}

export const Paragraph = ({ size, children, className, ...otherProps }: Paragraph): JSX.Element => {
    return <p
        className={classnames(className,
            {
                [style.large]: size === "L",
                [style.medium]: size === "M",
                [style.small]: size === "S"
            })}
        {...otherProps}>
        {children}
    </p>;
}