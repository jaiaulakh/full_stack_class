import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    msg: ""
  });

  const [out, setOut] = useState(null);

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setOut(data);
  };

  return (
    <div>
      <h2>Form</h2>

      <form onSubmit={submit}>
        <input
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={change}
        />
        <br /><br />

        <input
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={change}
        />
        <br /><br />

        <textarea
          name="msg"
          placeholder="Message"
          value={data.msg}
          onChange={change}
        />
        <br /><br />

        <button>Submit</button>
      </form>

      {out && (
        <div>
          <h3>Output:</h3>
          <p>Name: {out.name}</p>
          <p>Email: {out.email}</p>
          <p>Message: {out.msg}</p>
        </div>
      )}
    </div>
  );
}

export default App;