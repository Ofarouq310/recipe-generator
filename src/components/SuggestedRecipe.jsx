import ReactMarkdown from 'react-markdown';
export default function SuggestedRecipe(props){

    return (
        <>
            <section className='suggested-recipe-container'>
                <h4>Suggested Recipe:</h4>
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </section>
        </>
    )
}
