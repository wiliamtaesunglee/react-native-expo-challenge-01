import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';

const accelerations = [{
  "slug": "reactnative-online-1",
  "name": "React Native",
  "is_disabled": false,
  "subscription_start_at": "2019-07-08T00:00:00-03:00",
  "subscription_finish_at": "2019-07-28T23:59:59-03:00",
  "start_at": "2019-08-17T00:00:00-03:00",
  "finish_at": "2019-11-03T00:00:00-03:00",
  "location": "Online",
  "banner_url": "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/reactnative-online-1/banner.jpg",
  "home_banner_url": "",
  "color_scheme": "7800FF",
  "company_count": 1
}, {
  "slug": "adxp-datascience-joinville-1",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-08-19T00:00:00-03:00",
  "start_at": "2019-08-19T00:00:00-03:00",
  "finish_at": "2019-10-23T23:59:59-03:00",
  "location": "DevHub Joinville, SC",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-joinville-2",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-08-20T00:00:00-03:00",
  "start_at": "2019-08-20T00:00:00-03:00",
  "finish_at": "2019-10-24T23:59:59-03:00",
  "location": "DevHub Joinville, SC",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-sp-1",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-09-23T00:00:00-03:00",
  "start_at": "2019-09-23T00:00:00-03:00",
  "finish_at": "2019-11-27T23:59:59-03:00",
  "location": "a confirmar",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "adxp-datascience-sp-2",
  "name": "ADxp Data Science",
  "is_disabled": false,
  "subscription_start_at": "2019-07-09T00:00:00-03:00",
  "subscription_finish_at": "2019-09-24T00:00:00-03:00",
  "start_at": "2019-09-24T00:00:00-03:00",
  "finish_at": "2019-11-28T23:59:59-03:00",
  "location": "a confirmar",
  "banner_url": "",
  "home_banner_url": "",
  "color_scheme": "",
  "company_count": 1
}, {
  "slug": "python-online-1",
  "name": "Python Women",
  "is_disabled": false,
  "subscription_start_at": "2019-07-22T00:00:00-03:00",
  "subscription_finish_at": "2019-08-11T23:59:59-03:00",
  "start_at": "2019-08-24T00:00:00-03:00",
  "finish_at": "2019-11-02T23:59:59-03:00",
  "location": "Online",
  "banner_url": "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/python-online-1/banner.jpg",
  "home_banner_url": "",
  "color_scheme": "212133",
  "company_count": 1
}]

function Item({ title, image, course, date }) {
  const courseImg = {uri: 'https://fakeimg.pl/150x150/'}

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
}

const codenationLogo = {uri: "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png"}

const Acceleration = () => {
  return (
    <View>
        <Image style={styles.logo}
          source={codenationLogo}
        />
        <Text style={styles.line}></Text>
        <ScrollView style={styles.container}>
          <FlatList
            data={accelerations}
            renderItem={({ item }) => {
              return(
                <Item
                  date={item.start_at}
                  course={item.location}
                  title={item.name}
                />
               )}}
            keyExtractor={item => item.slug}
          />
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 30
  },
  line: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 4,
    backgroundColor: '#7800FF'

  },
  logo: {
    marginLeft: 30,
    marginTop: 50,
    marginBottom: 20,
    justifyContent: 'flex-start',
    width: 250,
    height: 50
  },
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
});

export default Acceleration;
