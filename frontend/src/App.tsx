import React from "react";
import Input from "./components/input";

function App() {
  const [username, setUsername] = React.useState("");
  const [isChecked, setChecked] = React.useState(false);

  return (
    <>
      <h1>app</h1>
      <div style={{ width: "50vw", border: "1px solid grey" }}>
        <Input
          title="Username-lg-row"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          size="lg"
          layout="row"
        />
        <Input
          title="Username-sm-row"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          size="sm"
          layout="row"
        />
        <Input
          title="Username-basic-row"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          layout="row"
        />
        <Input
          title="Username-lg"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          size="lg"
        />

        <Input
          title="Username-sm"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          size="sm"
        />

        <Input
          title="Username-basic"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          title="Remember me-lg"
          type="checkbox"
          value={username}
          checked={isChecked}
          onChange={(e) => setChecked(e.target.checked)}
          layout="row"
          size="lg"
        />
        <Input
          title="Remember me-basic"
          type="checkbox"
          value={username}
          checked={isChecked}
          onChange={(e) => setChecked(e.target.checked)}
          layout="row"
        />
        <Input
          title="Remember me-sm"
          type="checkbox"
          value={username}
          checked={isChecked}
          onChange={(e) => {
            setChecked(e.target.checked);
            setUsername("777");
          }}
          layout="row"
          size="sm"
        />
      </div>
      <h2>value:{username}</h2>
    </>
  );
}

export default App;
