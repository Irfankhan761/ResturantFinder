import React, { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RestaurantSearch() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    cuisine: "",
    location: "",
    minRating: 0,
  });
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Define how many pages to display at once
  const pagesToShow = 5;

  const fetchRestaurants = useCallback(async () => {
    if (
      searchQuery ||
      filters.cuisine ||
      filters.location ||
      filters.minRating > 0
    ) {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3000/restaurants?name=${searchQuery}&cuisine=${filters.cuisine}&location=${filters.location}&minRating=${filters.minRating}&page=${page}&limit=10`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response Data:", data);

        setRestaurants(data.restaurants);
        setTotalPages(Math.ceil(data.totalCount / 10));
      } catch (error) {
        toast.error("Failed to fetch restaurants. Please try again.");
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setRestaurants([]);
      setTotalPages(1);
    }
  }, [searchQuery, filters, page]);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Calculate the range of pages to display
  const startPage = Math.max(1, page - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  return (
    <div className="restaurant-search">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a restaurant..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="filters">
        <select
          name="cuisine"
          value={filters.cuisine}
          onChange={handleFilterChange}
        >
          <option value="">Cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="Indian">Indian</option>
          <option value="Mexican">Mexican</option>
        </select>
        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
        >
          <option value="">Location</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Chicago">Chicago</option>
          <option value="National City">National City</option>
          <option value="Grimesview">Grimesview</option>
          <option value="Effertzfield">Effertzfield</option>
          <option value="West Ronny">West Ronny</option>
          <option value="Lindport">Lindport</option>
          <option value="Olafborough">Olafborough</option>
          <option value="South Tracey">South Tracey</option>
          <option value="West Sammiefurt">West Sammiefurt</option>
          <option value="Baytown">Baytown</option>
          <option value="New Charlesport">New Charlesport</option>
        </select>
        <select
          name="minRating"
          value={filters.minRating}
          onChange={handleFilterChange}
        >
          <option value="0">Rating</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="restaurant-list">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <div key={restaurant._id} className="restaurant-item">
                <h3>{restaurant.name}</h3>
                <p>Cuisine: {restaurant.cuisine}</p>
                <p>Location: {restaurant.location}</p>
                <p>Rating: {restaurant.rating}</p>
              </div>
            ))
          ) : (
            <p>No restaurants found.</p>
          )}
        </div>
      )}

      <div className="pagination">
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}
        {[...Array(endPage - startPage + 1)].map((_, index) => (
          <button
            key={startPage + index}
            disabled={page === startPage + index}
            onClick={() => handlePageChange(startPage + index)}
          >
            {startPage + index}
          </button>
        ))}
        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default RestaurantSearch;
