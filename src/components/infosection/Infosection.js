import Card from "../card/Card";
function Infosection({ pendingcount, concludedcount }) {
  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-lg-4">
        <Card
          bt_classColor="text-green"
          percent="3%"
          value={pendingcount}
          label="Declarações pendentes"
        />
      </div>
      <div className="col-12 col-sm-12 col-lg-4">
        <Card
          bt_classColor="text-red"
          percent="-2%"
          value={concludedcount}
          label="Declarações concluídas"
        />
      </div>
      <div className="col-12 col-sm-12 col-lg-4">
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
