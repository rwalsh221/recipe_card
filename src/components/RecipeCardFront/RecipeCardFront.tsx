import React from 'react';
import classes from './RecipeCardFront.module.css';
import recipeImg from '../../assets/img/white-chocolate-custard-tart.jpeg';

const RecipeCardFront = () => {
  return (
    <section className={classes.rc_front}>
      <h2 className={classes.rc_front__heading}>
        White chocolate custard tart
      </h2>
      <div className={classes.rc_front__img_container}>
        <img src={recipeImg} />
      </div>

      <div className={classes.rc_front__information}>
        <div className={classes.rc_front__description}>
          A glorious custard tart made with white chocolate.
        </div>
        <ul>
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
              <span>Oven Temperature</span>&nbsp;Preheat to 200c / 180c Fan
            </p>
          </li>
        </ul>
      </div>
      <div className={classes.rc_front__ingredients}>
        <div>
          <ul>
            <li>1 1/2 cups plain flour, plus extra for dusting</li>
            <li>2 tbsp caster sugar</li>
            <li>125g unsalted butter, chilled, chopped</li>
            <li>1 egg yolk</li>
            <li>1 tbsp water, chilled</li>
            <li>125g raspberries</li>
            <li>40g white chocolate, curls</li>
            <li>2/3 cup thickened cream</li>
          </ul>
        </div>
        <div>
          <h3>White choclate custard</h3>
          <ul>
            <li>300ml pure cream</li>
            <li>1/2 cup milk</li>
            <li>2 x 180g blocks white chocolate, chopped</li>
            <li>2 eggs, lightly beaten</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecipeCardFront;
