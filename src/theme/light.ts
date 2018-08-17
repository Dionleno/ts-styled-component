import GlobalTheme from './type';

const theme: GlobalTheme = {
  themeInfo: {
    name: 'light'
  },
  theme: {
    backgroundDefault: '#F8F9FB',
    buttons: {
      primary: {
        textDefaultColor: "#FFFFFF",
        buttonDefaultColor: "#601DC6",
        buttonDefaultHoverColor: "#8B4FE3",
        buttonDefaultActiveColor: "#5313B3",
        buttonDefaultFocusColor: "#601DC6",
      },
      secondary: {
        textDefaultColor: "#0A1F44",
        buttonDefaultColor: "#00FFFC",
        buttonDefaultHoverColor: "#44FFFD",
        buttonDefaultActiveColor: "#00E7E4",
        buttonDefaultFocusColor: "#00FFFC",
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