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
          width: 15,
          height: 15,
          tintColor: COLORS.primary,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
