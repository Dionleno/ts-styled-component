
export default interface GlobalTheme {
  themeInfo: {
    name: String;
  },
  theme: {
    backgroundDefault: String;
    buttons: {
      primary: {
        textDefaultColor: String;
        buttonDefaultColor: String;
        buttonDefaultHoverColor: String;
        buttonDefaultActiveColor: String;
        buttonDefaultFocusColor: String;
      },
      secondary: {
        textDefaultColor: String;
        buttonDefaultColor: String;
        buttonDefaultHoverColor: String;
        buttonDefaultActiveColor: String;
        buttonDefaultFocusColor: String;
      },
      negative: {
        textDefaultColor: String;
        buttonDefaultColor: String;
        buttonDefaultHoverColor: String;
        buttonDefaultActiveColor: String;
        buttonDefaultFocusColor: String;
      }
    }
  }
}