import Headline from '@/components/Atoms/Headline';

export default function Page() {
  return (
    <section className="container">
      <Headline>Users</Headline>

      {/* <div className="grid grid-cols-2">
        {userData && <ProfileCard userData={userData} />}
      </div>

      {!userData && <p className="font-medium">nothing is here</p>} */}
    </section>
  );
}
