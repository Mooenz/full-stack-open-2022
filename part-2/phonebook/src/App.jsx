import React, { useState } from 'react';

// Components
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
  // Persons default
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' },
  ]);

  // State new person
  const [newPerson, setNewPerson] = useState({ name: '', phone: '' });

  // State filter
  const [filter, setfilter] = useState('');

  // newPerson.name exist in persons ?
  const isNewName = persons.find(
    (person) =>
      person.name.toLocaleLowerCase() === newPerson.name.toLocaleLowerCase()
  );

  // Function new person
  const addNewName = (event) => {
    event.preventDefault();

    if (!isNewName) {
      const personObject = {
        name: newPerson.name,
        phone: newPerson.phone,
      };

      setPersons(persons.concat(personObject));
      setNewPerson({ name: '', phone: '' });
    } else {
      alert(`${newPerson.name} is already added to phonebook`);
    }
  };

  // Controller add person.name
  const handleNewName = (event) =>
    setNewPerson({ ...newPerson, name: event.target.value });

  // Controller add person.phone
  const handleNewPhone = (event) =>
    setNewPerson({ ...newPerson, phone: event.target.value });

  // Controller filter
  const handleFilter = (event) => setfilter(event.target.value);

  // What do render
  const personToShow =
    filter === ''
      ? persons
      : persons.filter(
          (person) =>
            person.name
              .toLocaleLowerCase()
              .indexOf(filter.toLocaleLowerCase()) > -1
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <div>
        <h2>add a new</h2>
      </div>
      <h2>Numbers</h2>
      <PersonForm
        addNewName={addNewName}
        handleNewName={handleNewName}
        handleNewPhone={handleNewPhone}
        newPerson={newPerson}
      />
      <Persons personToShow={personToShow} />
    </div>
  );
};

export default App;
