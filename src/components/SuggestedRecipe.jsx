import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

export default function SuggestedRecipe(props) {
    const recipeRef = useRef(null);

    useEffect(() => {
        if (props.recipe) {
            recipeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [props.recipe]);

    return (
        <>
            <section className='suggested-recipe-container' ref={recipeRef}>
                <h4>Suggested Recipe:</h4>
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </section>
        </>
    );
}