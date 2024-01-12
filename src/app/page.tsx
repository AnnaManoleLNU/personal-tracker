import Image from 'next/image'
import HeadingOne from '../components/headingOne'
import Paragraph from '../components/paragraph'
import Button from '../components/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeadingOne>Personal tracker</HeadingOne>
      <Paragraph>Here you can track your stats</Paragraph>
      <Button href="/about" color='red'>Click me</Button>
      <Button href="/login" color='green'>Login</Button>

    </main>
  )
}
