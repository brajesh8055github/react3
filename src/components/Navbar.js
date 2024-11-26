// import React from 'react'
import logo from '../images/shop.png'
import like from '../images/like.png'
import user from '../images/google.png'
import cart from '../images/free-shipping.png'

// const Navbar = () => {
//     return (
//         <div className='navbar' style={{padding:"0 20px"}}>
//              <div className='nav-left'>
//                 <div>
//                     <h1 style={{color:"white"}}>E Shop</h1>
//                 </div>
//                 <p><a href='/'>Home</a></p>
//                 <p><a href='#product'>Product</a></p>
//                 <p><a href='#category'>Category</a></p>
//                 <p><a href='#about'>About Us</a></p>
//                 <p><a href='#contact'>Contact Us</a></p>
//             </div>
//             <div className='nav-right'>
//                 <img src={cart} alt='img'></img>
//                 <img src={like} alt='img'></img>
//                 <img src={user} alt='img'></img>
//             </div>
//         </div>
//     )
// }

// export default Navbar

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'E Shop', href: '/node_modules', current: true },
  { name: 'Home', href: '/', current: false },
  { name: 'Product', href: '#product', current: false },
  { name: 'Category', href: '#category', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Contact Us', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    // <Disclosure as="nav" className="bg-gray-800">
    <Disclosure as="nav" className="bg-yellow-400">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src={logo}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 text-black">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button> */}

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
              {/* <MenuButton className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"> */}
               <MenuButton className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                     src={cart}
                    className="size-8 rounded-full"
                  />
                </MenuButton>
                <MenuButton className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                     src={like}
                    className="size-8 rounded-full"
                  />
                </MenuButton>
                <MenuButton className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 px-2">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                     src={user}
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
