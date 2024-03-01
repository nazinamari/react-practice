import { useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { fetchArticlesWithTopic } from "../../articles-api.js";
import { SearchForm } from "../SearchForm/SearchForm.jsx";

export default function App () {
    
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
        setArticles([]);
        setError(false);
        setLoading(true);
        const data = await fetchArticlesWithTopic(topic);
        setArticles(data);
    } catch(error) {
        setError(true);
    } finally {
        setLoading(false);
    }
};

    return (
        <div>
            <SearchForm onSearch={handleSearch} />
            <h1>Latest articles</h1>
            {loading && <p>Loading data, please wait...</p> }
            {error && (<p>Whoops, something went wrong! Please try reloading this page!</p>
            )}
            {articles.length > 0 && <ArticleList items={articles}/>}
        </div>
    );
}

// Варіант без запитів

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     async function fetchArticles() {
//       try {
//         setLoading(true);
// 			const data = await fetchArticlesWithTopic("react");
//         setArticles(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

// 	return (
//     <div>
//       <h1>Latest articles</h1>
//       {loading && <p>Loading data, please wait...</p>}
//       {error && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };