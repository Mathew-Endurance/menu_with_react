import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  // create dynamic categories function
  const filterItems = (theCategory) => {
    if (theCategory === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === theCategory);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        {/* COMPONENT */}
        <Categories categories={categories} theFilterItem={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
