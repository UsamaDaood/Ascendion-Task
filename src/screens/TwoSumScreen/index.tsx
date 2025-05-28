import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const TwoSumScreen = () => {
  const [input, setInput] = useState('');
  const [target, setTarget] = useState('');
  const [result, setResult] = useState<number[] | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    // Validate and parse numbers
    const numberStrings = input.split(',').map(num => num.trim());
    const numbers = numberStrings.map(num => parseInt(num, 10));

    if (numberStrings.length < 2 || numbers.some(isNaN)) {
      setError('Please enter at least two valid numbers separated by commas.');
      return;
    }

    const targetNum = parseInt(target, 10);
    if (isNaN(targetNum)) {
      setError('Please enter a valid number for target.');
      return;
    }

    const res = twoSum(numbers, targetNum);
    if (res.length === 0) {
      setError('No valid pair found that adds up to the target.');
    } else {
      setResult(res);
    }
  };

  const twoSum = (numbers: number[], target: number): number[] => {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === target) return [left + 1, right + 1];
      else if (sum < target) left++;
      else right--;
    }

    return [];
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Two Sum II - Sorted Input</Text>

      <Text style={styles.label}>Enter sorted numbers (comma separated):</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 1,2,3,4"
        keyboardType="default"
        value={input}
        onChangeText={setInput}
      />

      <Text style={styles.label}>Enter target:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 5"
        keyboardType="numeric"
        value={target}
        onChangeText={setTarget}
      />

      <Button title="Find Indices" onPress={handleCalculate} />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {result && (
        <Text style={styles.result}>
          Result: [{result[0]}, {result[1]}]
        </Text>
      )}
    </ScrollView>
  );
};

export default TwoSumScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    marginTop: 12,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  error: {
    marginTop: 10,
    color: 'red',
    textAlign: 'center',
    fontWeight: '500',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
    color: '#007bff',
    textAlign: 'center',
  },
});
