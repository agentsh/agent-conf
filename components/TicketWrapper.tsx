import styled from '../common/styled';

const TicketWrapper = styled.div`
  padding: ${props => props.theme.spacing}px 0;

  .tito-wrapper {
    border: none;
    color: white;
    margin: 0 !important;
    .tito-ticket.row {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0 !important;
      border: none !important;
      padding: 10px 15px !important;
      margin-bottom: 20px !important;
      .tito-ticket-name {
        font-size: 25px;
        font-weight: bold;
      }
    }
  }
  .tito-badge-link {
    display: none;
  }
  .tito-submit {
    background: ${props => props.theme.primaryColor}!important;
    border: none !important;
    text-transform: uppercase;
    border-radius: 0 !important;
    &:hover {
      background: ${props => props.theme.primaryColor}!important;
    }
  }
`;

export default TicketWrapper;
