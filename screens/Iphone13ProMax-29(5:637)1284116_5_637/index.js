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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c46bea09-2a3a-42cb-812a-dba499d50f7a"
        }}
        style={styles.ImageBackground_5_638}
      />
      <View style={styles.View_5_642}>
        <Text style={styles.Text_5_642}>Back</Text>
      </View>
      <View style={styles.View_5_643}>
        <Text style={styles.Text_5_643}>Notifications</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fee3c557-1223-4df8-8032-fcfdaa9c35bc"
        }}
        style={styles.ImageBackground_5_644}
      />
      <View style={styles.View_5_648} />
      <View style={styles.View_5_649} />
      <View style={styles.View_50_96}>
        <Text style={styles.Text_50_96}>Notification 1</Text>
      </View>
      <View style={styles.View_50_97}>
        <Text style={styles.Text_50_97}>Notification 2</Text>
      </View>
      <View style={styles.View_50_98}>
        <Text style={styles.Text_50_98}>Notification 3</Text>
      </View>
      <View style={styles.View_50_99}>
        <Text style={styles.Text_50_99}>Notification 4</Text>
      </View>
      <View style={styles.View_50_100}>
        <Text style={styles.Text_50_100}>Notification 5</Text>
      </View>
      <View style={styles.View_50_101}>
        <Text style={styles.Text_50_101}>Notification 6</Text>
      </View>
      <View style={styles.View_50_102}>
        <Text style={styles.Text_50_102}>Notification 7</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dff4ce92-02ba-40e4-9e7e-cd0e385c6025"
        }}
        style={styles.ImageBackground_50_103}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6a2d165-bb70-41ed-92b2-dba7b2349d54"
        }}
        style={styles.ImageBackground_50_104}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6617469b-dae4-4923-9110-77f4bdc89366"
        }}
        style={styles.ImageBackground_50_105}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f0a5a97-2107-4fa4-ad03-7ff63d1e2e5b"
        }}
        style={styles.ImageBackground_50_106}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d202f59-a2f2-45a4-95dc-6659b6a1e01a"
        }}
        style={styles.ImageBackground_50_107}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1d56442-ac39-42e8-9f6e-c23a18b04146"
        }}
        style={styles.ImageBackground_50_108}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("127%") },
  ImageBackground_5_638: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_5_642: {
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
  Text_5_642: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_643: {
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
  Text_5_643: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_644: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_5_648: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1028%"),
    top: hp("-663%"),
    backgroundColor: "rgba(92, 39, 254, 1)"
  },
  View_5_649: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-984%"),
    top: hp("-663%"),
    backgroundColor: "rgba(193, 102, 221, 1)"
  },
  View_50_96: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_50_96: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_97: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_50_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_98: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_50_98: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_99: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_50_99: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_100: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_50_100: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_101: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_50_101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_102: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_50_102: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_50_103: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("45%")
  },
  ImageBackground_50_104: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%")
  },
  ImageBackground_50_105: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71%")
  },
  ImageBackground_50_106: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("84%")
  },
  ImageBackground_50_107: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("97%")
  },
  ImageBackground_50_108: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("110%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
