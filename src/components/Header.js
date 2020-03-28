import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = () => {
  const codenationLogo = {uri: "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png"}
  return(
      <View>
        <Image style={styles.logo}
          source={codenationLogo}
        />
        <Text style={styles.line}></Text>
      </View>
  )
};

const styles = StyleSheet.create({
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
})

export default Header;
