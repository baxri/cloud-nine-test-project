import React, { useState, useEffect } from "react";

import ListHeader from "../components/ListHeader";
import Filter from "../components/Filter";
import ListItem from "../components/ListItem";

import data from "../data";
import range from "../range";

export default function List() {
  const [items, setItems] = useState(data);
  const [price, setPrice] = useState(range[0]);

  useEffect(() => {
    setItems(data.filter((x) => x.price >= price.from && x.price <= price.to));
  }, [price]);

  return (
    <>
      <ListHeader />
      <Filter data={range} value={price} handleValueChange={setPrice} />
      {items.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </>
  );
}
