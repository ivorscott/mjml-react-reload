import React from 'react'

import {
    Mjml,
    MjmlHead,
    MjmlTitle,
    MjmlPreview,
    MjmlBody,
    MjmlSection,
    MjmlColumn,
    MjmlButton,
    MjmlImage,
    MjmlStyle,
    MjmlText,
} from 'mjml-react'

const blue = 'skyblue'

export const generate = () => {
    return (
        <Mjml>
            <MjmlHead>
                <MjmlTitle>Last Minute Offer</MjmlTitle>
                <MjmlPreview>Last Minute Offer..</MjmlPreview>
                <MjmlStyle>{`
                    .blue-column {
                        background-color: ${blue};
                    }
                    .red-column {
                        background-color: #eee;
                    }
                `}</MjmlStyle>
            </MjmlHead>
            <MjmlBody width={500}>
                <MjmlSection fullWidth backgroundColor="#efefef">
                    <MjmlColumn>
                        <MjmlText>
                            <h1>MJML-REACT</h1>
                        </MjmlText>
                        <MjmlImage src="https://cloud.githubusercontent.com/assets/6558790/12450760/ee034178-bf85-11e5-9dda-98d0c8f9f8d6.png" />
                    </MjmlColumn>
                </MjmlSection>
                <MjmlSection>
                    <MjmlColumn>
                        <MjmlText>
                            Edit the React code for this email example and watch
                            the browser refresh
                            <pre>src/server/templates/email-1.js</pre>
                            <strong style={{ color: '#f25' }}>
                                HTML is actually sent from an express server so
                                you can develop your email designs with real
                                data
                            </strong>{' '}
                            from your database or api of choice.
                        </MjmlText>
                        <MjmlText>
                            Normally you would need to refresh the browser every
                            time you made a change, but we already installed a
                            library to do that for you.
                        </MjmlText>
                        <MjmlButton
                            padding="20px"
                            backgroundColor="#346DB7"
                            href="https://github.com/mjmlio/email-templates"
                        >
                            Find MJML templates to Convert to MJML-React
                        </MjmlButton>
                        <MjmlButton
                            padding="20px"
                            backgroundColor="#346DB7"
                            href="https://github.com/wix-incubator/mjml-react"
                        >
                            Learn more about MJML-React
                        </MjmlButton>
                    </MjmlColumn>
                </MjmlSection>
                <MjmlSection>
                    <MjmlColumn cssClass="blue-column">
                        <MjmlText>I am blue</MjmlText>
                    </MjmlColumn>
                    <MjmlColumn cssClass="red-column">
                        <MjmlText>I am gray</MjmlText>
                    </MjmlColumn>
                </MjmlSection>
            </MjmlBody>
        </Mjml>
    )
}
