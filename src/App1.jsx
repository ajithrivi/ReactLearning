import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  const user = {
    name: "John Doe",
    age: 28,
  };

  const skills = ["React", "JSX", "Umbraco", "Webflow", "Python"];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Hello, {user.name}!</h1>
      <p>Age: {user.age}</p>

      <h2>Skills List:</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Like this page?</h2>
      <button 
        onClick={() => setLikes(likes + 1)} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        ❤️ Like ({likes})
      </button>

      <div style={{ marginTop: "20px" }}>
        {likes > 5 ? (
          <p>Wow, thanks for all the likes! 🎉</p>
        ) : (
          <p>Give me some ❤️ by clicking the button!</p>
        )}
      </div>
    </div>
  );
}

export default App;
