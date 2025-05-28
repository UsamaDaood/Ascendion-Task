import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CustomHeader from '../../common/Components/CustomHeader';
import Colors from '../../libs/Colors';
import {IC_BACK_BUTTON} from '../../libs/ImageSources';
import {HomeProps} from '../../libs/interface';

const CalculatorScreen: React.FC<HomeProps> = ({navigation}) => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [total, setTotal] = useState<number | null>(null);

  const calculateSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setTotal(sum);
  };

  // render Heaader
  const renderHeader = () => {
    return (
      <CustomHeader
        headerTitle="Calculator"
        leftIcon={IC_BACK_BUTTON}
        callBackLeftImage={() => {
          navigation.goBack();
        }}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      {renderHeader()}
      <View style={styles.container}>
        <Text style={styles.title}>Simple Calculator</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter first number"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter second number"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
        />
        <TouchableOpacity style={styles.button} onPress={calculateSum}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        <Text style={styles.result}>
          Total: {total !== null ? total : '--'}
        </Text>
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    width: '90%',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  result: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
  },
});
