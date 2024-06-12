import React, { useState } from "react";
import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import { mealData } from "./data/data";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [food, setFood] = useState(mealData);

  const handleSearchInput = (value) => {
    setSearchQuery(value);
  };

  const handleSearch = () => {
    if (typeof searchQuery === "string") {
      const query = searchQuery.toLowerCase();
      const filteredFood = mealData.filter(
        (meal) =>
          meal.name.toLowerCase().includes(query) ||
          meal.category.toLowerCase().includes(query)
      );
      setFood(filteredFood);
    }
  };

  const handleFilter = (category) => {
    if (category === "all") {
      setFood(mealData);
    } else {
      const filteredFood = mealData.filter(
        (meal) => meal.category.toLowerCase() === category
      );
      setFood(filteredFood);
    }
  };

  return (
    <div className="App">
      <TopNav
        searchQuery={searchQuery}
        handleSearchInput={handleSearchInput}
        handleSearch={handleSearch}
      />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal food={food} handleFilter={handleFilter} />
      <Categories />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
