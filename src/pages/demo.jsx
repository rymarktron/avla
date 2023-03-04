import Head from 'next/head'
import Link from 'next/link'

import { DemoLayout } from '@/components/DemoLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Demo() {
  return (
    <>
      <Head>
        <title>Demo</title>
      </Head>
      <DemoLayout>
        <div className="flex flex-col mt-8">
          <Link href="/" aria-label="Home">
            <Logo className="w-auto h-10" />
          </Link>
          <div className="flex mt-4 -my-1 text-sm font-medium gap-x-6">
            <p class="text-slate-800">Your Personal <span class="text-purple-800">Visual</span> <span class="text-pink-400">Learning</span> <span class="text-blue-600">Learning</span> <span class="text-orange-600">Assistant</span></p>
          </div>
          
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">
              Welcome. Enter a prompt and we will generate some questions.
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Already registered?{' '}
              <Link
                href="/login"
                className="font-medium text-orange-400 hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p>
          </div>
        </div>
        <form
          action="#"
          className="grid grid-cols-1 mt-10 gap-y-8 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <SelectField
            className="col-span-full"
            label="How did you hear about us?"
            id="referral_source"
            name="referral_source"
          >
            <option>AltaVista search</option>
            <option>Super Bowl commercial</option>
            <option>Our route 34 city bus ad</option>
            <option>The “Never Use This” podcast</option>
          </SelectField>
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="orange"
              className="w-full"
            >
              <span>
                Sign up <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </DemoLayout>
    </>
  )
}
