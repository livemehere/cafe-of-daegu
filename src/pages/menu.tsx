import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="grid place-items-center h-screen">
      <Link to={"/cafe-of-daegu/main"}>
        <button className="menu-bttuon w-[70vw] max-w-xl">μμνκΈ°</button>
      </Link>
    </div>
  );
}
export default Menu;
