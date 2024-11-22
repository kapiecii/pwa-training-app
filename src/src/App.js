import React, { useState, useEffect } from 'react';
import AddExercise from './components/AddExercise';
import ExerciseList from './components/ExerciseList';
import ProgressChart from './components/ProgressChart';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from './utils/localStorageHelper';
import './App.css'; // スタイルをインポート

const App = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const storedExercises = loadFromLocalStorage('exercises');
    if (storedExercises) {
      setExercises(storedExercises);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage('exercises', exercises);
  }, [exercises]);

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  const completeExercise = (index) => {
    const updatedExercises = exercises.map((exercise, i) =>
      i === index ? { ...exercise, completed: true } : exercise
    );
    setExercises(updatedExercises);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Fitness Tracker</h1>
      </header>
      <main className="main-content">
        <section className="add-exercise-section">
          <AddExercise onAdd={addExercise} />
        </section>
        <section className="exercise-list-section">
          <ExerciseList exercises={exercises} onComplete={completeExercise} />
        </section>
        <section className="progress-chart-section">
          <ProgressChart exercises={exercises} />
        </section>
      </main>
    </div>
  );
};

export default App;
