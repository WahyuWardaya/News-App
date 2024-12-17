import { useSelector, useDispatch } from 'react-redux';
import { unsaveArticle } from '../store/savedSlice';

function Saved() {
  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.saved.articles);

  const handleUnsave = (article) => {
    dispatch(unsaveArticle(article));
    alert('Article Unsaved');
  };

  const placeholderImage = 'https://via.placeholder.com/300x150?text=No+Image';

  return (
    <div>
      <h1 style={{ textAlign: 'left', margin: '20px 0', fontWeight: 'bold' }}>Saved Articles</h1>
      {savedArticles.length === 0 ? (
        <p style={{ textAlign: 'left', fontSize: '1.2rem' }}>No saved articles yet.</p>
      ) : (
        <div className="d-flex flex-wrap">
          {savedArticles.map((article, index) => (
            <div key={article._id} className="card mb-4" style={{ width: '400px', margin: '10px', height: '600px', display: 'flex', flexDirection: 'column', order: index }}>
              <img
                src={article.multimedia?.[0]?.url ? `https://www.nytimes.com/${article.multimedia[0].url}` : placeholderImage}
                alt={article.headline.main}
                className="card-img-top"
                style={{
                  height: '280px',
                  objectFit: 'cover',
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ fontSize: '1.2rem' }}>
                  {article.headline.main}
                </h5>
                <p className="card-text" style={{ fontSize: '1rem' }}>
                  {article.snippet}
                </p>
                <div className="d-flex justify-content-between mt-auto">
                  <a href={article.web_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    News Page
                  </a>
                  <button onClick={() => handleUnsave(article)} className="btn btn-danger">
                    Unsave
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Saved;
