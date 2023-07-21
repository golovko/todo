import Image from "next/image";
import Items from "./components/Items";

export default function Home() {
  return (
    <div >
        <div className="h1">
          {" "}
          <h1 className="head_text text-center">
            <span className="blue_gradient">ToDo it!</span>
          </h1>
        </div>
        <Items />
    </div>
  );
}
