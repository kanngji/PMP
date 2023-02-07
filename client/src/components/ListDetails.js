import React from "react";

export default function ListDetails({ list }) {
  const handleClick = async () => {
    const response = await fetch("/api/lists/" + list._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      console.log("list deleted");
    }

    if (!response.ok) {
      console.log("delted fail");
    }
  };
  return (
    <div className="list-details">
      <h4>{list.title}</h4>
      <p>{list.content}</p>
      <p>{list.createdAt.substr(0, 10)}</p>
      <button onClick={handleClick}>delete</button>
    </div>
  );
}
