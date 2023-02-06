import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Navbottom from "../components/Navbottom";
import ListDetails from "../components/ListDetails";
import ListForm from "../components/ListForm";

export default function TaskList() {
  const [lists, setLists] = useState(null);
  useEffect(() => {
    const fetchLists = async () => {
      const response = await fetch("/api/lists");
      const json = await response.json();
      if (response.ok) {
        setLists(json);
      }
    };
    fetchLists();
  }, [lists]);
  return (
    <div className="App">
      <Nav />
      <ListForm />
      <div className="lists">
        {lists &&
          lists.map((list) => <ListDetails key={list._id} list={list} />)}
      </div>
      <Navbottom />
    </div>
  );
}
