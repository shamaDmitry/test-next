'use client';

import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import React from 'react';
import AppMenu from './Menu';
import { useActivePath } from '@/hooks/useActivePath';
import classNames from 'classnames';
import { IMenu } from '@/types/IMenu';

const menu: IMenu[] = [
  { id: uuidv4(), title: 'Home', href: '/' },
  { id: uuidv4(), title: 'Users', href: '/users' },
  { id: uuidv4(), title: 'Profile', href: '/profile' },
];

export default function Header() {
  const checkActivePath = useActivePath();

  return (
    <header className="mb-8">
      <nav className="bg-white border-gray-200 py-2.5">
        <div className="flex items-center px-4 mx-auto max-w-screen-xl">
          <Link
            href="/"
            className="flex bg-slate-200 w-40 h-10 items-center justify-center px-4"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Logo
            </span>
          </Link>

          <div className="mx-auto hidden justify-between items-center md:flex">
            <ul className="flex font-medium flex-row space-x-8">
              {menu.map(menuItem => {
                return (
                  <li key={menuItem.id}>
                    <Link
                      href={menuItem.href}
                      className={classNames({
                        'block py-2 pr-4 pl-3 text-gray-700': true,
                        'underline font-bold': checkActivePath(menuItem.href),
                      })}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="ml-auto items-center justify-center flex space-x-4">
            <AppMenu menuData={menu} />
          </div>
        </div>
      </nav>
    </header>
  );
}
