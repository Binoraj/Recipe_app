
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    imageUrl: ""
  });

  // LOAD DATA
  const loadRecipes = async () => {
    const res = await axios.get("http://localhost:8080/api/recipes");
    setRecipes(res.data);
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ADD RECIPE
  const addRecipe = async () => {
    if (!form.name || !form.description) return;

    await axios.post("http://localhost:8080/api/recipes", form);

    setForm({ name: "", description: "", imageUrl: "" });
    loadRecipes();
  };

  
  const deleteRecipe = async (id) => {
    if (!id) {
      console.error("Invalid ID");
      return;
    }

    await axios.delete(`http://localhost:8080/api/recipes/${id}`);
    loadRecipes();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recipe App 🍲</h2>

      {/* FORM */}
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <br />

      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <br />

      <input
        name="imageUrl"
        placeholder="Image URL"
        value={form.imageUrl}
        onChange={handleChange}
      />
      <br />

      <button onClick={addRecipe}>Add Recipe</button>

      <hr />

      {/* LIST */}
      {recipes.map((r) => (
        <div key={r.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{r.name}</h3>
          <p>{r.description}</p>

          {r.imageUrl && (
            <img src={r.imageUrl} width="150" />
          )}

          <br />

          <button onClick={() => deleteRecipe(r.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;