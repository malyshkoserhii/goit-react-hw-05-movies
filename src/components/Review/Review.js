// import s from './Review.module.css';

const Review = ({ review }) => {
  return review.results.length !== 0 ? (
    <div>
      {review.results.map(el => (
        <div key={el.id}>
          <p>Author: {el.author}</p>
          <p>Review: {el.content}</p>
        </div>
      ))}
    </div>
  ) : (
    <p>Nobody has written a review yet</p>
  );
};

export default Review;
