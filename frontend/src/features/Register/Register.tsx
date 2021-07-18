import React, { useState, ChangeEvent, FormEvent } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import { registerUser } from '../../utils/api';
import { getAvatarId } from '../../utils/helper';

export const Register = () => {
  const router = useRouter();
  const [userDetail, setUserDetail] = useState<RegisterInput>({
    username: '',
    avatarUrl: '',
    password: '',
    name: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserDetail({
      ...userDetail,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const avatarUrl = getAvatarId();
    const payload = { ...userDetail, avatarUrl };

    try {
      await registerUser(payload);
      toast.success('Sucessfully created user!');
      setTimeout(() => {
        router.push('/login');
      }, 1500);
    } catch {
      alert('An unexpected error occured!');
    }
  };

  return (
    <div className="max-w-xl w-full">
      <Toaster />

      <div className="rounded-md px-5 flex gap-5 flex-col">
        <Link href="/">
          <img
            className="cursor-pointer w-3/4 mx-auto"
            src="/assets/logo-black.svg"
          />
        </Link>
        <div className="text-2xl text-center pt-3 text-gray-700">
          Create your account!
        </div>
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
          <input
            name="name"
            type="text"
            className="rounded-lg border-transparent flex-1 appearance-none bg-white text-gray-800 w-full py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Name"
            onChange={handleChange}
            required
          />

          <input
            name="username"
            type="text"
            className="rounded-lg border-transparent flex-1 appearance-none bg-white text-gray-800 w-full py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Username"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            className="rounded-lg border-transparent flex-1 appearance-none bg-white text-gray-800 w-full py-2 px-4 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          Already have an account?
          <Link href="/login">
            <a className="ml-2 text-blue-700 hover:text-blue-600">Sign In</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
