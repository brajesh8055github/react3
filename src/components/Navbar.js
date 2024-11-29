import React from 'react';
import logo from '../images/shop.png';
import { IoCart } from "react-icons/io5";
import { FaHeart, FaUser } from "react-icons/fa";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Product', href: '#product', current: false },
  { name: 'Category', href: '#category', current: false, isDropdown: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Contact Us', href: '#contact', current: false },
];

const categories = [
  'T-Shirts', 'Shoes', 'Hoodies', 'Shirt', 'Pants', 
  'Laptop', 'Mobile', 'Cameras', 'Headphone', 
  'iPad & Tablets',
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-yellow-400">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img alt="Your Company" src={logo} className="h-8 w-auto" />
              <h1 className="px-4 text-center text-3xl font-bold text-white">E Shop</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 text-black">
                {navigation.map((item) => (
                  item.isDropdown ? (
                    <Menu as="div" key={item.name} className="relative">
                      <MenuButton className="text-black hover:text-white focus:outline-none px-3 py-2 text-sm">
                        {item.name}
                      </MenuButton>
                      <Menu.Items className="absolute mt-2 w-48 bg-white shadow-lg rounded-md">
                        {categories.map((category) => (
                          <Menu.Item key={category}>
                            {({ active }) => (
                              <a
                                href={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                                className={classNames(
                                  active ? 'bg-yellow-500 text-white' : 'text-black',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                {category}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Menu>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium hover:text-white"
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Icons */}
            <IoCart className="mx-2 text-black hover:text-white" size={20} />
            <FaHeart className="mx-2 text-black hover:text-white" size={20} />
            <FaUser className="mx-2 text-black hover:text-white" size={20} />
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
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-sm font-medium', 
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
