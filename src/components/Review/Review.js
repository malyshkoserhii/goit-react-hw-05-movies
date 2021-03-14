import Fallback from '../Fallback/Fallback';
import s from './Review.module.css';

const Review = ({ review }) => {
  if (!review.results) {
    return <Fallback />;
  }

  if (review.results.length === 0) {
    return <p>Nobody has written a review yet</p>;
  }

  return (
    <div className={s.container}>
      {review.results.map(el => (
        <div key={el.id}>
          <p className={s.author}>Author: {el.author}</p>
          <p className={s.review}>Review: {el.content}</p>
        </div>
      ))}
    </div>
  );
};

Review.defaultProps = {
  review: [],
};

export default Review;
