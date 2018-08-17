import GlobalTheme from './type';

const theme: GlobalTheme = {
  themeInfo: {
    name: 'dark'
  },
  theme: {
    backgroundDefault: '#0A1F44',
    buttons: {
      primary: {
        textDefaultColor: "#FFFFFF",
        buttonDefaultColor: "#8B4FE3",
        buttonDefaultHoverColor: "#C36CFF",
        buttonDefaultActiveColor: "#601DC6",
        buttonDefaultFocusColor: "#8B4FE3",
      },
      secondary: {
        textDefaultColor: "#601DC6",
        buttonDefaultColor: "#FFFFFF",
        buttonDefaultHoverColor: "#F1F2F4",
        buttonDefaultActiveColor: "#E3E6EB",
        buttonDefaultFocusColor: "#FFFFFF",
      },
      negative: {
        textDefaultColor: "#FFFFFF",
        buttonDefaultColor: "#FF264A",
        buttonDefaultHoverColor: "#FF5F7A",
        buttonDefaultActiveColor: "#E41739",
        buttonDefaultFocusColor: "#FF264A",
      }
    }
  }
}

export default theme;