import "./NavBarSection.css";
import { useState } from "react";
import { useNavigate, Link, createSearchParams } from "react-router-dom";
import { Cart3, Globe, List, Search } from "react-bootstrap-icons";

function NavBarSection() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li className="menuButton">
          <button>
            <List />
          </button>
        </li>
        <li className="logo">
          <Link to="/">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Udemy logo"
            />
          </Link>
        </li>
        <li className="text">
          <button>Categories</button>
        </li>
        <li className="searchBar">
          <form action="">
            <button
              type="button"
              onClick={() => {
                navigate({
                  pathname: "/",
                  search: `query=${searchValue}`,
                });
              }}
              className="searchButton1"
            >
              <Search />
            </button>
            <input
              type="text"
              placeholder="Search for anything"
              className="searchBarInput"
              onChange={(e) => {
                e.preventDefault();
                setSearchValue(e.target.value);
              }}
            />
          </form>
        </li>

        <li className="searchButton2">
          <button>
            <Search />
          </button>
        </li>
        <li className="text">
          <button>
            <span>Udemy Business</span>
          </button>
        </li>
        <li className="text">
          <button>Teach on Udemy</button>
        </li>
        <li className="cartButton">
          <button>
            <Cart3 />
          </button>
        </li>
        <li className="loginButton">
          <button>Log in</button>
        </li>
        <li className="signupButton">
          <button>Sign up</button>
        </li>
        <li className="globeButton">
          <button>
            <Globe />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarSection;
