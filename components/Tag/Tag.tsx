import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import classnames from "classnames"
import style from "./Tag.module.css"
interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    size: "M" | "S",
    href?: string,
    color: "ghost" | "red" | "gray" | "green" | "primary"
}

export const Tag = ({ children, size, href, color, className, ...otherProps }: TagProps): JSX.Element => {
    return <div
        className={classnames(className, style.tag, {
            [style.medium]: size === "M",
            [style.small]: size === "S"
        },
            {
                [style.ghost]: color === "ghost",
                [style.red]: color === "red",
                [style.gray]: color === "gray",
                [style.green]: color === "green",
                [style.primary]: color === "primary",
            }
        )}
        {...otherProps}>
        {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
}