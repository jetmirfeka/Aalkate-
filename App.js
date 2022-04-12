import "react-native-gesture-handler";
import React, {useState } from "react";
import { screens, loginScreens } from "./src/navigation/stack";

export default function App() {
  const [logged, setLogged] = useState(false);

  return <>{!logged ? loginScreens() : screens()}</>;
}
