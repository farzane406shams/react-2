
import { useState, useEffect } from "react";
import { getUsers } from "../../services/config";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();

        console.log("Users from API:", data);

        setUsers(data);
      } catch (err) {
        console.error(err);
        setError("دریافت کاربران ناموفق بود.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Please wait , loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
<div className="users-container">
  <h1>Users List</h1>


  <div className="users-list">
    {users. slice (0, 6).map((user) => (
      
      <div key={user.id} className="user-card">
      <img src="./assets/photo7.png"   alt="" />
        <h3>
          {user.name.firstname} {user.name.lastname} 

        </h3>

        <p>ID: {user.id}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        
      </div>
    ))}
  </div>
</div>
  );
}

export default Users;