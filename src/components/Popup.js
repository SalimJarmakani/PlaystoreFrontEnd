import React from "react";
import "./CSS/Popup.css";

function Popup({ item, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <iframe
          className="movie-trailer"
          title="trailer"
          src={item.trailerLink}
          allowFullScreen
        />
        <img
          className="movie-image"
          src={require(`../images/${item.mainImage}`)}
          alt={item.description}
        />
        <div className="reviews">
          <h3>Reviews:</h3>
          <ul>
            {item.reviews.map((review) => (
              <li key={review.id}>
                <div className="author">{review.author}</div>
                <div className="date">{review.date}</div>
                <div className="rating">Rating: {review.rating}</div>
                <div className="text">{review.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Popup;
