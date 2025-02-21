import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store"; // Redux store'dan AppDispatch'i import et

import { fetchBooks } from "../index/index"; //

const Header = ({ onSearch }: { onSearch: () => void }) => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>(); // useDispatch'e tür ekledik

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim() === "") return; // Boş arama yapılmasını engelle

    dispatch(fetchBooks(search)); // Redux Thunk ile API çağrısı yap
    onSearch(); // Arama yapıldığını belirt
    setSearch(""); // Arama kutusunu temizle
  };

  return (
    <nav className="navbar bg-body-light container">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          About Books
        </a>
        <form onSubmit={handleSearch} className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Kitap ara..."
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-warning" type="submit">
            Ara
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
