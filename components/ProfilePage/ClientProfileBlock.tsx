'use client';

import ProfileCard from './ProfileCard';
import useSWR from 'swr';
import { USER_API_URL } from '@/helpers/consts';
import fetcher from '@/helpers/fetcher';
import LoadingDots from '../Atoms/LoadingDots';

export default function ClientProfileBlock() {
  const { data, error, isLoading } = useSWR(USER_API_URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <LoadingDots color="bg-teal-500" />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <ProfileCard userData={data.results[0]} />
      <ProfileCard userData={data.results[0]} />
    </div>
  );
}
