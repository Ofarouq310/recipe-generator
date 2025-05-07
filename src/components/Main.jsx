import { useState } from "react"
import IngredientsList from "./IngredientsList"
import SuggestedRecipe from "./SuggestedRecipe"
import {getRecipeFromMistral} from "../ai.js"



export default function Main() {

    const [ingredients, setIngredients] = useState([])

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient").trim()
        if (newIngredient.length > 0) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    }

    const [recipe, setRecipe] = useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <div>
                <i className="fa-solid fa-utensils"></i>
                <i className="fa-solid fa-bowl-rice"></i>
                <h1>Recipe Generator</h1>
                <p>Generate delicious recipes using AI</p>
            </div>
            <div className="recipes-photos">
                <div className="cuisine-one"></div>
                <div className="cuisine-two"></div>
                <div className="cuisine-three"></div>
                <div className="cuisine-four"></div>
            </div>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    required
                />
                <button>+ Add ingredient</button>
            </form>
            <IngredientsList ingredients={ingredients} getRecipe={getRecipe}  />
            {recipe && <SuggestedRecipe recipe={recipe} />}
        </main>
    )
}
