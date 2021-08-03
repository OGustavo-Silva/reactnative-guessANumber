//Another way to set styles with component globally managed style.
//Same result of BodyText and TitleText components
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    bodyText: {
        fontFamily: 'ebrima'
    },
    title: {
        fontFamily: 'ebrima-bold'
    }
});