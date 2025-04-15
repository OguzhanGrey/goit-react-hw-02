import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className={css.options}>
      <ul className={css.list}>
        <li>
          <button onClick={() => updateFeedback("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("bad")}>Bad</button>
        </li>
        <li>
          {totalFeedback > 0 && (
            <button onClick={() => updateFeedback("reset")}>Reset</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Options;
