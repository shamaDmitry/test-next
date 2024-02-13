import { IUser } from '@/types/User';
import UserTableRow from './UserTableRow';
import UserTableHead from './UserTableHead';

interface IUsersTableProps {
  data: IUser[];
}

export default function UsersTable({ data }: IUsersTableProps) {
  if (!data.length) return <p>Nothing is here</p>;

  return (
    <table className="min-w-full divide-y divide-gray-200 table-fixed">
      <UserTableHead />

      <tbody className="bg-white divide-y divide-gray-200">
        {data.map(user => {
          return <UserTableRow key={user.id} user={user} />;
        })}
      </tbody>
    </table>
  );
}
