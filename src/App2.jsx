import { useState } from "react";

function App() {
  // Step 1: Create an array of light states (all initially OFF)
  const [lights, setLights] = useState([
    { id: 1, isOn: false },
    { id: 2, isOn: false },
    { id: 3, isOn: false }
  ]);

  // Step 2: Create a function to toggle a specific light by ID
  const toggleLight = (id) => {
    setLights(prevLights =>
      prevLights.map(light =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px" }}>
      <h1>💡 Multiple Light Switches</h1>

      {/* Step 3: Map over each light and show a button */}
      {lights.map((light) => (
        <div key={light.id} style={{ marginBottom: "20px" }}>
          <p>Light {light.id}: <strong>{light.isOn ? "ON" : "OFF"}</strong></p>
          <button
            onClick={() => toggleLight(light.id)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: light.isOn ? "yellow" : "gray",
              color: "#333",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {light.isOn ? "Turn Off" : "Turn On"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
``
