import Head from 'next/head'

//import { CallToAction } from '@/components/CallToAction'
import Contact from '@/components/Contact'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import Team from '@/components/Team'
import { Testimonials } from '@/components/Testimonials'
//import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Avla. Bringing mentoring to the home</title>
        <meta
          name="description"
          content="Education is the most powerful tool in the world. - Nelson Mandela. Avla brings education help to neurodivergent people."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Testimonials />
        <Pricing />
        <Team />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

//        <SecondaryFeatures />
