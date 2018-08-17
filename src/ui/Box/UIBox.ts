import styled from 'styled-components';
const Box = styled.div`
  width: 600px;
  height: 300px;
  background-color: ${({ theme: { backgroundDefault } }) => backgroundDefault};
`;

export default Box;