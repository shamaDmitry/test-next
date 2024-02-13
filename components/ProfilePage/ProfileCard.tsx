import Image from 'next/image';
import React from 'react';
import Pin from '../Icons/Pin';
import Bag from '../Icons/Bag';
import Link from 'next/link';
import classNames from 'classnames';
import { IProfile } from '@/types/IProfile';

interface IProfileCardProps {
  profileData: IProfile;
}

export default function ProfileCard({ profileData }: IProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 xl:p-8">
      <div className="sm:flex xl:block sm:space-x-4 xl:space-x-0">
        <Image
          width={100}
          height={100}
          className="mb-2 w-20 h-20 rounded-lg"
          src={profileData.picture.large}
          alt={profileData.name.first}
        />
        <div>
          <h2
            className={classNames({
              'text-xl font-bold space-x-1': true,
              'text-cyan-500': profileData.gender === 'male',
              'text-red-300': profileData.gender === 'female',
            })}
          >
            <span>{profileData.name.title}</span>
            <span>{profileData.name.first}</span>
            <span>{profileData.name.last}</span>
          </h2>

          <ul className="mt-2 space-y-1">
            <li className="flex items-center text-sm font-normal">
              <Bag className="mr-2 w-4 h-4 text-gray-900" />
              <span className="font-bold">@{profileData.login.username}</span>
            </li>

            <li className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              <Pin className="mr-2 w-4 h-4 text-gray-900" />
              {profileData.location.city},{profileData.location.country}
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
              {profileData.email}
            </Link>
            <div className="mt-4">Home address</div>
            <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {profileData.location.street.number},{' '}
              {profileData.location.street.name} <br />
              {profileData.location.country}
            </div>
            <div className="mt-4">Phone number</div>
            <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {profileData.phone} / {profileData.cell}
            </div>
          </address>
        </div>
      </div>
    </div>
  );
}
