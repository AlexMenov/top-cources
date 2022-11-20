import { DetailedHTMLProps, HTMLAttributes } from "react"
import style from "./Footer.module.css"
import classnames from "classnames"
interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Footer = ({ className, ...otherProps }: FooterProps): JSX.Element => {
    const currentYear = new Date().getFullYear();
    return <footer className={classnames(className, style.footer)} {...otherProps}>
        <span className={classnames(style.rights, style.span)}>
            <a href="mailto: menovlex@mail.ru">@AlexMenov</a> © 2021 - {currentYear} Все права защищены
        </span>
        <span className={classnames(style.agreement, style.span)}>
            <a href="#">Пользовательское соглашение</a>
        </span>
        <span className={classnames(style.confidentiality, style.span)}>
            <a href="#">Политика конфиденциальности</a>
        </span>
    </footer>
}