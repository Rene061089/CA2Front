import React, { useEffect, useState } from "react";

import URL from "./settings";
import Instructions from "./Instructions";

const FetchRecipes = () => {
  const [recipes, setRecipes] = useState(
    {
      title: "",
      ingredients: [],
      instructions: [
        {
          type:"",
          text:"",
        }
      ],
      image: "",
  },
  );

  useEffect(() => {
    getRecipesInfo();
  }, []);

  const getRecipesInfo = async () => {
    const res = await fetch(URL + "/api/fetch");
    const data = await res.json();
    console.log(data.recipes);
    setRecipes(...data.recipes, recipes);
  };
 
  // console.log(typeof(instructions));
  // recipes.instructions.map(res => console.log(res))
 
  
// });
  // console.log(mitArray);
  
  return (
    <div>
      <p> Title: {recipes.title} </p>
      <p> Ingredients: {recipes.ingredients}</p>
      <Instructions instructions={recipes.instructions}/>
      <p> </p>
      <p> Image: {<a href={recipes.image}>Billede</a>} </p>
      <p> </p>
    </div>
  );
};

export default function App() {
  return <FetchRecipes />;
}
