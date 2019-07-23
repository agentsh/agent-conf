import styled from '../common/styled';

// export interface SimpleContentWrapper {
//   color: string;
//   background: string;
// }

const BordeprimaryColorImage = styled.img`
  width: 100%;
  display: block;
  border-bottom: 4px solid ${({theme}) => theme.primaryColor};
`;

export default BordeprimaryColorImage;
