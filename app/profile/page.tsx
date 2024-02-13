import Headline from '@/components/Atoms/Headline';
import ClientProfileBlock from '@/components/ProfilePage/ClientProfileBlock';
import ProfileCard from '@/components/ProfilePage/ProfileCard';
import userService from '@/services/userService';

const getUserData = async () => {
  return userService.getInfo();
};

export default async function Page() {
  const [userData] = await getUserData();
  const [anotherUserData] = await getUserData();

  return (
    <section className="container">
      <Headline>Profile</Headline>

      <p className="mb-4 font-bold text-lg">
        Server components - api call cached
      </p>

      {!userData && <p className="font-medium">nothing is here</p>}

      {userData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <ProfileCard profileData={userData} />
          <ProfileCard profileData={anotherUserData} />
        </div>
      )}

      <p className="mb-4 font-bold text-lg">Client component with swr</p>

      <ClientProfileBlock />
    </section>
  );
}
