import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import {changeCategory} from "../redux/currentCategory";
import '../style/Header.css';

export default function HeaderComp() {
  const cartProducts = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();

  const changeCategoryName = (text) => dispatch(changeCategory(text));

  const ChangeCategory = (e) => {
    var categoryArray = document.getElementsByClassName("nav-link");
    for (let i = 0; i < categoryArray.length - 1; i++) {
      categoryArray[i].style.color = "rgba(255,255,255,.55)";
    }
    e.target.style.color = "white";
    var categoryName;
    switch(e.target.innerHTML) {
      case "Tất cả sản phẩm":
        categoryName = "all";
        break;
      case "Dưỡng Da":
        categoryName = "DuongDa";
        break;
      case "Làm Sạch":
        categoryName = "LamSach";
        break;
      case "Trang Điểm Nền":
        categoryName = "TrangDiemNen";
        break;
      case "Chăm Sóc Cơ Thể":
        categoryName = "ChamSocCoThe";
        break;
      case "Phụ kiện":
        categoryName = "PhuKien";
        break;
    }
    changeCategoryName(categoryName);
  }

  return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-dark">
          <a className="navbar-brand" href="">Mỹ Phẩm Mountain</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={{color: "white"}} onClick = {(e) => ChangeCategory(e)}>Tất cả sản phẩm</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={{color: "rgba(255,255,255,.55)"}} onClick = {(e) => ChangeCategory(e)}>Dưỡng Da</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={{color: "rgba(255,255,255,.55)"}} onClick = {(e) => ChangeCategory(e)}>Làm Sạch</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={{color: "rgba(255,255,255,.55)"}} onClick = {(e) => ChangeCategory(e)}>Trang Điểm Nền</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={{color: "rgba(255,255,255,.55)"}} onClick = {(e) => ChangeCategory(e)}>Chăm Sóc Cơ Thể</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={{color: "rgba(255,255,255,.55)"}} onClick = {(e) => ChangeCategory(e)}>Phụ kiện</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fas fa-shopping-cart" to="/cartProducts" id = "cartProducts"><span >{cartProducts.length}</span></NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  );
}