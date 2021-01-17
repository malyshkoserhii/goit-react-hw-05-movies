import Fallback from '../Fallback/Fallback';
// import s from './Review.module.css';

const Review = ({ review }) => {
  if (!review.results) {
    return <Fallback />;
  }

  if (review.results.length === 0) {
    return <p>Nobody has written a review yet</p>;
  }

  return (
    <div>
      {review.results.map(el => (
        <div key={el.id}>
          <p>Author: {el.author}</p>
          <p>Review: {el.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
