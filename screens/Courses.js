import React from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions, CheckBox } from "react-native";
const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["HTML", "CSS", "JS"], // optional
  data: [0.4, 0.6, 0.8],
};
const chartConfig = {
  backgroundGradientFrom: "#111111",
  backgroundGradientFromOpacity: 0.2,
  backgroundGradientTo: "#000000",
  backgroundGradientToOpacity: 0.8,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 5, // optional, default 3
  barPercentage: 0.6,
  useShadowColorFromDataset: false, // optional
};

const courses = [
  { title: "loop" },
  { title: "array" },
  { title: "if else" },
  { title: "function" },
  { title: "Dom" },
  { title: "arthimitic" },
  { title: "asyncronous" },
  { title: "promises" },
  { title: "call back" },
  { title: "event loop" },
  { title: "api" },
  { title: "queue" },
  { title: "call stack" },
  { title: "cli" },
  { title: "loop" },
  { title: "loop" },
  { title: "loop" },
  { title: "loop" },
  { title: "loop" },
  { title: "loop" },
  { title: "queue" },
  { title: "queue" },
  { title: "queue" },
  { title: "queue" },
  { title: "queue" },
  { title: "queue" },
];

function Courses() {
  return (
    <View>
      <ProgressChart
        data={data}
        width={screenWidth}
        height={200}
        strokeWidth={15}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <View style={styles.view}>
              <Text>{item.title}</Text>
              <CheckBox style={{ position: "absolute", right: 0 }} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
  },
  view: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Courses;
