

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Food = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    const res = await axios.get("http://localhost:8080/api/recipes");
    setData(res.data);
  };

  return (
    <>
      <h1>FOOD RECIPE APP</h1>
      <Cards detail={data} />
    </>
  );
};

export default Food;