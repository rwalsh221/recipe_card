import classes from "./RecipeCardBack.module.css";

const RecipeCardBack = () => {
  return (
    <section>
      <div className={classes.rc_back}>
        <div className={classes.rc_front__heading}>
          <h2> White chocolate custard tart</h2>
        </div>
        <div className={classes.rc_back__method}>
          <ul>
            <li>
              <span>step 1</span>
              <br />
              Place flour, sugar and butter in a food processor. Process until
              mixture resembles fine breadcrumbs. Add egg yolk and water, adding
              an extra teaspoon of water if needed. Process until dough just
              comes together. Turn out dough onto a lightly floured surface.
              Knead until just smooth. Shape into a disc. Wrap in baking paper.
              Refrigerate for 30 minutes.
            </li>
            <li>
              <span>step 2</span>
              <br />
              Preheat oven to 200C/180C fan-forced. Grease a 3cm-deep, 23cm
              round (base) loose-based fluted tart pan. Roll out pastry between
              2 sheets of baking paper until 4mm thick. Line base and side of
              pan with pastry. Refrigerate for 10 minutes.
            </li>
            <li>
              <span>step 3</span>
              <br />
              Meanwhile, make White chocolate custard; Place cream and milk in a
              medium saucepan. Heat over medium-high heat until just simmering
              (do not boil). Remove from heat. Add chocolate. Stir until smooth
              and combined. Set aside for 15 minutes or until cool. Whisk in
              egg.
            </li>
            <li>
              <span>step 4</span>
              <br />
              Place tart pan on a baking tray. Line pastry case with baking
              paper. Fill with pie weights or uncooked rice. Bake for 10 to 12
              minutes or until edges are light golden. Remove weights and paper.
              Bake for a further 5 to 7 minutes or until base is light golden.
              Set aside to cool. Reduce oven to 170C/150C fan-forced.
            </li>
            <li>
              <span>step 5</span>
              <br />
              Pour custard into pastry case. Bake for 40 to 45 minutes or until
              just set. Cool to room temperature. Refrigerate overnight.
            </li>
            <li>
              <span>step 6</span>
              <br />
              Stand tart at room temperature for 10 minutes before serving. Top
              with raspberries and grated white chocolate curls. Serve with
              cream.
            </li>
          </ul>
        </div>
        <div className={classes.rc_back__footer}>
          <p>Recipe from:</p>
          <p>
            https://www.taste.com.au/recipes/white-chocolate-custard-tart/d6b10593-790f-4ba0-a3bf-30e1eff28a12
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecipeCardBack;
