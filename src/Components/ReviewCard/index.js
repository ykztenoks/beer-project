export function ReviewCard({ username, score, comments }) {
  <>
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{username}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{score}</h6>
        <p className="card-text">{comments}</p>
      </div>
    </div>
  </>;
}
