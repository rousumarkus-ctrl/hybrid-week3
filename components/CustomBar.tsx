import { StackHeaderProps } from "@react-navigation/stack"
import { Appbar } from "react-native-paper"

const CustomBar = ({back,navigation}:StackHeaderProps) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={"MD Nav Demo"}></Appbar.Content>
      {back?(
        <Appbar.BackAction onPress={() => navigation.pop()}></Appbar.BackAction>
      ):(
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate("Second")}></Appbar.Action>
      )}
    </Appbar.Header>
  )

}

export default CustomBar