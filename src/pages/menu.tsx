import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="grid place-items-center h-screen">
      <Link to={"/main"}>
        <button className="menu-bttuon w-[70vw] max-w-xl">시작하기</button>
      </Link>
    </div>
  );
}
export default Menu;
