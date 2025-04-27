import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>
      {text}: {value} {text === "Positive" && "%"}
    </td>
  </tr>
);

const Statistics = ({ stats }) => {
  if (stats.all === 0) {
    return <p>No feedback given yet</p>;
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text={"Good"} value={stats.good} />
          <StatisticLine text={"Neutral"} value={stats.neutral} />
          <StatisticLine text={"Bad"} value={stats.bad} />
          <StatisticLine text={"Average"} value={stats.average} />
          <StatisticLine text={"All"} value={stats.all} />
          <StatisticLine text={"Positive"} value={stats.positivePercentage} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(good + neutral + bad);
  const [average, setAverage] = useState(0);
  const [positivePercentage, setPositivePcnt] = useState(0);

  const handleGoodFeedback = () => {
    const newGood = good + 1;
    const newAll = newGood + neutral + bad;
    const updatedSum = newGood * 1 + neutral * 0 + bad * -1;
    const finalAvg = updatedSum / newAll;
    const positivePercentage = (newGood / newAll) * 100;

    setGood(newGood);
    setAll(newAll);
    setAverage(finalAvg);
    setPositivePcnt(positivePercentage);
  };

  const handleNeutralFeedback = () => {
    const newNeutral = neutral + 1;
    const newAll = good + newNeutral + bad;
    const updatedSum = good * 1 + newNeutral * 0 + bad * -1;
    const finalAvg = updatedSum / newAll;
    const positivePercentage = (good / newAll) * 100;

    setNeutral(newNeutral);
    setAll(newAll);
    setAverage(finalAvg);
    setPositivePcnt(positivePercentage);
  };

  const handleBadFeedback = () => {
    const newBad = bad + 1;
    const newAll = good + neutral + newBad;
    const updatedSum = good * 1 + neutral * 0 + newBad * -1;
    const finalAvg = updatedSum / newAll;
    const positivePercentage = (good / newAll) * 100;

    setBad(newBad);
    setAll(newAll);
    setAverage(finalAvg);
    setPositivePcnt(positivePercentage);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={handleGoodFeedback} />
      <Button text="neutral" handleClick={handleNeutralFeedback} />
      <Button text="bad" handleClick={handleBadFeedback} />
      <h2>Statistics</h2>
      <Statistics
        stats={{
          good,
          bad,
          neutral,
          all,
          average,
          positivePercentage,
        }}
      />
    </div>
  );
};

export default App;
