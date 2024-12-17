import { useDispatch, useSelector } from 'react-redux';
import { saveArticle } from '../store/savedSlice';

function NewsCard({ article }) {
  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.saved.articles);
  const isSaved = savedArticles.some((savedArticle) => savedArticle.url === article.web_url);

  const handleSave = () => {
    dispatch(saveArticle(article));
    alert('Saved Success');
  };

  const placeholderImage = 'https://via.placeholder.com/300x150?text=No+Image';

  return (
    <div className="card mb-4" style={{ height: '600px'}}>
      <img
        src={article.multimedia?.[0]?.url ? `https://www.nytimes.com/${article.multimedia[0].url}` : placeholderImage}
        alt={article.headline.main}
        className="card-img-top"
        style={{
          height: '280px',
          objectFit: 'cover',
        }}
      />
      <div className="card-body d-flex flex-column ">
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
          {!isSaved && (
            <button onClick={handleSave} className="btn btn-success">
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
