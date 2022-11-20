import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import style from "./Main.module.css"
import classnames from "classnames"
import Head from 'next/head'
import Image from 'next/image'
import { Htag } from '../Htag/Htag'
import { Button } from '../Button/Button'
import { Paragraph } from '../Paragraph/Paragraph'
import { Tag } from '../Tag/Tag'
import { Rating } from '../Rating/Rating'
import { useState } from 'react'
interface MainProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}

export const Main = ({children, className, ...otherProps }: MainProps) => {
    const [count, setCount] = useState(0)
    const [rating, setRating] = useState<number>(4)
    
    return <main className={classnames(className)} {...otherProps} >
        Main
        {children}
        <Htag tag='h1'>{count}</Htag>
        <Button appearance='primary' onClick={() => setCount((c) => c - 1)} arrow="down">Send</Button>
        <p></p>
        <Button appearance='ghost' onClick={() => setCount((c) => c + 1)} arrow="right">Send</Button>
        <Paragraph size='L'>большой</Paragraph>
        <Paragraph size='M'>средний</Paragraph>
        <Paragraph size='S'>маленький</Paragraph>
        <Tag size='M' color='ghost' href='/'>kjkldfjk</Tag>
        <Tag size='M' color='gray' href='/'>kjkldfjk</Tag>
        <Tag size='S' color='green' href='/'>kjkldfjk</Tag>
        <Tag size='S' color='primary'>kjkldfjk</Tag>
        <Tag size='S' color='red'>kjkldfjk</Tag>
        <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
    </main>
}