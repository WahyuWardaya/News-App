import { useNewsApi } from '../hooks/useNewsApi';
import NewsCard from '../components/NewsCard';

function Programming() {
  const { data: articles, isLoading, error } = useNewsApi('programmer');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mt-4">
      <h1>Programming News</h1>
      <div className="row d-flex justify-content-center">
        {articles.map((article) => (
          <div key={article._id} className="col-md-4">
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programming;
