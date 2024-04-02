import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState(jobTypes[0]);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hellos LostArrows27</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value=""
            onChange={() => {
              // TODO: implement search
            }}
            placeholder="What are you looking for?"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            style={styles.searchBtnImage}
            source={icons.search}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
              style={styles.tab(activeJobType, item)}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          data={jobTypes}
        />
      </View>
    </View>
  );
};

export default Welcome;
