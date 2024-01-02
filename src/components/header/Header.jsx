// eslint-disable-next-line no-unused-vars
import "./style.scss";
import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";
// import ContentWrapper from "../Components/contentWrapper/ContentWrapper";

import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrolly, setLastScrolly] = useState(0);
  const [mobileManu, setMobileMenu] = useState(false);
  const [quary, setQuary] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])


  const controleNavbar=()=>{
    // console.log(window.scrollY)
    if (window.scrollY > 200){
        if (window.scrollY > lastScrolly && !mobileManu){
            setShow("hide")
        }else{
            setShow("show")
        }
    } else{
        setShow("top")
    }
   
    setLastScrolly(window.scrollY)
  };


  useEffect(()=>{
    window.addEventListener("scroll",controleNavbar)
    return ()=>{
        window.removeEventListener("scroll",controleNavbar)
    }
  },[lastScrolly])




  const searchQuaryHandler = (event) => {
    if (event.key === "Enter" && quary.length > 0) {
      navigate(`/search/${quary}`);
      setTimeout(() => {
        setShowSearch(false)
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileManu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler =(type)=>{
    if(type === "movie"){
        navigate("/explore/movie");
    }else{
        navigate("/explore/tv");
    }
    setMobileMenu(false)
  }

  return (
    <header className={`header ${mobileManu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={()=>navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={()=>navigationHandler("movie")}>Movies</li>
          <li className="menuItem" onClick={()=>navigationHandler("tv")}>Tv Show</li>
          <li className="menuItem">
            <HiOutlineSearch  onClick={openSearch}/>
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch  onClick={openSearch}/>
          {mobileManu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileManu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input
              type="text"
              placeholder="scarch for a movies and tv show"
              onKeyUp={searchQuaryHandler}
              onChange={(e) => setQuary(e.target.value)}
            />
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>
      </div>}
    </header>
  );
};

export default Header;
