import React from 'react';

const ExerciseList = ({ exercises, onComplete }) => {
  return (
    <div>
      <h2>Exercise List</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.name} - {exercise.reps} reps x {exercise.sets} sets
            {exercise.completed ? (
              <span> ✅ Completed</span>
            ) : (
              <button onClick={() => onComplete(index)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
