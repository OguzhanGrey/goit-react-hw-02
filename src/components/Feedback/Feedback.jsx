import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive, totalFeedback }) => {
  return (
    <div className={css.feedback}>
      {totalFeedback > 0 ? (
        <ul className={css.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad {bad}</li>
          <li>Total: {total}</li>
          <li>Positive: {positive}%</li>
        </ul>
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
};

export default Feedback;
