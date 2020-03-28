import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AccelerationItem = ({ title, image, course, date }) => {
  const courseImg = {uri: image }
  return (
    <View style={styles.courses}>
      <View style={styles.courseImgCont}>
        <Image
          style={styles.courseImg}
          source={courseImg}
        />
      </View>
      <View style={styles.courseInfos}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{course}</Text>
        <Text style={styles.date}>{date.split('T')[0].split('-').reverse().join('/')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  courses: {
    borderWidth: 2,
    borderColor: '#EFEFEF',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30
  },
  courseInfos: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    display: 'flex',
    justifyContent: 'space-around'
  },
  courseImg: {
    borderWidth: 2,
    borderColor: '#EFEFEF',
    width: 100,
    height: 100
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  location: {
    color: '#7800FF',
    fontSize: 18
  },
  date: {
    fontSize: 18
  }
})

export default AccelerationItem;
