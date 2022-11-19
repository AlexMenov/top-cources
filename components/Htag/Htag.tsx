import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import classnames from "classnames"
import style from "./Htag.module.css"
interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: ReactNode,
    tag: "h1" | "h2" | "h3"
}

export const Htag = ({ tag, children, className, ...otherProps }: HtagProps): JSX.Element => {
    switch (tag) {
        case "h1":
            return <h1 className={classnames(style.h1, className)} {...otherProps}>{children}</h1>;
        case "h2":
            return <h2 className={classnames(style.h2, className)} {...otherProps}>{children}</h2>;
        case "h3":
            return <h3 className={classnames(style.h3, className)} {...otherProps}>{children}</h3>;
    }
}