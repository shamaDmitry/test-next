import { UserTableHead } from '@/types/UserTableHead';
import { v4 as uuidv4 } from 'uuid';

const headData: UserTableHead[] = [
  { id: uuidv4(), name: 'Name' },
  { id: uuidv4(), name: 'website' },
  { id: uuidv4(), name: 'address' },
  { id: uuidv4(), name: 'Status' },
];

const UserTableHead = () => {
  return (
    <thead className="bg-gray-100">
      <tr>
        {headData.map(headItem => {
          return (
            <th
              key={headItem.id}
              scope="col"
              className="p-4 text-xs font-medium text-left text-gray-500 uppercase"
            >
              {headItem.name}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default UserTableHead;
