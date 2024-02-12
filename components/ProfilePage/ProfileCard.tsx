import Image from 'next/image';
import React from 'react';
import Pin from '../Icons/Pin';
import Bag from '../Icons/Bag';
import Link from 'next/link';
import classNames from 'classnames';

export default function ProfileCard({ userData }) {
  return (
    <div className="mb-4 bg-white rounded-lg shadow p-6 xl:p-8">
      <div className="sm:flex xl:block sm:space-x-4 xl:space-x-0">
        <Image
          width={100}
          height={100}
          className="mb-2 w-20 h-20 rounded-lg"
          src={userData.picture.large}
          alt="Jese portrait"
        />
        <div>
          <h2
            className={classNames({
              'text-xl font-bold space-x-1': true,
              'text-cyan-500': userData.gender === 'male',
              'text-red-300': userData.gender === 'female',
            })}
          >
            <span>{userData.name.title}</span>
            <span>{userData.name.first}</span>
            <span>{userData.name.last}</span>
          </h2>

          <ul className="mt-2 space-y-1">
            <li className="flex items-center text-sm font-normal">
              <Bag className="mr-2 w-4 h-4 text-gray-900" />
              <span className="font-bold">@{userData.login.username}</span>
            </li>

            <li className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              <Pin className="mr-2 w-4 h-4 text-gray-900" />
              {userData.location.city},{userData.location.country}
            </li>
          </ul>
        </div>
      </div>

      <div className="sm:flex xl:block xl:space-y-4">
        <div className="sm:flex-1">
          <address className="text-sm not-italic font-normal text-gray-500 dark:text-gray-400">
            <div className="mt-4">Email address</div>
            <Link
              className="text-sm font-medium text-gray-900 dark:text-white"
              href="mailto:webmaster@flowbite.com"
            >
              {userData.email}
            </Link>
            <div className="mt-4">Home address</div>
            <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {userData.location.street.number}, {userData.location.street.name}{' '}
              <br />
              {userData.location.country}
            </div>
            <div className="mt-4">Phone number</div>
            <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {userData.phone} / {userData.cell}
            </div>
          </address>
        </div>
      </div>
    </div>
  );
}
