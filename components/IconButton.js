import React from "react";
import { TouchableOpacity, Image } from "react-native";

import { COLORS } from "../constants";

const IconButton = ({ containerStyle, iconStyle, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 16,
          height: 16,
          tintColor: COLORS.primary,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
