export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ))
    return (
        <>
    
            {
            ingredientsListItems.length > 0 && 
            <section className="ingredients-on-hand">
                <h2 id="on-hand-header"><i className="fa-solid fa-check"></i> Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            </section>
            }

        <section className="get-recipe-container">
            {
            ingredientsListItems.length > 3 &&
            <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div>
            }
        </section>
        
        </>
    )
}
