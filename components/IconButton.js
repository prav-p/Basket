import React from "react";
import { TouchableOpacity, Image } from "react-native";

import { COLORS } from "../constants";

const IconButton = ({ containerStyle, iconStyle, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "cneter",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: COLORS.primary,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
