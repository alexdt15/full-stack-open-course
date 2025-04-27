import { useState } from "react";

const VotesComponent = ({ anecdote, count }) => (
  <>
    <p> {anecdote}</p>
    <p> has {count} votes</p>
  </>
);

const Button = ({ text, clickAction }) => (
  <button onClick={clickAction}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  const handleNextAnecdote = () => {
    const anecdotesLength = anecdotes.length;
    const previousNumber = selected;
    let nextRandomNumber = getRandomNumber(anecdotesLength);
    if (
      nextRandomNumber === previousNumber &&
      nextRandomNumber !== anecdotesLength
    ) {
      nextRandomNumber += 1;
    }

    setSelected(nextRandomNumber);
  };

  const handleVote = () => {
    const anecdoteIndex = selected;
    const votesCopy = [...votes];
    votesCopy[anecdoteIndex] += 1;
    const highestVoted = Math.max(...votesCopy);
    const highestVotedIndex = votesCopy.findIndex(
      (vote) => vote === highestVoted
    );
    setVotes(votesCopy);
    setMostVoted(highestVotedIndex);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <VotesComponent anecdote={anecdotes[selected]} count={votes[selected]} />
      <Button text="vote" clickAction={handleVote} />
      <Button text="next anecdote" clickAction={handleNextAnecdote} />
      <h2>Anecdote with most votes</h2>
      <VotesComponent
        anecdote={anecdotes[mostVoted]}
        count={votes[mostVoted]}
      />
    </div>
  );
};

export default App;
