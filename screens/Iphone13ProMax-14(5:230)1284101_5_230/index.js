import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_5_242}>
        <Text style={styles.Text_5_242}>
          Interlynk network is certain that there should be total transparency
          between users and the network. User privacy and data security are
          supported and encouraged by Interlynk network in an effort to make
          this platform more secure for users. To address the problem of smart
          IoT device internet access, Interlynk is developing a distributed BLE
          (Bluetooth Low Energy) network. Interlynk is an application-based
          service that tracks and transmits data to device owners and parent
          companies through its network using your BLE (Bluetooth Low Energy)
          and location. Our application collects data from nearby IoT devics and
          relay that BLE data along with location anonymously to us, and we pass
          that data to respective owner of that device. In case the data ever
          stored ( if ever ) the data is collected and stored anonymously.
          Interlynk wishes to make it clear that no user or contribution data is
          ever saved or given to a third party. With the assistance of
          individuals like you from all around the world, Interlynk Network is
          working to solve this under-reported issue while keeping our
          users&#39; privacy in mind.
        </Text>
      </View>
      <View style={styles.View_45_10}>
        <Text style={styles.Text_45_10}>Back</Text>
      </View>
      <View style={styles.View_45_11}>
        <Text style={styles.Text_45_11}>Privacy policy</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c172c63-3665-4c3b-9828-f3efec4f0d55"
        }}
        style={styles.ImageBackground_45_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ae7f7b6-0e70-46fb-b536-15ffd51bc2de"
        }}
        style={styles.ImageBackground_45_13}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("158%") },
  View_5_242: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_5_242: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_10: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_45_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_11: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_45_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_12: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_45_13: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
