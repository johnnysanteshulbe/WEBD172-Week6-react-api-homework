function UserCard({ name, email, phone }) {
  return (
    <article className="user-card">
      <h2>{name}</h2>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
    </article>
  );
}

export default UserCard;
