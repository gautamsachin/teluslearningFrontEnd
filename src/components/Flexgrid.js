
        import React from 'react';
        import FlexGrid from '@tds/core-flex-grid';
        import Box from '@tds/core-box';
        import Heading from '@tds/core-heading';
        import Text from '@tds/core-text';
        import ButtonLink from '@tds/core-button-link'


         const TvAdd  = ()=>{


            return (
            <FlexGrid>
        <FlexGrid.Row xsReverse={true} smReverse={true} mdReverse={false}>
            <FlexGrid.Col xs={12} md={0}>
            </FlexGrid.Col>
            <FlexGrid.Col xs={12} md={6}>
            <Box between={3}>
                <Box between={4}>
                {/* Heading level 4 with an h1 tag */}
                <Heading level="h4" tag="h1">
                    Consider this: $0 first month
                </Heading>

                {/* Heading level 4 with an h3 tag */}
                <Heading level="h1" tag="h2">
                    Stream live TV on any screen with Pik TV
                </Heading>
                </Box>

                <Text>
                Stream live TV or On Demand shows and movies on any screen with TELUS Pik TV
                <sup>TM</sup>. Get Pik TV from just $10 a month, and get your first month for $0
                <sup>1</sup> when you sign up.
                </Text>

                <div>
                <ButtonLink>Get Started</ButtonLink>
                </div>
            </Box>
            </FlexGrid.Col>
            <FlexGrid.Col xs={0} md={6}>
        
            </FlexGrid.Col>
        </FlexGrid.Row>
        </FlexGrid>
            )
        }

export default TvAdd