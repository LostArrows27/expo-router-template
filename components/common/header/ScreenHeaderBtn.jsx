import { Image, TouchableOpacity, Text } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    // NOTE: button = touchable opacity
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        style={styles.btnImg(dimension)}
        source={iconUrl}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
