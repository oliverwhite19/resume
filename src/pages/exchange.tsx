import { Button as NextButton, Card, Container as NextContainer, Input, Spacer, styled, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import CurrencyPicker from '../components/Exchange/CurrencyPicker';
import Header from '../components/Header';
import { Swap } from 'react-iconly';

const Button = styled(NextButton, {
    borderRadius: '2px',
});

const Container = styled(NextContainer, {
    '@smMax': {
        '& > div': {
            width: '100% !important',
        },
    },

    '@xsMax': {
        '& > span': {
            width: '100% !important',
        },
    },
});

const getCurrency = async (base: string, currency: string) =>
    await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${currency}`);

const Exchange = () => {
    const [base, setBase] = useState<{ name: string; value: string }>({ name: 'Base Currency', value: '' });
    const [exchange, setExchange] = useState<{ name: string; value: string }>({ name: 'Exchange Currency', value: '' });
    const [quantity, setQuantity] = useState<number>();
    const [exchangeRate, setExchangeRate] = useState<{}>();
    const [result, setResult] = useState<{}>();
    useEffect(() => {
        if (base.value && exchange.value) {
            getCurrency(base.value, exchange.value).then((response) => response.json().then(setExchangeRate));
        } else {
            return undefined;
        }
    }, [base, exchange]);

    useEffect(() => {
        if (exchangeRate?.['rates']?.[exchange.value] && quantity) {
            setResult(Math.trunc(exchangeRate?.['rates']?.[exchange.value] * quantity * 100) / 100);
        } else {
            return undefined;
        }
    }, [exchangeRate, quantity, exchange]);

    return (
        <>
            <Header hasResumeButtons={false} heading={'Exchange Rate Calculator'} description="" />
            <Spacer />
            <Card>
                <Card.Body>
                    <Container gap={0} css={{ display: 'flex', justifyContent: 'center' }}>
                        <Input
                            color="primary"
                            labelLeft="Quantity"
                            type="number"
                            onBlur={(event) => {
                                setQuantity(parseFloat(event.target.value));
                            }}
                        />
                        <Spacer x={1} />
                        <CurrencyPicker selected={base} onSelect={setBase} />
                        <Spacer x={1} />
                        <Button
                            auto
                            onClick={() => {
                                setBase(exchange.value ? exchange : { name: 'Base Currency', value: '' });
                                setExchange(base.value ? base : { name: 'Exchange Currency', value: '' });
                            }}
                            icon={<Swap style={{ transform: 'rotate(90deg)' }} set="light" />}
                        />
                        <Spacer x={1} />
                        <CurrencyPicker selected={exchange} onSelect={setExchange} />
                    </Container>
                    <Spacer />
                    <NextContainer gap={0} css={{ display: 'flex', justifyContent: 'center' }}>
                        <Button>Calculate</Button>
                    </NextContainer>
                    <Spacer />
                    <NextContainer gap={0} css={{ display: 'flex', justifyContent: 'center' }}>
                        <Text>{result}</Text>
                    </NextContainer>
                </Card.Body>
            </Card>
        </>
    );
};

export default Exchange;
