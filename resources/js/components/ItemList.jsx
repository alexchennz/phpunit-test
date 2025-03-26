import React, { useEffect, useState } from "react";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch("/items");
      if(!response.ok){
        throw new Error("Failed to fetch items")
      }
      const data = await response.json();
      setItems(data);
    };
    getItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Items</h1>
      <div className="grid grid-cols-2 gap-4">
        {items.map(item => (
          <div className="border rounded-2xl p-4" key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
