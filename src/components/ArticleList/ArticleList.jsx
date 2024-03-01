import Article from "../Article/Article"

export default function ArticleList ({items}) {
    return (
        <ul>
            {items.map(({ objectID, url, title}) => (
                <li key={objectID}>
                    <Article url={url} title={title}/>
                </li>
            ))}
        </ul>
    )
}