import GlobalTheme from './type';

const theme: GlobalTheme = {
  themeInfo: {
    name: 'default'
  },
  theme: {
    backgroundDefault: '#601DC6',
    buttons: {
      primary: {
        textDefaultColor: "#0A1F44",
        buttonDefaultColor: "#00FFFC",
        buttonDefaultHoverColor: "#44FFFD",
        buttonDefaultActiveColor: "#00E7E4",
        buttonDefaultFocusColor: "#00FFFC",
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