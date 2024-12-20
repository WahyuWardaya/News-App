import { useDispatch, useSelector } from 'react-redux';
import { saveArticle, unsaveArticle } from '../store/savedSlice';
import { useState, useEffect } from 'react';

function NewsCard({ article }) {
  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.saved.articles);
  const isSaved = savedArticles.some((savedArticle) => savedArticle._id === article._id);

  // State for the button
  const [buttonText, setButtonText] = useState(isSaved ? 'Unsave' : 'Save');
  const [buttonClass, setButtonClass] = useState(isSaved ? 'btn-danger' : 'btn-success');

  // Update the button text and class whenever isSaved changes
  useEffect(() => {
    setButtonText(isSaved ? 'Unsave' : 'Save');
    setButtonClass(isSaved ? 'btn-danger' : 'btn-success');
  }, [isSaved]);

  const handleToggleSave = () => {
    if (isSaved) {
      dispatch(unsaveArticle(article)); // Remove the article from saved
      alert('Article Unsaved');
    } else {
      dispatch(saveArticle(article)); // Save the article
      alert('Article Saved');
    }
  };

  const placeholderImage = 'https://via.placeholder.com/300x150?text=No+Image';

  return (
    <div className="card mb-4" style={{ height: '600px' }}>
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
          <button onClick={handleToggleSave} className={`btn ${buttonClass}`}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
