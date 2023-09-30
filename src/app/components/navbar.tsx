'use client'
import Link from "next/link";
import { HiXMark } from 'react-icons/hi2';
import { AiOutlineAlignRight,AiFillBell } from 'react-icons/ai';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import { HiCog8Tooth,HiArrowRightOnRectangle } from 'react-icons/hi2';
import { BiLogOut } from 'react-icons/bi';

const navigation = [
  { name: 'Work', href: '/' },
  { name: 'Clients', href: '/' },
  { name: 'About', href: '/' },
  { name: 'Contact', href: '/' },

]
export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav>
      <Disclosure as="nav">
        {({ open }) => (
          <>
          {/**Desktop */}
          <div className="hidden md:block">
            <div className="flex justify-between w-full ">
              <div className="hidden lg:block"/>
              <ul className="flex gap-10 text-2xl text-slate-200">
                {navigation.map((item) => (
                  <Link  key={item.name} href={item.href} className="relative group hover:text-red-500  transition duration-500 ease-in-out">
                    <span className="absolute inset-x-0 bottom-0 left-0 h-1 origin-left bg-red-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          {/**Mobile */}
          <div className="flex md:hidden">
            <div className="flex justify-between w-full ">
              <h1>Portfolio</h1>
              <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                <HiXMark className="block h-6 w-6" aria-hidden="true" />
                ) : (
                <AiOutlineAlignRight className="block h-6 w-6" aria-hidden="true" />
                )}
            </Disclosure.Button>
            </div>
          </div>



          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-base font-medium
                                ${item.href === pathname ? ' text-white': ' text-black   '}`}
                    aria-current={ item.href === pathname ? 'page' : undefined}
                >
                    {item.name}
                </Disclosure.Button>
                ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <div className='flex items-center w-full sm:w-auto justify-center'>
                          <span className='h-8 w-8 rounded-full overflow-hidden bg-stone-100'>
                              <svg className='h-full w-full text-stone-300' fill='currentColor' viewBox='0 0 24 24'>
                                  <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                              </svg>
                          </span>
                      </div>
                    </div>
                    <div className="ml-3">
                        <div className="text-base font-medium leading-none text-gray-700 dark:text-white">Name</div>
                        <div className="text-sm font-medium leading-none text-gray-400">Email</div>
                    </div>
                    <button type="button" className="relative ml-auto flex-shrink-0 rounded-full bg-gray-300 p-1 text-gray-400">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <AiFillBell className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                    <Disclosure.Button as="a" href='/profile' className="rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-white hover:bg-gray-700 hover:text-white w-full flex gap-6">
                            <HiCog8Tooth className='h-5 w-5 text-stone-600 dark:text-stone-400' />
                            <span>Manage Account</span>
                    </Disclosure.Button>
                    <Disclosure.Button  className="rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 dark:text-white hover:text-white w-full flex gap-6">
                            <HiArrowRightOnRectangle className='h-5 w-5 text-stone-600 dark:text-stone-400' />
                            <span>Sign Out</span>
                    </Disclosure.Button>
                </div>
            </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </nav>
  )
}
//
//<HiXMark className="block h-6 w-6" aria-hidden="true" />
