import styled from '../common/styled';

const BorderedBlock = styled.div`
  width: 100%;
  display: block;
  border-bottom: 4px solid ${({theme}) => theme.primaryColor};
  background: ${({theme}) => theme.black};
`;

export default BorderedBlock;
