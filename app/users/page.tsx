import Headline from '@/components/Atoms/Headline';
import UsersTable from '@/components/UsersPage/UsersTable';
import userService from '@/services/userService';
import { notFound } from 'next/navigation';

const getUsersData = async () => {
  return userService.getAllUsers();
};

export default async function Page() {
  const usersData = await getUsersData();

  if (!usersData) {
    return notFound();
  }

  return (
    <section className="container">
      <Headline>Users</Headline>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow">
            <UsersTable data={usersData} />
          </div>
        </div>
      </div>
    </section>
  );
}
