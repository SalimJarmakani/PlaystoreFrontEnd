import React, { useState } from "react";
import "./CSS/Movies.css";
import Popup from "./Popup";

import { getMovies } from "../API/api";

function FilterControls({
  selectedCategory,
  setSelectedCategory,
  selectedGenre,
  setSelectedGenre,
}) {
  return (
    <div>
      <nav>
        <ul>
          {["Top Selling", "New Releases", "Recommended"].map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul>
          {["All", "Romantic", "Comedy", "Action"].map((genre) => (
            <li
              key={genre}
              className={selectedGenre === genre ? "active" : ""}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function MovieItem({ item, onShowPopup }) {
  const handleClick = () => {
    onShowPopup(item.id);
  };

  return (
    <div key={item.id} onClick={handleClick}>
      <div>
        <img
          className="icons"
          src={require(`../images/${item.mainImage}`)}
          alt={item.description}
        />
        <p>{item.title}</p>
      </div>
    </div>
  );
}

function Movies() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Top Selling");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [showPopup, setShowPopup] = useState(null);

  const getMoviesFN = async () => {
    const res = await getMovies();
    setItems(res);
    console.log(res);
  };
  React.useEffect(() => {
    getMoviesFN();
  }, []);

  const handleShowPopup = (itemId) => {
    setShowPopup(itemId);
  };

  const handleClosePopup = () => {
    setShowPopup(null);
  };

  return (
    <div>
      <FilterControls
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <div>
        <div className="movies-container">
          {items.map((item) => (
            <MovieItem
              key={item.id}
              item={item}
              onShowPopup={handleShowPopup}
            />
          ))}
        </div>
      </div>
      {showPopup !== null && (
        <Popup
          item={items.find((item) => item.id === showPopup)}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}
export default Movies;
