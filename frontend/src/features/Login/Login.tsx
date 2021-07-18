import React, { useState, ChangeEvent, FormEvent } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import { loginUser } from '../../utils/api';

export const Login = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState<LoginInput>({
    username: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await loginUser(credentials);
      toast.success('Successfully logged in, redirecting...');
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch {
      toast.error('Invalid credentials!');
    }
  };

  return (
    <div className="max-w-xl w-full">
      <Toaster />
      <div className="rounded-md px-5 flex gap-5 flex-col">
        <Link passHref href="/">
          <img
            alt="Snippy logo"
            className="cursor-pointer w-3/4 mx-auto"
            src="/assets/logo-black.svg"
          />
        </Link>
        <div className="text-2xl text-center pt-3 text-gray-700">
          Sign in to your account!
        </div>
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
          <input
            name="username"
            type="text"
            required
            className="rounded-lg border-transparent flex-1 appearance-none bg-white text-gray-800 w-full py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Username"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            required
            className="rounded-lg border-transparent flex-1 appearance-none bg-white text-gray-800 w-full py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Password"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </form>

        <div className="text-center">
          Don&apos;t have an account?
          <Link href="/register">
            <a className="ml-2 text-blue-700 hover:text-blue-600">Sign Up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
