import Image from 'next/image'
import michael from '@/images/profiles/michael-yu.jpg'
import thomas from '@/images/profiles/thomas-speciel.jpg'
import ryan from '@/images/profiles/ryan-mark.jpeg'
import rory from '@/images/profiles/rory-gao.jpg'
import elka from '@/images/profiles/elka-dunnette.jpeg'

const people = [
    {
      name: 'Michael Yu',
      role: 'Co-Founder / CEO',
      imageUrl: michael,
    },
    {
        name: 'Thomas Speciel',
        role: 'Co-Founder / CFO',
        imageUrl: thomas,
    },
    {
        name: 'Ryan Mark',
        role: 'Co-Founder / CTO',
        imageUrl: ryan,
    },
    {
        name: 'Rory Gao',
        role: 'Co-Founder / AI Researcher',
        imageUrl: rory,
    },
    {
        name: 'Elka Dunnette',
        role: 'Advisor',
        imageUrl: elka,
    },
  ]
  
  export default function Team() {
    return (
    <section
        id="team"
        aria-label="team"
      >
      <div className="py-24 bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-transparent sm:text-4xl bg-gradient-to-r from-orange-400 to-pink-400 opacity-80 bg-clip-text">
            Our Team
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to bringing education accessibility to everyone.
            </p>
          </div>
          <ul
            role="list"
            className="grid max-w-2xl grid-cols-2 mx-auto mt-20 text-center gap-y-16 gap-x-8 sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {people.map((person) => (
              <li key={person.name}>
              <Image
                className="w-24 h-24 mx-auto rounded-full"
                src={person.imageUrl}
                alt=""
                width={1024}
                height={1024}
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </section>
    )
  }