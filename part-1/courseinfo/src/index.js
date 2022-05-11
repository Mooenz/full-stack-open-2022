import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Part = ({ part }) => (
  <>
    <p>
      {part.title} {part.exercises}
    </p>
  </>
);

const Content = ({ content }) => {
  return (
    <div>
      <Part part={content.one} />
      <Part part={content.two} />
      <Part part={content.three} />
    </div>
  );
};

const Total = ({ total }) => {
  return <p>Number of exercises: {total}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: {
      one: {
        title: 'Fundamentals of React',
        exercises: 10,
      },
      two: {
        title: 'Using props to pass data',
        exercises: 7,
      },
      three: {
        title: 'State of a component',
        exercises: 14,
      },
    },
  };

  return (
    <div>
      <Header title={course.name} />
      <Content content={course.parts} />
      <Total
        total={
          course.parts.one.exercises +
          course.parts.two.exercises +
          course.parts.three.exercises
        }
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
