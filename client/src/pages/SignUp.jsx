import React from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link
            to="/"
            className='text-3xl font-bold dark:text-grey'>
            <span className='px-2 py-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-300 rounded-lg text-white'>
              Student's
            </span>
              Blog
          </Link>
          <p className='text-l font-semibold mt-5 ml-1'>Write, Read, Connect: Sign Up and Get Started</p>
        </div>

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@gmail.com'
                id='email'
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
              />
            </div>
            <Button gradientDuoTone='pinkToOrange' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
