import React from 'react';
import { Wrapper, Card, QRImage, CardContent, Title, Text } from './styled-components';
import QRCodeImage from './image-qr-code.png';

const App = () => {
    return (
        <Wrapper>
            <Card>
                <QRImage src={QRCodeImage} alt="QR Code" />
                <CardContent>
                    <Title>Improve your front-end skills by building projects</Title>
                    <Text>
                        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
                    </Text>
                </CardContent>
            </Card>
        </Wrapper>
    );
};

export default App;
