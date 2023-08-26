import axios from "axios";
import { useState } from "react";
import "../App.css";


function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateBeer = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: formData.name,
        tagline: formData.tagline,
        description: formData.description,
        first_brewed: formData.first_brewed,
        brewers_tips: formData.brewers_tips,
        attenuation_level: formData.attenuation_level,
        contributed_by: formData.contributed_by,
      });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <h1>Add New Beer</h1>
      <form onSubmit={handleCreateBeer}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          id="tagline"
          name="tagline"
          value={formData.tagline}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="first_brewed">First Brewed:</label>
        <input
          type="text"
          id="first_brewed"
          name="first_brewed"
          value={formData.first_brewed}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="brewers_tips">Brewer's Tips:</label>
        <input
          type="text"
          id="brewers_tips"
          name="brewers_tips"
          value={formData.brewers_tips}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="attenuation_level">Attenuation Level:</label>
        <input
          type="number"
          id="attenuation_level"
          name="attenuation_level"
          value={formData.attenuation_level}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="contributed_by">Created By:</label>
        <input
          type="text"
          id="contributed_by"
          name="contributed_by"
          value={formData.contributed_by}
          onChange={handleChange}
        />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
