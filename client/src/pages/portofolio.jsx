import { useSelector } from "react-redux";
import Card from "../components/card";

export default function portofolio() {
  const data = useSelector((state) => {
    // console.log("masuk");
    return state.postReducer.item;
  });
  return (
    <>
      <div className="grid-cols-3 grid gap-1" style={{ marginTop: "5vw" }}>
        {data.map((el) => {
          return <Card data={el} key={el.id} />;
        })}
      </div>
    </>
  );
}
