import {
    Button as NextButton,
    Card,
    Container as NextContainer,
    Input as NextInput,
    Spacer,
    styled,
    Text,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import CurrencyPicker from '../components/Exchange/CurrencyPicker';
import Header from '../components/Header';
import { Swap } from 'react-iconly';
import { Currency } from '../types';

const Button = styled(NextButton, {
    borderRadius: '2px',
});
const Input = styled(NextInput, {
    borderRadius: '2px',
    '@sm': {
        width: '210px !important',
    },
});

const Container = styled(NextContainer, {
    '@smMax': {
        '& > div': {
            width: '100% !important',
        },
        '& > span': {
            width: '100% !important',
        },
    },
});

const getCurrency = async (base: string, currency: string) =>
    await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${currency}`);

const Exchange = () => {
    const [base, setBase] = useState<Currency>({
        name: 'Base Currency',
        value: '',
        countryCode: '',
    });
    const [exchange, setExchange] = useState<Currency>({
        name: 'Exchange Currency',
        value: '',
        countryCode: '',
    });
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
                            bordered
                            type="number"
                            placeholder="Quantity"
                            labelLeft={base?.symbolLeft}
                            labelRight={base?.symbolRight}
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
                                setBase(
                                    exchange.value ? exchange : { name: 'Base Currency', value: '', countryCode: '' }
                                );
                                setExchange(
                                    base.value ? base : { name: 'Exchange Currency', value: '', countryCode: '' }
                                );
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
                    {result && (
                        <NextContainer gap={0} css={{ display: 'flex', justifyContent: 'center' }}>
                            <Text h3>
                                {base.symbolLeft}
                                {quantity}
                                {base.symbolRight} @ {exchangeRate?.['rates']?.[exchange.value]} = {exchange.symbolLeft}
                                {result}
                                {exchange.symbolRight}
                            </Text>
                        </NextContainer>
                    )}
                </Card.Body>
            </Card>
        </>
    );
};

export default Exchange;
