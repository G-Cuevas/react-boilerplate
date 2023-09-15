import { InputValue, ProductGrid } from "./components";
import { useState } from "react";

export const MotionApp = () => {
  const [query, setQuery] = useState([]);

  const onSearch = (newSearch) => {
    setQuery([newSearch]);
  };

  return (
    <>
      <h1>Motion</h1>
      <InputValue onEnter={onSearch} />

      <ol>
        {query.map((query) => (
          <ProductGrid key={query} query={query} />
        ))}
      </ol>
    </>
  );
};
