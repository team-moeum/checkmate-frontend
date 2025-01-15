import { Text, View } from "react-native";
import useSWR from "swr";

const fetcher = async (path: string) => {
  const res = await fetch(path);
  const data = await res.json();
  return data;
};

export default function HomeScreen() {
  const { data, error, isLoading } = useSWR("/api/user/123", fetcher);
  if (error)
    return (
      <View>
        <Text>error</Text>
      </View>
    );
  if (isLoading)
    return (
      <View>
        <Text>Home Screen</Text>
        <Text>loading</Text>
      </View>
    );
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{data}</Text>
      <Text>Home Screen</Text>
    </View>
  );
}
