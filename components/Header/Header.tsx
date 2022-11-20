import { DetailedHTMLProps, HTMLAttributes } from "react"
import style from "./Header.module.css"
import classnames from "classnames"
interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}
export const Header = ({className, ...otherProps}: HeaderProps) => {
    return <header className={classnames(className)} {...otherProps}>
        Header
    </header>
}