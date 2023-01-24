import { Data } from "@/pages/api/hello";
import styles from "../page.module.css";

async function loadData() {
  const data = await fetch("http://localhost:3000/api/hello", {
    cache: "no-store",
  });
  return data.json();
}

export default async function Users() {
  const users: Data[] = await loadData();

  return (
    <div className={styles.main}>
      {users.map((user: Data) => (
        <div className={styles.card} key={user.key}>
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
}
