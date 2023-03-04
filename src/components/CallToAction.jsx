import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import backgroundImage_2 from '@/images/background.png'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative py-32 overflow-hidden bg-gradient-to-r from-orange-400 to-pink-400 opacity-80"
    >
      
      <div className="absolute inset-0 z-[-1] py-20 sm:py-32 bg-gradient-to-r from-orange-400 to-pink-400 opacity-80" />

      <Container className="relative">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Try an education account
          </Button>
        </div>
      </Container>
    </section>
  )
}
