import { useLocation } from 'react-router-dom';
import { useNewsApi } from '../hooks/useNewsApi';
import NewsCard from '../components/NewsCard';

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  const { data: articles, isLoading, error } = useNewsApi(query);

  if (isLoading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="text-center text-danger mt-4">Error: {error.message}</div>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Search Results for {query}</h1>
      {articles.length === 0 ? (
        <p className="text-muted">No results found.</p>
      ) : (
        <div className="row">
          {articles.map((article) => (
            <div key={article._id} className="col-md-4 mb-2">
              <NewsCard article={article} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
