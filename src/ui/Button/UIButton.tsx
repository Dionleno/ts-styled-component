import styled from 'styled-components';

const visibledTypeColors = (props: any, findObject: any) => {
  const { theme: { buttons } } = props;
  const ObjectKey = Object.keys(buttons).filter((v) => v === props.color);
  const colors = buttons[String(ObjectKey) || 'primary'];
  return colors[findObject];
}


const UiButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    color: ${props => visibledTypeColors(props, 'textDefaultColor')};
    background-color: ${props => visibledTypeColors(props, 'buttonDefaultColor')};
    border-color: ${props => visibledTypeColors(props, 'buttonDefaultColor')};

    &:hover {
      background-color: ${props => visibledTypeColors(props, 'buttonDefaultHoverColor')};
      border-color: ${props => visibledTypeColors(props, 'buttonDefaultHoverColor')};
    }
  
    &:active {
      background-color: ${props => visibledTypeColors(props, 'buttonDefaultActiveColor')};
      border-color: ${props => visibledTypeColors(props, 'buttonDefaultActiveColor')};
    }
  
    &:focus {
      background-color: ${props => visibledTypeColors(props, 'buttonDefaultFocusColor')};
      border-color: ${props => visibledTypeColors(props, 'buttonDefaultFocusColor')};
    }
`;


export default UiButton;