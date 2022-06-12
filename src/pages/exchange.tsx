import { Card, Container, Spacer, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import CurrencyPicker from '../components/Exchange/CurrencyPicker';

const getCurrency = async (base: string, currency: string) =>
    await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${currency}`);

const Exchange = () => {
    const [base, setBase] = useState<{ name: string; value: string }>({ name: 'Base Currency', value: '' });
    const [exchange, setExchange] = useState<{ name: string; value: string }>({ name: 'Exchange Currency', value: '' });
    const [result, setResult] = useState<Response>();
    useEffect(() => {
        if (base.value && exchange.value) {
            getCurrency(base.value, exchange.value).then((response) => response.json().then(setResult));
        } else {
            return undefined;
        }
    }, [base, exchange]);
    return (
        <Card>
            <Card.Header>
                <Text>Exchange Rate Calculator</Text>
            </Card.Header>
            <Card.Body>
                <Container gap={0} css={{ display: 'flex' }}>
                    <CurrencyPicker selected={base} onSelect={setBase} />
                    <Spacer x={1} />
                    <CurrencyPicker selected={exchange} onSelect={setExchange} />
                </Container>
            </Card.Body>
        </Card>
    );
};

export default Exchange;
