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
      <View style={styles.View_5_334}>
        <Text style={styles.Text_5_334}>Back</Text>
      </View>
      <View style={styles.View_5_335}>
        <Text style={styles.Text_5_335}>Receive</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5448c613-6b3c-4cff-92ae-f9ab6d31c4fe"
        }}
        style={styles.ImageBackground_5_336}
      />
      <View style={styles.View_5_338} />
      <View style={styles.View_5_339} />
      <View style={styles.View_5_340}>
        <Text style={styles.Text_5_340}>Share</Text>
      </View>
      <View style={styles.View_5_341}>
        <Text style={styles.Text_5_341}>Copy</Text>
      </View>
      <View style={styles.View_5_342}>
        <Text style={styles.Text_5_342}>Public key</Text>
      </View>
      <View style={styles.View_5_343}>
        <Text style={styles.Text_5_343}>
          Share your public key to receive interlynk token.
        </Text>
      </View>
      <View style={styles.View_45_26}>
        <Text style={styles.Text_45_26}>OR</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47ae7f84-4ff8-4bad-a767-f73d81d8a088"
        }}
        style={styles.ImageBackground_5_344}
      />
      <View style={styles.View_45_27}>
        <Text style={styles.Text_45_27}>Show QR Code</Text>
      </View>
      <View style={styles.View_5_345} />
      <View style={styles.View_50_65}>
        <Text style={styles.Text_50_65}>
          AndosndusbdbskAkdbdNdGHFB92xbkwsbs927sbbzks9101nsjwiAndosndusbdbskAkdbdNdGHFB92xbkwsbs927sbbzks9101nsjwiAndosndusbdbskAkdbdNdGHFB92xbkwsbs927sbbzks9101nsjwi
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("127%") },
  View_5_334: {
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
  Text_5_334: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_335: {
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
  Text_5_335: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_336: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_5_338: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("114%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_5_339: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("114%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_5_340: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("115%"),
    justifyContent: "flex-start"
  },
  Text_5_340: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_341: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("115%"),
    justifyContent: "flex-start"
  },
  Text_5_341: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_342: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_5_342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_343: {
    width: wp("85%"),
    minWidth: wp("85%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_5_343: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_26: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_45_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_344: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_45_27: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_45_27: {
    color: "rgba(193, 101, 221, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_345: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("31%")
  },
  View_50_65: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_50_65: {
    color: "rgba(204, 204, 204, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
