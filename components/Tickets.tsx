import React, { FunctionComponent } from 'react';

import { H2, ColoredBold } from '../common/typography';
import { Padded, Spaced } from '../common/Grid';
import { theme } from '../common/styled';
import HeadlineGroup from './HeadlineGroup';
import SimpleContentWrapper from './SimpleContentWrapper';
import TicketWrapper from './TicketWrapper';
import Link from 'next/link';
import { ButtonLink } from '../common/links';

const Tickets: FunctionComponent = (): JSX.Element => {
  return (
    <div id='tickets'>
      <SimpleContentWrapper color={theme.white} background={theme.black}>
        <Spaced multipleTop={5} multipleBottom={5}>
          <HeadlineGroup
            lineColor={theme.primaryColor}
            headline={
              <H2 color={theme.primaryColor}>
                Get <br />
                Tickets
              </H2>
            }
          />
          <Padded multiple={5}>
            <p>There are currently no tickets on sale!</p>

            {/* <TicketWrapper>
              <tito-widget event="ac/agentconf20">
                <a href="https://ti.to/ac/agentconf20" target="_blank" rel="noopener noreferrer">
                  <ButtonLink>get Tickets</ButtonLink>
                </a>
              </tito-widget>
            </TicketWrapper>
            <p>
              <ColoredBold>** Ski Addon includes</ColoredBold>
              <ul>
                <li>Transfer Dornbin to Lech</li>
                <li>2 nights in the Hostel</li>
                <li>2 skiing tickets</li>
                <li>Transfer back to Dornbirn</li>
              </ul>
            </p> */}
          </Padded>
        </Spaced>
      </SimpleContentWrapper>
    </div>
  );
};
export default Tickets;
