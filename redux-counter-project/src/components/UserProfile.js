import classes from './UserProfile.module.css';

export default function UserProfile() {
  const { profile } = classes;

  return (
    <main className={profile}>
      <h2>My User Profile</h2>
    </main>
  );
}
