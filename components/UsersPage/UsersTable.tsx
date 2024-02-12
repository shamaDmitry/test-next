import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function UsersTable({ data }) {
  return (
    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
      <thead className="bg-gray-100 dark:bg-gray-700">
        <tr>
          <th
            scope="col"
            className="p-4 text-xs font-medium text-left text-gray-500 uppercase"
          >
            Name
          </th>
          <th
            scope="col"
            className="p-4 text-xs font-medium text-left text-gray-500 uppercase"
          >
            website
          </th>
          <th
            scope="col"
            className="p-4 text-xs font-medium text-left text-gray-500 uppercase"
          >
            address
          </th>
          <th
            scope="col"
            className="p-4 text-xs font-medium text-left text-gray-500 uppercase"
          >
            Status
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map(user => {
          return (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap lg:mr-0">
                <Image
                  className="w-10 h-10 rounded-full"
                  src="https://placehold.jp/150x150.png"
                  alt="Neil Sims avatar"
                  width={100}
                  height={100}
                />
                <div className="text-sm font-normal text-gray-500">
                  <Link
                    href={`/users/${user.id}`}
                    className="text-base font-semibold  text-teal-500 hover:text-teal-700 hover:underline"
                  >
                    {user.name}
                  </Link>
                  <div className="text-sm font-normal text-gray-500">
                    {user.email}
                  </div>
                </div>
              </td>
              <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap">
                <a
                  href={`https://${user.website}`}
                  className="text-teal-500 hover:text-teal-700 hover:underline"
                  target="_blank"
                >
                  {user.website}
                </a>
              </td>
              <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap">
                {user.address.city}, {user.address.street}, {user.address.suite}
              </td>
              <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap">
                <div className="flex items-center">
                  <div
                    className={classNames({
                      'h-2.5 w-2.5 rounded-full mr-2': true,
                      'bg-green-400': user.id % 2 === 0,
                      'bg-red-400': user.id % 2 !== 0,
                    })}
                  />

                  {user.id % 2 === 0 ? 'Active' : 'Inactive'}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
