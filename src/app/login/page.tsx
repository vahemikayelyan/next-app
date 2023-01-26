export default function Login() {
  return (
    <main>
      <form action="/api/form" method="post">
        <label htmlFor="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label htmlFor="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
