import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  const { mealid } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    loadRecipe();
  }, []);

  const loadRecipe = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/recipes/${mealid}`
    );
    setData(res.data);
  };

  return (
    <>
      {!data ? (
        "Loading..."
      ) : (
        <div className="mealInfo">
          <img src={data.imageUrl} alt={data.name} />
          <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;