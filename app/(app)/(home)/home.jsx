import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Pressable,
} from "react-native";

import axios from "axios";
import { useEffect, useState } from "react";
import { router } from "expo-router";

export default function HomeScreen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => {
                  router.navigate({
                    pathname: "/room",
                    params: { id: item._id },
                  });
                }}
              >
                <Text>{item.title}</Text>
              </Pressable>
            );
          }}
          keyExtractor={(item) => {
            return String(item._id);
          }}
        />
      )}
    </SafeAreaView>
  );
}
