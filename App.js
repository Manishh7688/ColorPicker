import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
} from "react-native"
import React, { useEffect, useState } from "react"
import Clipboard from "@react-native-clipboard/clipboard"

const App = () => {
  const [colors, setColors] = useState([])
  useEffect(() => {
    generateColor()
  }, [])
  const getColor = () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .toUpperCase()
      .padStart(2, 0)
  const generateColor = () => {
    let temp_color = []

    for (let i = 0; i < 3; i++) {
      const red_color = getColor()
      const green_color = getColor()
      const blue_color = getColor()

      temp_color = [...temp_color, `#${red_color}${green_color}${blue_color}`]
      // console.log("==============================")
    }
    setColors(temp_color)
  }
  return (
    <View>
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              // onPress={() => {
              //   Clipboard.setString(item)
              //   alert(`Color copied ${item}`)
              // }}
              style={{
                backgroundColor: item,
                height: Dimensions.get("window").height / 3,
                width: "100%",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 20,
                  marginTop: 50,
                  color: "#fff",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
      <View
        style={{
          backgroundColor: "#000",
          width: "100%",
          height: "20%",
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 10,
          alignSelf: "center",
        }}
      >
        <TouchableOpacity onPress={() => generateColor()}>
          <Text
            style={{
              color: "#fff",
              alignSelf: "center",
              fontSize: 20,
              fontWeight: "800",
              marginBottom: 20,
            }}
          >
            👎Generate Color👍
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App
