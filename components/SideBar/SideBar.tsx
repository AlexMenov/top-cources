import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import style from "./SideBar.module.css"
import classnames from "classnames"
interface SideBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const SideBar = ({ className, ...otherProps }: SideBarProps): JSX.Element => {
    return <menu className={classnames(className)} {...otherProps} >
        SideBar
    </menu>
}