function Card({ bt_classColor, percent, value, label }) {
  return (
    <>
      <a className="card card-hover-shadow h-100" href="#">
        <div className="card-body">
          <h6 className="card-subtitle">{label}</h6>

          <div className="row align-items-center gx-2 mb-1">
            <div className="col-6">
              <span className="card-title h2">{value}</span>
            </div>

            <div className="col-6"></div>
          </div>

          <span class="badge badge-soft-success">
            <i class="tio-trending-up"></i> {percent}
          </span>
          <span class="text-body font-size-sm ml-1">from 70,104</span>
        </div>
      </a>
    </>
  );
}

export default Card;
