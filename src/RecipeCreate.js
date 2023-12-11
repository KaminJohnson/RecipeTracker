import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormValues = {
    name: "",
    cuisine: "",
    photo: "",
    rating: "",
    ingredients: "",
    preparation: ""
  }
  
  const [formData, setFormData] = useState({...initialFormValues});
  
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
     [target.name]: target.value
    });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({...initialFormValues});
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" type="text" placeholder="Name" required value={formData.name} onChange={handleChange}/>
            </td>
            <td>
              <input name="cuisine" type="text" placeholder="Cuisine" required value={formData.cuisine} onChange={handleChange}/>
            </td>
            <td>
              <input name="photo" type="text" placeholder="URL" required value={formData.photo} onChange={handleChange}/>
            </td>
            <td>
              <textarea name="ingredients" placeholder="Ingredients" type="text" value={formData.ingredients} onChange={handleChange}/>
            </td>
            <td>
              <textarea name="preparation" placeholder="Preparation" type="text" value={formData.preparation} onChange={handleChange}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
