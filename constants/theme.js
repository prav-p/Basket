import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#E38732", // orange
  secondary: "#FFFFFF", // white

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",
  darkOrange: "#E56E00",
  dropShadow: "#FF7A00",
  transparent: "transparent",
  darkGray: "#6D6D6D",
  lightGray: "#F3F3F3",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  cornerRadius: 22,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 72, // landing
  h1: 30, //text in buttons
  h2: 60, // Basket , Confirmation , Hello John, Sign Up , Login
  body1: 18, // registration page , departments,address
  body2: 30, // Your basket is empty
  body3: 18, // subtotal and subtotal price
  body4: 16, // price in store
  body5: 12, // item name and count
  body6: 18, // add to basket button in item page
  body7: 16, // Item name in chekcout page
  body8: 12, // tab

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "SignikaNegative-Bold",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {
    fontFamily: "SignikaNegative-Bold",
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    fontFamily: "SignikaNegative-Bold",
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  body1: {
    fontFamily: "SignikaNegative-SemiBold",
    fontSize: SIZES.body1,
    lineHeight: 22,
  },
  body2: {
    fontFamily: "SignikaNegative-SemiBold",
    fontSize: SIZES.body2,
    lineHeight: 22,
  },
  body3: {
    fontFamily: "SignikaNegative-Bold",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "SignikaNegative-SemiBold",
    fontSize: SIZES.body4,
    lineHeight: 36,
  },
  body5: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
  body6: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: SIZES.body6,
    lineHeight: 22,
  },
  body7: {
    fontFamily: "SignikaNegative-Regular",
    fontSize: SIZES.body7,
    lineHeight: 22,
  },
  body8: {
    fontFamily: "SignikaNegative-SemiBold",
    fontSize: SIZES.body8,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
