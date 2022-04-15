import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./Time.style";

const Time = ({ style = true }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    let secTimer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={style ? styles.text : styles.textDark}>{time}</Text>
    </View>
  );
};

export default Time;
