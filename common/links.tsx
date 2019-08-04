import styled from './styled';

export const ButtonLink = styled.a`
  color: white;
  text-decoration: none;
  background: ${props => props.theme.primaryColor};
  padding: 10px 15px;
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
  padding: 12px 40px;
  &:hover {
    background: ${({theme}) => theme.primaryColor};
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  width: 100%;
  display: block;
  text-align: left;
  padding-bottom: ${props => props.theme.spacing}px;
  cursor: pointer;
`;

export const FooterLink = styled(NavLink)`
  display: inline-block;
  width: auto;
  padding: ${props => props.theme.spacing}px;
`;
