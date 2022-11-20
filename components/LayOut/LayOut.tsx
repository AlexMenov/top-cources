import { DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactNode } from "react";
import style from "./LayOut.module.css"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Main } from "../Main/Main"
import { SideBar } from "../SideBar/SideBar"

interface LayOutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}

const LayOut = ({ children }: LayOutProps): JSX.Element => {
    return <div className={style.layout}>
        <Header className={style.header}/>
        <SideBar className={style.sidebar}/>
        <Main className={style.main}>
            {children}
        </Main>
        <Footer className={style.footer}/>
    </div>
}

export const withLayOut = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function widthLayOutComponent (props: T): JSX.Element {
        return <LayOut>
            <Component {...props}/>
        </LayOut>
    }
}