import classes from './Auth.module.css';

export default function Auth() {
  const { auth, control } = classes;

  return (
    <main className={auth}>
      <section>
        <form>
          <div className={control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
}
