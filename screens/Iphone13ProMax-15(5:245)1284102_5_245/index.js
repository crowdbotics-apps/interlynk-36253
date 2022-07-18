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
      <View style={styles.View_5_246}>
        <Text style={styles.Text_5_246}>
          1. What is Interlynk network? Interlynk network is a distributed
          network that leverages the existing smartphone infrastructure serving
          as an edge gateway for providing connectivity to IoT devices.
          Interlynk network uses BLE (Bluetooth Low Energy) to transmit your
          nearby IoT device data to their existing brands. 2. Does interlynk
          network collect/store my data? Team Interlynk believes in user privacy
          and complete transparency with each party and does not collect or
          share any kind of user data. All data passing through the interlynk is
          completely anonymous and no one can trace any user by it&#39;s data.
          3. Why do we need such network? Interlynk network allows IoT devices
          to connect with internet in any area by which the owner can locate or
          have the data about his/her IoT device. Currently our main aim is to
          help locate, find lost or stolen IoT devices. In future we are going
          to build a network that will help IoT devices connect with Metaverse.
          4. How does the Interlynk application work? To join the Interlynk
          network and be a part of this revolution you just need to install our
          Interlynk application in your smartphone and permit bluetooth and
          location request. Once you&#39;re done with all these permissions the
          application will start connecting your inbuilt bluetooth with the
          nearby IoT devices. While this connection is established you&#39;ll
          earn fraction of crypto token for each packet transferred. Note: You
          have to keep this app running in background to earn crypto token
          hustle free. 5. Why do you need my location? The location of your
          device is only used to locate the IoT device on request of their
          owners near you. This will help them locate the approximate location
          of their IoT devices. 6. What is INTRLYNK token? INTERLYNK token is a
          native cryptocurrency of Interlynk network. It&#39;s rewarded to all
          the contributors out their for their contribution to the network and
          motivate them to participate more. 7. How can I withdraw my INTERLYNK
          tokens? Interlynk is currently in network building phase. We have not
          yet listed our INTERLYNK token to any exchange right now. We are in
          talks with some well known crypto exchanges and get back to you soon
          with the updates. Meanwhile you can keep earning INTERLYNK token and
          contribute in our initiative. 8. How can I send/receive INTERLYNK
          token? To send INTERLYNK token one has to use reciever&#39;s public
          key. Public key is a public address which is shared with others to
          recieve INTERLYNK tokens from their account to your account. You can
          find your public key in &quot;Recieve&quot; button below your current
          balance section. 9. What is private key? Private key is a 12 word
          phrase used in cryptography similar to password. While creating your
          account Interlynk creates a 12 word phrase (private key) for you to
          use it to recover your account. You&#39;ve to go to Settings &gt;
          Account settings &gt; Account backup to access your private key. I
          have an existing Interlynk account which contains my INTERLYNK tokens
          I earned. I mistakenly created new account in my new phone, what
          should I do? You just have to make sure that you have your private key
          with you that you got while creating your first account(read above
          question for reference). Now you don&#39;t need to delete application
          and reinstall it to connect your existing Interlynk account. Go to
          Settings &gt; Account settings &gt; Disconnect my account to
          disconnect your current account. After disconnecting your current
          account your app will restart and you&#39;ll be shown import account
          option. Now you can import your first account by providing your
          private key. 10. Does it slow down my smartphone or consume a lot of
          battery? Clearly No, As Interlynk uses BLE(Bluetooth Low Energy) it
          consumes less energy for data transmission and makes it a more
          efficient way of data transmission. Also it uses very minimal data in
          a day that’s nothing for a smartphone.
        </Text>
      </View>
      <View style={styles.View_5_247}>
        <Text style={styles.Text_5_247}>Back</Text>
      </View>
      <View style={styles.View_5_248}>
        <Text style={styles.Text_5_248}>FAQs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fce81fe-413b-47a3-b5f6-77d5650f6238"
        }}
        style={styles.ImageBackground_5_249}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a85c09ea-f793-4490-968f-1458dc002b3d"
        }}
        style={styles.ImageBackground_5_250}
      />
      <View style={styles.View_5_251}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02e36c18-22bf-4f2c-b54a-2f0557418aba"
          }}
          style={styles.ImageBackground_5_252}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40adb062-813b-4da6-bb16-c10c7bff4e5e"
          }}
          style={styles.ImageBackground_5_253}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("580%") },
  View_5_246: {
    width: wp("85%"),
    minWidth: wp("85%"),
    minHeight: hp("537%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_5_246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_247: {
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
  Text_5_247: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_248: {
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
  Text_5_248: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_249: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_5_250: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_5_251: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("112%")
  },
  ImageBackground_5_252: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_5_253: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
