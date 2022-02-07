function Card({ bt_classColor, percent, value, label }) {
  return (
    <div className="card">
      <div className="card-body p-3 text-center">
        <div className={`text-right ${bt_classColor}`}>
          {percent}
          <i className="fa fa-chevron-up"></i>
        </div>
        <div className="h1 m-0">{value}</div>
        <div className="text-muted mb-4">{label}</div>
      </div>
    </div>
  );
}

export default Card;
