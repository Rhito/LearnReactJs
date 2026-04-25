import { Link, useSearchParams } from "react-router-dom";

export default function NavWithParam() {
  const [searchParam, setSearchParam] = useSearchParams();
  const handleClick = () => {
    setSearchParam({ q: "abc" });
  };
  return (
    <nav>
      <button onClick={handleClick}>click to change param</button>
      <Link to="/404">
        Link to not found with param: {searchParam.get("q")}
      </Link>
    </nav>
  );
}
