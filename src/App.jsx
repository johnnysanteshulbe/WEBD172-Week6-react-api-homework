import React from "react";
import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  const filteredUsers = users.filter(function (user) {
    const searchLower = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      user.phone.toLowerCase().includes(searchLower)
    );
  });

  return (
    <main className="container">
      <h1>React Users API Homework</h1>
      <p>Explore users loaded from public API.</p>

      <label htmlFor="search">Search Users:</label>
      <input
        type="text"
        id="search"
        value={search}
        onChange={function (event) {
          setSearch(event.target.value);
        }}
        placeholder="Search by name, email, or phone"
      />

      <section className="user-list" aria-label="Users">
        {filteredUsers.map(function (user) {
          return (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
