import React from "react";
import Logo from "../../Image/logo.png";
import searchLogo from "../../Image/search.png";
import "./Css/Navbar-header.css";
import { Link, NavLink ,useParams} from "react-router-dom";
export const Navbar = (props) => {
  return (
    <header>
      <div className="navbar-container">
        <div className="navbar-header">
          <div className="logo-header">
            <Link to="/">
              <img src={Logo} style={{ width: 37, height: 37 }} />
              <span></span>
            </Link>
          </div>
          <div className="search-header">
            <form>
              <button
                style={{ border: "none", background: "#fff", padding: 0 }}
              >
                <img
                  src={searchLogo}
                  style={{ width: 35, height: 35, background: "#fff" }}
                />
              </button>
              <input placeholder="Tìm kiếm theo tiêu đề"></input>
            </form>
          </div>
          <div className="menu-header">
            <NavLink className="create-post-header" to="/create-post">
              Viết bài
            </NavLink>

            <a>Đăng ký</a>
            <div className="vertical"></div>
            <a>Đăng nhập</a>
          </div>
        </div>
        <div className="navbar-categorize">
          <ul className="main-menu list-unstyled">
            <li>
              <a >
                Cho bạn
              </a>
            </li>
            <li className="active">
              <NavLink to="/topics/tat-ca">Tất cả</NavLink>
            </li>
            <li className="">
              <NavLink to="/topics/top-writer">Thành viên nổi bật</NavLink>
            </li>
            <li>
              <NavLink to="/topics/quan-diem-tranh-luan">
                Quan điểm - Tranh luận
              </NavLink>
            </li>
            <li>
              <NavLink to="/topics/sciece2vn">Science2vn</NavLink>
            </li>
            <li>
              <NavLink to="/topics/sach">Sách</NavLink>
            </li>
            <li>
              <NavLink to="/danh-muc-khac">Danh mục khác</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
