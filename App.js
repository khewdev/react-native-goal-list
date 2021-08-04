import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  // const removeGoalHandler = goalId => {
  //   setCourseGoals(currentGoals => {
  //     return currentGoals.filter(goal => )
  //   })
  // }



  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
    </View>
  );

}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});