import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Hamburger from '../Icons/Hamburger';
import Link from 'next/link';
import classNames from 'classnames';
import { useActivePath } from '@/hooks/useActivePath';

export default function AppMenu({ menuData }) {
  const checkActivePath = useActivePath();

  return (
    <Menu
      as="div"
      className="justify-between items-center md:hidden ml-auto relative"
    >
      <Menu.Button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open main menu</span>
        <Hamburger className="h-5 w-5" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute border right-0 flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0 w-48">
          <div className="px-1 py-1">
            <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0 divide-y-2">
              {menuData.map(menuItem => {
                return (
                  <li key={menuItem.id}>
                    <Menu.Item>
                      <Link
                        href={menuItem.href}
                        className={classNames({
                          'block py-2 pr-4 pl-3 text-gray-700 border-gray-100 hover:bg-gray-50':
                            true,
                          'underline font-bold': checkActivePath(menuItem.href),
                        })}
                      >
                        {menuItem.title}
                      </Link>
                    </Menu.Item>
                  </li>
                );
              })}
            </ul>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
