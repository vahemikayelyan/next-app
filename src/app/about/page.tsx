import { use } from "react";
import { Data } from "../../pages/api/hello";

async function loadData() {
  const data = await fetch("http://localhost:3000/api/hello");
  return data.json();
}

export default function About() {
  let data = use(loadData());

  return (
    <div>
      {data.map((item: Data) => (
        <div key={item.key}>{item.name}</div>
      ))}
    </div>
  );
}
