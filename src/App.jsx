import { useState } from "react";

function App() {
  const [openId, setOpenIdx] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "How to Build Your First React App",
      content: "This post will guide you through creating your first React app step-by-step.",
    },
    {
      id: 2,
      title: "Understanding JSX Basics",
      content: "JSX makes writing UI components in React easier and more readable.",
    },
    {
      id: 3,
      title: "Tips for Learning React Faster",
      content: "Practice small projects, focus on components, and master props and state early!",
    },
  ];

  const toggleDetails = (id) => {
    if (openId === id) {
      setOpenIdx(null); // If the same post is clicked, close it
    } else {
      setOpenIdx(id);   // Otherwise open the clicked post
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>📚 Blog Postsss</h1>

      {blogPosts.map((postx) => (
        <div key={postx.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <h2>{postx.title}</h2>
          <button 
            onClick={() => toggleDetails(postx.id)}
            style={{
              padding: "8px 16px",
              marginBottom: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {openId === postx.id ? "Hide Details" : "Show Details to me"}
          </button>

          {openId === postx.id && (
            <p style={{ marginTop: "10px" }}>{postx.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
