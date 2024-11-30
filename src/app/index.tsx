import { Button } from "react-native";
import { Text, View } from "react-native";
import {create} from 'zustand'

type Store = {
  count:number
  inc:()=>void
}
const useStore = create<Store>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))


export default function HomeScreen() {
  const { count, inc } = useStore()
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{count}</Text>
      <Button title="one up" onPress={inc}></Button>
    </View>
  );
}
