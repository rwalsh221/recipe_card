import React from "react";
import classes from "./RecipeCardFront.module.css";
import recipeImg from "../../assets/img/white-chocolate-custard-tart.jpeg";

const RecipeCardFront = () => {
  return (
    <>
      <section className={classes.rc_front}>
        <div className={classes.rc_front__heading}>
          <h2> White chocolate custard tart</h2>
        </div>
        <div className={classes.rc_front__img_container}>
          <img src={recipeImg} />
        </div>

        <div className={classes.rc_front__information}>
          <div className={classes.rc_front__description}>
            A glorious custard tart made with white chocolate.
          </div>
          <ul role="list">
            <li>
              <p>
                <span>Serves:</span>&nbsp;8 Slices
              </p>
            </li>
            <li>
              <p>
                <span>Preparation Time:</span>&nbsp;14h 10m
              </p>
            </li>
            <li>
              <p>
                <span>Baking Time:</span>&nbsp;1h
              </p>
            </li>
            <li>
              <p>
                <span>Oven Temp:</span>&nbsp;Preheat to 200c / 180c Fan
              </p>
            </li>
          </ul>
        </div>
        <div className={classes.rc_front__ingredients}>
          <div>
            <ul className={classes.ingredients__main}>
              <li>1 1/2 cups plain flour, plus extra for dusting</li>
              <li>2 tbsp caster sugar</li>
              <li>125g unsalted butter, chilled, chopped</li>
              <li>1 egg yolk</li>
              <li>1 tbsp water, chilled</li>
              <li>125g raspberries</li>
              <li>40g white chocolate, curls</li>
              <li>2/3 cup thickened cream</li>
            </ul>
            <h3>White chocolate custard</h3>
            <ul className={classes.ingredients__sub}>
              <li>300ml pure cream</li>
              <li>1/2 cup milk</li>
              <li>2 x 180g blocks white chocolate, chopped</li>
              <li>2 eggs, lightly beaten</li>
            </ul>
          </div>
        </div>
      </section>
      {/* BACK OF CARD */}
    </>
  );
};

export default RecipeCardFront;
