import css from "./Descripton.module.css";

const Description = () => {
  return (
    <>
      <div className={css.description}>
        <h1 className={css.cafeName}>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
    </>
  );
};

export default Description;
