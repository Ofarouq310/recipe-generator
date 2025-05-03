import { useState } from "react"
import IngredientsList from "./IngredientsList"
import SuggestedRecipe from "./SuggestedRecipe"

export default function Main() {

    const [ingredients, setIngredients] = useState([])

const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient").trim()
        if (newIngredient.length > 0) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    }

    return (
        <main>
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
            <IngredientsList ingredients={ingredients} />
            <SuggestedRecipe />
        </main>
    )
}
