import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import backgroundImage_2 from '@/images/background-icons.png'
import prototype_1 from '@/images/screenshots/prototype-4.png'
import prototype_2 from '@/images/screenshots/prototype-1.png'
import prototype_3 from '@/images/screenshots/prototype-2.png'
import prototype_4 from '@/images/screenshots/prototype-3.png'

const features = [
  {
    title: 'Audio',
    color: 'purple-800',
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: prototype_1,
  },
  {
    title: 'Visual',
    color: 'pink-400',
    description:
      "We offer images and a visual avatar to interact with you improving the interaction on the website.",
    image: prototype_2,
  },
  {
    title: 'Learning',
    color: 'blue-600',
    description:
      "We encourage different ways of thinking. We don't want you to just memorize the answers.",
    image: prototype_3,
  },
  {
    title: 'Assistant',
    color: 'orange-400',
    description:
      'Supports you like a friend. It will ask questions and give encouragement when you need it.',
    image: prototype_4,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative pt-20 overflow-hidden bg-orange-400 pb-28 sm:py-32 bg-gradient-to-r from-orange-400 to-pink-400 opacity-80"
    >

      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl md:text-5xl">
            Everything you need to get the help you need.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-orange-100">
          Our <span class="text-purple-800">Audio </span> 
          <span class="text-pink-400">Visual </span> 
          <span class="text-blue-600">Learning </span> 
          <span class="text-orange-600">Assistant </span>
          - AVLA! Our website is easy to use and will help you learn.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="grid items-center grid-cols-1 pt-10 mt-16 gap-y-2 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex px-4 gap-x-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? `text-${feature.color} lg:text-white`
                              : 'text--100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-orange-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative max-w-2xl mx-auto text-base text-white sm:text-center ">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-orange-900/20 sm:w-auto lg:mt-0 lg:w-[45.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}


//  <div className={`text-${feature.color}`}>
/*

<Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage_2}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />

      */