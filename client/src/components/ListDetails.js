import React from "react";

export default function ListDetails({ list }) {
  return (
    <div className="list-details">
      <h4>{list.title}</h4>
      <p>{list.content}</p>
      <p>{list.createdAt.substr(0, 10)}</p>
    </div>
  );
}
