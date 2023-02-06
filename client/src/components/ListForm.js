import React, { useState } from "react";

export default function ListForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const list = { title, content };
    console.log(list);

    const response = await fetch("/api/lists", {
      method: "POST",
      body: JSON.stringify(list),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(response);
    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setContent("");
      setError(null);
      console.log("new list added", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New List</h3>
      <label>Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Content:</label>
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button>Add List</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
