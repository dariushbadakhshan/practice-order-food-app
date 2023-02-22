import styled from "styled-components";

type props = {
  url: string;
};
const Image = styled.div<props>`
  background-image: url(${(props) => props.url});
  display: inline-block;
  width: 100%;
`;
export default Image;
