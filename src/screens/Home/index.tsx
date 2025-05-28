import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../libs/Colors';
import CustomButton from '../../common/Components/CustomButton';
import CustomHeader from '../../common/Components/CustomHeader';

interface HomeProps {
  navigation: any;
}

interface homeOptions {
  id: number;
  title: string;
  onCallback: () => void;
}

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const options: homeOptions[] = [
    {
      id: 1,
      title: 'See Question one',
      onCallback: () => {
        navigation.navigate('CalculatorScreen');
      },
    },
    {
      id: 2,
      title: 'See Question Two',
      onCallback: () => {
        navigation.navigate('NavbarPage');
      },
    },
    {
      id: 3,
      title: 'See Question Three',
      onCallback: () => {
        navigation.navigate('TwoSumScreen');
      },
    },
  ];

  // render Heaader
  const renderHeader = () => {
    return <CustomHeader headerTitle="Home" />;
  };

  // render Buttons
  const renderButtons = () => {
    return (
      <View style={{marginHorizontal: 20}}>
        {options.map((item: homeOptions) => {
          return (
            <View style={{marginTop: 10}}>
              <CustomButton btnString={item.title} onClick={item.onCallback} />
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {/* render Header */}
      {renderHeader()}
      {/* render Buttons */}
      {renderButtons()}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.whiteColor,
    flex: 1,
  },
  textStyle: {
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 25,
    color: Colors.black,
  },
});

export default HomeScreen;
