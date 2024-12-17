import { useNewsApi } from '../hooks/useNewsApi';
import NewsCard from '../components/NewsCard';

function Indonesia() {
  const { data: articles, isLoading, error } = useNewsApi('Indonesia');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mt-4">
      <h1>Indonesia News</h1>
      <div className="row">
        {articles.map((article) => (
          <div key={article._id} className="col-md-4">
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Indonesia;
