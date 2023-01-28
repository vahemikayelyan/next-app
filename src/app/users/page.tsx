import { UserModel } from "@/db/models/user";
import styles from "../page.module.css";

async function loadData() {
  const data = await fetch("http://localhost:3000/api/hello", {
    cache: "no-store",
  });
  return data.json();
}

export default async function Users() {
  const users: UserModel[] = await loadData();

  return (
    <div className={styles.main}>
      {users.map((user) => (
        <div className={styles.card} key={user.id}>
          <span>{user.email}</span>
        </div>
      ))}
    </div>
  );
}
