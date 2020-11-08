import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";

export default class StarScren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.getParam("name"),
      data: {}
    };
  }

  componentDidMount() {
    const { name } = this.state;
    this.getStarDetails(name);
  }

  getStarDetails = name => {
    const url = `http://localhost:5000/star?name=${name}`;
    axios
      .get(url)
      .then(response => {
        this.setState({ data: response.data.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    const { name, data } = this.state;
    if (data) {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/background.png")}
            style={styles.image}
          >
            <View style={styles.upperContainer}>
              <Text style={styles.starName}>{data.name}</Text>
            </View>
            <View style={styles.middleContainer}>
              <View>
                <Text style={styles.text}>{data.mass}</Text>
                <Text style={styles.text}>Mass</Text>
              </View>
              <View>
                <Text style={styles.text}>{Math.round(data.gravity)}</Text>
                <Text style={styles.text}>Gravity</Text>
              </View>
              <View>
                <Text style={styles.text}>{data.radius}</Text>
                <Text style={styles.text}>Radius</Text>
              </View>
            </View>
            <View style={styles.lowerContainer}>
              <Text style={styles.text}>{data.distance}</Text>
              <Text style={styles.text}>Distance from Earth</Text>
            </View>
          </ImageBackground>
          <SafeAreaView />
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%"
  },
  upperContainer: {
    flex: 0.63,
    justifyContent: "center",
    alignItems: "center"
  },
  starName: {
    fontSize: RFValue(40),
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff"
  },
  middleContainer: {
    flex: 0.22,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  text: {
    fontSize: RFValue(18),
    color: "#fff",
    fontWeight: "400",
    textAlign: "center"
  },
  lowerContainer: {
    flex: 0.15,
    backgroundColor: "#151F39",
    justifyContent: "center",
    alignItems: "center"
  }
});
