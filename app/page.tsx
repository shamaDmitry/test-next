import Headline from '@/components/Atoms/Headline';
import Image from 'next/image';

export default function Page() {
  return (
    <section className="container text-center">
      <Headline className="">
        Simple web application with Next.js (Typescript) + Tailwind CSS
      </Headline>

      <div className="flex-col flex items-center justify-center">
        <ul className="text-left list-disc list-inside marker:text-cyan-500">
          <li>next.js</li>
          <li>tailwind</li>
          <li>headlessui/react</li>
          <li>swr</li>
        </ul>
      </div>
    </section>
  );
}
