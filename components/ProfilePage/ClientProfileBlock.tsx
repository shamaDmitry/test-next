'use client';

import ProfileCard from './ProfileCard';
import LoadingDots from '../Atoms/LoadingDots';
import { useClients } from '@/hooks/useClients';

export default function ClientProfileBlock() {
  const { data, error, isLoading } = useClients();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <LoadingDots color="bg-teal-500" />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <ProfileCard profileData={data.results[0]} />
      <ProfileCard profileData={data.results[0]} />
    </div>
  );
}
