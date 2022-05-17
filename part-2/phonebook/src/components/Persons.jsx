const Persons = ({ personToShow }) => {
  return (
    <div>
      {personToShow.map(({ name, phone }) => (
        <div key={name}>
          {name} {phone}
        </div>
      ))}
    </div>
  );
};

export default Persons;
