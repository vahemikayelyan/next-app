import { Data } from "../../pages/api/hello";

async function loadData() {
  const data = await fetch("http://localhost:3000/api/hello", {
    cache: "no-store",
  });
  return data.json();
}

export default async function About() {
  let data: Data[] = await loadData();

  return (
    <>
      {data.map((item: Data) => (
        <div key={item.key}>{item.name}</div>
      ))}
    </>
  );
}
