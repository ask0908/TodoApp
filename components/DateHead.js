import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const {top} = useSafeAreaInsets();

  return (
    <>
      <View>
        <StatusBar backgroundColor="#26A69A" barStyle="light-content" />
        <View style={styles.block}>
          <Text style={styles.dateText}>
            {year}년 {month}월 {day}일
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26A59A',
  },
  block: {
    padding: 16,
    backgroundColor: '#26A39A',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
