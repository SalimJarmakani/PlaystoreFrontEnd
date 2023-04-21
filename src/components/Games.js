import React, { useState } from 'react';

function Apps() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', category: 'Top Selling', genre: 'Action' },
    { id: 2, name: 'Item 2', category: 'Top Selling', genre: 'Adventure' },
    { id: 3, name: 'Item 3', category: 'Top Selling', genre: 'Simulation' },
    { id: 4, name: 'Item 4', category: 'Top Selling', genre: 'Action' },
    { id: 5, name: 'Item 5', category: 'Top Selling', genre: 'Adventure' },
    { id: 6, name: 'Item 6', category: 'Top Selling', genre: 'Simulation' },
    { id: 7, name: 'Item 7', category: 'Top Selling', genre: 'Action' },
    { id: 8, name: 'Item 8', category: 'Top Selling', genre: 'Adventure' },
    { id: 9, name: 'Item 9', category: 'Top Selling', genre: 'Simulation' },
    { id: 10, name: 'Item 10', category: 'Top Selling', genre: 'Action' },
   
    { id: 11, name: 'Item 11', category: 'New Releases', genre: 'Action' },
    { id: 12, name: 'Item 12', category: 'New Releases', genre: 'Adventure' },
    { id: 13, name: 'Item 13', category: 'New Releases', genre: 'Simulation' },
    { id: 14, name: 'Item 14', category: 'New Releases', genre: 'Action' },
    { id: 15, name: 'Item 15', category: 'New Releases', genre: 'Adventure' },
    { id: 16, name: 'Item 16', category: 'New Releases', genre: 'Simulation' },
    { id: 17, name: 'Item 17', category: 'New Releases', genre: 'Action' },
    { id: 18, name: 'Item 18', category: 'New Releases', genre: 'Adventure' },
    { id: 19, name: 'Item 19', category: 'New Releases', genre: 'Simulation' },
    { id: 20, name: 'Item 20', category: 'New Releases', genre: 'Action' },
   
    
    { id: 21, name: 'Item 21', category: 'Recommended', genre: 'Action' },
    { id: 22, name: 'Item 22', category: 'Recommended', genre: 'Adventure' },
    { id: 23, name: 'Item 23', category: 'Recommended', genre: 'Simulation' },
    { id: 24, name: 'Item 24', category: 'Recommended', genre: 'Action' },
    { id: 25, name: 'Item 25', category: 'Recommended', genre: 'Adventure' },
    { id: 26, name: 'Item 26', category: 'Recommended', genre: 'Simulation' },
    { id: 27, name: 'Item 27', category: 'Recommended', genre: 'Action' },
    { id: 28, name: 'Item 28', category: 'Recommended', genre: 'Adventure' },
    { id: 29, name: 'Item 29', category: 'Recommended', genre: 'Simulation' },
    { id: 30, name: 'Item 30', category: 'Recommended', genre: 'Action' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('Top Selling');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('Top Selling');

  const renderItems = () => {
    let filteredItems = items.filter((item) => item.category === selectedCategory);
    
    if (selectedGenre !== 'All') {
      filteredItems = filteredItems.filter((item) => item.genre === selectedGenre);
    }

    switch (selectedFilter) {
      case 'Top Selling':
        filteredItems.sort((a, b) => a.id - b.id);
        break;
      case 'Top Charts':
        filteredItems.sort((a, b) => a.id - b.id).reverse();
        break;
      case 'New Releases':
        filteredItems.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filteredItems.map((item) => (
      <div key={item.id} onClick={() => console.log(item.name)}>
        <p>{item.name}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Games</h2>
      <div>
        <h3>Filter by:</h3>
        <div>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="Top Selling">Top Selling</option>
            <option value="New Releases">New Releases</option>
            <option value="Recommended">Recommended</option>
          </select>
        </div>
        <div>
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="All">All Genres</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Simulation">Simulation</option>
          </select>
        </div>
        <div>
          {/* <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
            <option value="Top Selling">
            </option>
<option value="Top Charts">Top Charts</option>
<option value="New Releases">New Releases</option> */}
{/* </select> */}
</div>
</div>
<div>
<h3>{selectedCategory} ({renderItems().length} Items)</h3>
{renderItems()}
</div>
</div>
);
}

export default Apps;