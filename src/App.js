const Header = (props) => {
  return (
    <div>
      <h1>{props.CourseName}</h1>
      <p>{props.part1}</p>
      <p>{props.part2}</p>
      <p>{props.part3}</p>
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1}
      </p>
      <p>
       {props.part2}
      </p>
      <p>
        {props.part3} 
      </p>
    </div>
  );
};
const Total = (props) => {
  return (
    <div>
      <p>
        {" "}
        The Total Of Exercises in this Course are :{" "}
        {props.Exercises1 + props.Exercises2 + props.Exercises3}
      </p>
    </div>
  );
};

const App = () => {
  const CourseName = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  const Exercises1 = 10;
  const Exercises2 = 7;
  const Exercises3 = 14;
  
  return (
    <>
      <Header CourseName={CourseName} part1={part1} part2={part2} part3={part3} />
      <Content
        part1={part1 +" "+ Exercises1}
        part2={part2 +" "+Exercises2}
        part3={part3 +" "+ Exercises3}
       
      />
      <Total
        Exercises1={Exercises1}
        Exercises2={Exercises2}
        Exercises3={Exercises3}
      />
    </>
  );
};

export default App;
