import Card from "../card/Card";
function Infosection() {
  return (
    <div className="row">
      <div className="col-6 col-sm-4 col-lg-2">
        <Card
          bt_classColor="text-green"
          percent="6%"
          value="43"
          label="New Tickets"
        />
      </div>
      <div className="col-6 col-sm-4 col-lg-2">
        <Card
          bt_classColor="text-red"
          percent="-3%"
          value="17"
          label="Closet Today"
        />
      </div>
      <div className="col-6 col-sm-4 col-lg-2">
        <Card
          bt_classColor="text-green"
          percent="9%"
          value="7"
          label="New Replies"
        />
      </div>
      <div className="col-6 col-sm-4 col-lg-2">
        <Card
          bt_classColor="text-green"
          percent="3%"
          value="27.3K"
          label="Followersy"
        />
      </div>
      <div className="col-6 col-sm-4 col-lg-2">
        <Card
          bt_classColor="text-red"
          percent="-2%"
          value="$95"
          label="Daily Earnings"
        />
      </div>
      <div className="col-6 col-sm-4 col-lg-2">
        <Card
          bt_classColor="text-red"
          percent="-1%"
          value="621"
          label="Products"
        />
      </div>
    </div>
  );
}

export default Infosection;
