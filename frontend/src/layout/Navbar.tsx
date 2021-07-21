import { Fragment, FunctionComponent } from 'react';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logo from '../../public/assets/logo.svg';
import { logoutUser } from '../utils/api';

type NavbarProp = {
  user?: User;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Navbar: FunctionComponent<NavbarProp> = ({ user }) => {
  const router = useRouter();

  const signout = async () => {
    await logoutUser();
    router.push('/');
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <>
        <div className="max-w-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <a>
                      <Image src={logo} width={120} alt="Snippy logo" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex w-96 space-x-4">
                  <form action="/search" className="w-full ">
                    <input
                      name="q"
                      placeholder="Search gists and press enter..."
                      className="w-full bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    />
                  </form>
                </div>
              </div>
            </div>

            {user ? (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link href="/new">
                  <button
                    type="button"
                    className="px-6 py-1 text-sm text-white focus:outline-none shadow font-bold transition ease-in duration-200 rounded hover:bg-gray-900"
                  >
                    <PlusIcon className="w-4 mr-1 inline" />
                    New Gist
                  </button>
                </Link>

                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="bg-gray-300 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={`/assets/avatars/${user.avatarUrl}.svg`}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <Link href={`/${user.username}`}>
                                <a
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Your Gists
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="button"
                                onClick={signout}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'w-full text-left block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            ) : (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link href="/login">
                  <button
                    type="button"
                    className="px-6 py-1 text-sm text-white focus:outline-none shadow font-bold transition ease-in duration-200 rounded hover:bg-gray-900"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export { Navbar };
