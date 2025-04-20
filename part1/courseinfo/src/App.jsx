const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

const Content = ({ allContent }) => {
  console.log("THIS IS CONTENT", allContent);
  return (
    <div>
      <Part part={allContent.part1} exercises={allContent.exercises1} />
      <Part part={allContent.part2} exercises={allContent.exercises2} />
      <Part part={allContent.part3} exercises={allContent.exercises3} />
    </div>
  );
};
3;
const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const content = {
    part1,
    exercises1,
    part2,
    exercises2,
    part3,
    exercises3,
  };

  return (
    <div>
      <Header course={course} />
      <Content allContent={content} />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
