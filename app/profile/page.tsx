import Headline from '@/components/Atoms/Headline';
import ProfileCard from '@/components/ProfilePage/ProfileCard';
import userService from '@/services/userService';

const getUserData = async () => {
  return userService.getInfo().then(user => {
    return user[0];
  });
};

export default async function Page() {
  const userData = await getUserData();

  return (
    <section className="container">
      <Headline className="">Profile</Headline>

      <div className="grid grid-cols-2">
        {userData && <ProfileCard userData={userData} />}
      </div>

      {!userData && <p className="font-medium">nothing is here</p>}
    </section>
  );
}
