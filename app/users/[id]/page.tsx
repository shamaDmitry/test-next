import Headline from '@/components/Atoms/Headline';
import userService from '@/services/userService';
import { notFound } from 'next/navigation';

const getUserData = (id: string) => userService.getUser(id);

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getUserData(params.id);
  
  if (!data) return notFound;
  
  return (
    <div className="container">
      <Headline>User {data.name}</Headline>

      <ul>
        <li className="space-x-2">
          <span className="font-bold">Username:</span>
          <span>{data.username}</span>
        </li>

        <li className="space-x-2">
          <span className="font-bold">Email:</span>
          <span>{data.email}</span>
        </li>

        <li className="space-x-2">
          <span className="font-bold">Phone:</span>
          <span>{data.phone}</span>
        </li>

        <li className="space-x-2">
          <span className="font-bold">Address:</span>
          <span>{data.address.city}</span>
          <span>{data.address.street}</span>
          <span>{data.address.suite}</span>
        </li>
      </ul>
    </div>
  );
}
