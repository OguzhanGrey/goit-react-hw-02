import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Descripton/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const storageFeedback = () => {
    const stored = localStorage.getItem("feedback");
    return stored
      ? JSON.parse(stored)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  };

  const [feedback, setFeedback] = useState(storageFeedback);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      const resetState = {
        good: 0,
        neutral: 0,
        bad: 0,
      };
      setFeedback(resetState);
      return;
    }

    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        totalFeedback={totalFeedback}
        positive={
          totalFeedback === 0
            ? 0
            : Math.round((feedback.good / totalFeedback) * 100)
        }
      />
    </>
  );
}

export default App;
