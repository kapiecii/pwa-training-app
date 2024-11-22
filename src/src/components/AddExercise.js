import React, { useState } from 'react';

const AddExercise = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, reps: parseInt(reps), sets: parseInt(sets), completed: false });
    setName('');
    setReps('');
    setSets('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Exercise Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        required
      />
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default AddExercise;
