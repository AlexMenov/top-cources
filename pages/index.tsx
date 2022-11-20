import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Htag } from '../components/Htag/Htag'
import { Button } from '../components/Button/Button'
import { Paragraph } from '../components/Paragraph/Paragraph'
import { Tag } from '../components/Tag/Tag'
import { Rating } from '../components/Rating/Rating'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [rating, setRating] = useState<number>(4)
  return (
    <div className={styles.container}>
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
    </div>
  )
}
