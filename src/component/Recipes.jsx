import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import URL from "./settings";
import Instructions from "./Instructions";
import "../styles/Recipes.css";
import "../styles/RecipesIMG.css";

const FetchRecipes = () => {
  const [recipes, setRecipes] = useState({
    title: "",
    ingredients: [],
    instructions: [
      {
        type: "",
        text: "",
      },
    ],
    image: "",
  });

  useEffect(() => {
    const test = async () => {
    const reci = await getRecipesInfo();
    setRecipes(...reci.recipes, recipes)
  }
  test();
  }, []);

  const getRecipesInfo = async () => {
    const res = await fetch(URL + "/api/fetch");
    const data = await res.json();
    console.log(data.recipes);
    return data;
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 style={{ textAlign: "center" }}> {recipes.title} </h1>
          </Col>
          </Row>
          <Row>
          <Col sm={4}>
            <h4 style={{ textAlign: "center" }}> Ingredients: </h4>
          <Card className="cardstyle"> {recipes.ingredients}</Card>
          </Col>
          <Col sm={4}>
            {<br></br>}
            <Card className="cardstyle"> <Instructions instructions={recipes.instructions} /></Card>
          </Col>
          <Col sm={4}>
            {
              <img className="cardstyle" style={{marginTop: 16}}
                src={recipes.image}
                alt="Opskrift billede"
              />
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default function App() {
  return <FetchRecipes />;
}
