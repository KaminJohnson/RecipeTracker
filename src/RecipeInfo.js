import React from "react";

function RecipeInfo({recipe, handleDelete}) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img alt={recipe.photo} name="photo" src={recipe.photo}/>
      </td>
      <td className="content_td">{recipe.ingredients}</td>
      <td className="content_td">{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default RecipeInfo;
