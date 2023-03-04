import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is an audio visual learning assistant and how does it work?',
      answer:
        'An audio visual learning assistant is a software tool that helps students learn through interactive multimedia presentations, such as videos, animations, and images. Our tool is designed to supplement classroom instruction and provide students with a more engaging and interactive learning experience.',
    },
    {
      question: 'What kind of content does your learning assistant offer?',
      answer: 'Our learning assistant offers a variety of multimedia content across a range of subjects, including math, science, history, and English. We partner with leading educational content providers to ensure that our content is up-to-date, accurate, and aligned with common core standards.',
    },
    {
      question: 's there a free version of your learning assistant?',
      answer:
        'Yes, we offer a free version of our learning assistant with limited capabilities. The free version includes access to a subset of our content library, but does not include features such as progress tracking, personalized recommendations, or advanced analytics.',
    },
  ],
  [
    {
      question: 'How do I upgrade to a paid version of your learning assistant?',
      answer:
        'To upgrade to a paid version of our learning assistant, simply click on the "upgrade" button on our website and follow the instructions to select a plan and enter your payment information. Our paid plans offer additional features such as unlimited access to our content library, progress tracking, and personalized recommendations.',
    },
    {
      question:
        'Can I use your learning assistant with my existing curriculum?',
      answer:
        'Absolutely! Our learning assistant is designed to supplement any existing curriculum and can be used alongside textbooks, workbooks, and other instructional materials. Simply select the topics you want to reinforce or review, and our tool will provide multimedia content to help reinforce those concepts.',
    },
    {
      question:
        'How do I track student progress using your learning assistant?',
      answer:
        'Our paid plans include a dashboard that allows teachers to track student progress and performance on individual topics and assessments. This feature enables teachers to identify areas where students may be struggling and provide additional support as needed.',
    },
  ],
  [
    {
      question: 'What kind of support do you offer for teachers and students?',
      answer:
        'We offer a variety of support options, including email and phone support, online tutorials and resources, and a community forum where teachers can share best practices and tips for using our tool effectively. Our support team is available to help with any questions or issues you may encounter while using our tool.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative py-20 overflow-hidden bg-slate-50 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2
            id="faq-title"
            className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg leading-7 font-display text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
