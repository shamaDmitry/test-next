import Headline from '@/components/Atoms/Headline';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="container">
      <section className="flex flex-col justify-center items-center">
        <Headline className="text-red-500">Not Found</Headline>
        <p className="text-lg">
          Go back{' '}
          <Link
            href="/"
            className="font-bold capitalize before:transition-all relative before:w-0 before:left-0 before:bottom-0 before:absolute hover:before:w-full before:h-[2px] py-1 before:bg-red-500"
          >
            home
          </Link>
        </p>
      </section>
    </div>
  );
}
