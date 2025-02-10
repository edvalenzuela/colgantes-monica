import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://www.colgantesmonica.cl';

export default function EmailTemplate ({
  name,
  message,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo pedido de colgante</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={text}>Hola <span style={{ fontWeight: 'bold' }}>{name}</span>:</Text>
            <Text style={text}>
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundImage: `url(${baseUrl}/img/leaves.webp)`,
  backgroundRepeat: "repeat",
  padding: '10px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '45px',
};

const text = {
  fontSize: '16px',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
};
