import React, {FunctionComponent} from 'react';
import styled from '../common/styled';

export interface ISimpleContentWrapper {
  color: string;
  background: string;
}

const ColorWrapper = styled.div<ISimpleContentWrapper>`
  background: ${(props: ISimpleContentWrapper) => props.background};
  color: ${(props: ISimpleContentWrapper) => props.color};
`;

const Container = styled.div`
  padding: 30px 15px;
  width: 1024px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const SimpleContentWrapper: FunctionComponent<ISimpleContentWrapper> = ({children, ...rest}) => {
  return (
    <ColorWrapper {...rest}>
      <Container>{children}</Container>
    </ColorWrapper>
  );
};
export default SimpleContentWrapper;
