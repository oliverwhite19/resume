import { Dropdown, Spacer, styled } from '@nextui-org/react';
import { useMemo } from 'react';
import { map, find, values } from 'ramda';
import { Currency } from '../../types';
import Flag from 'react-flagkit';

const currencies: Array<Currency> = [
    {
        name: 'Australian Dollars',
        value: 'AUD',
        countryCode: 'AU',
        symbolLeft: 'A$',
    },
    {
        name: 'Brazilian Real',
        value: 'BRL',
        countryCode: 'BR',
        symbolLeft: 'R$',
    },
    {
        name: 'Great British Pounds',
        value: 'GBP',
        countryCode: 'GB',
        symbolLeft: '£',
    },
    {
        name: 'Canadian Dollar',
        value: 'CAD',
        countryCode: 'CA',
        symbolLeft: 'CA$',
    },
    {
        name: 'Chinese Yuan',
        value: 'CNY',
        countryCode: 'CN',
        symbolLeft: '¥',
        symbolRight: 'RMB',
    },
    {
        name: 'Danish Krone',
        value: 'DKK',
        countryCode: 'DK',
        symbolRight: ' krone',
    },
    {
        name: 'Euro',
        value: 'EUR',
        countryCode: 'EU',
        symbolLeft: '€',
    },
    {
        name: 'Hong Kong Dollar',
        value: 'HKD',
        countryCode: 'HK',
        symbolLeft: 'HK$',
    },
    {
        name: 'Hungarian Forint',
        value: 'HUF',
        countryCode: 'HU',
        symbolRight: ' Ft',
    },
    {
        name: 'Indonesian Rupiah',
        value: 'IDR',
        countryCode: 'ID',
        symbolLeft: 'Rp ',
    },
    {
        name: 'Indian Rupee',
        value: 'INR',
        countryCode: 'IN',
        symbolLeft: '₹',
    },
    {
        name: 'Israeli Shekel',
        value: 'ILS',
        countryCode: 'IL',
        symbolLeft: '₪',
    },
    {
        name: 'Japanese Yen',
        value: 'JPY',
        countryCode: 'JP',
        symbolLeft: '¥',
    },
    {
        name: 'Malaysian Ringgit',
        value: 'MYR',
        countryCode: 'MY',
        symbolLeft: 'RM',
    },
    {
        name: 'Mexican Peso',
        value: 'MXN',
        countryCode: 'MX',
        symbolLeft: 'MX$',
    },
    {
        name: 'New Zealand Dollar',
        value: 'NZD',
        countryCode: 'NZ',
        symbolLeft: 'NZ$',
    },
    {
        name: 'Philippine Peso',
        value: 'PHP',
        countryCode: 'PH',
        symbolLeft: '₱',
    },
    {
        name: 'Polish Złoty',
        value: 'PLN',
        countryCode: 'PL',
        symbolLeft: 'zł',
    },
    {
        name: 'Russian Ruble',
        value: 'RUB',
        countryCode: 'RU',
        symbolRight: '₽',
    },
    {
        name: 'Singapore Dollar',
        value: 'SGD',
        countryCode: 'SG',
        symbolLeft: 'S$',
    },
    {
        name: 'South Korean Won',
        value: 'KRW',
        countryCode: 'KR',
        symbolLeft: '₩',
    },
    {
        name: 'Swedish Krona',
        value: 'SEK',
        countryCode: 'SE',
        symbolRight: ' kr',
    },
    {
        name: 'Swiss Franc',
        value: 'CHF',
        countryCode: 'CH',
        symbolRight: ' Fr.',
    },
    {
        name: 'Thai Baht',
        value: 'THB',
        countryCode: 'TH',
        symbolLeft: '฿',
    },
    {
        name: 'United States Dollar',
        value: 'USD',
        countryCode: 'US',
        symbolLeft: '$',
    },
];

const Button = styled(Dropdown.Button, {
    borderRadius: '2px',
    '@xs': {
        width: '210px !important',
    },
    '@xsMax': {
        width: '100% !important',
    },
});

const CurrencyPicker = ({ onSelect, selected }: { onSelect: (value: Currency) => void; selected?: Currency }) => {
    const mapOptions = useMemo(
        () =>
            map(({ value, name, countryCode }) => (
                <Dropdown.Item key={value} icon={<Flag country={countryCode} />}>
                    {name}
                </Dropdown.Item>
            )),
        []
    );
    const getSelected = useMemo(
        () => (value) => value ? find((currency) => currency.value === values(value)[0], currencies) : undefined,
        []
    );
    return (
        <Dropdown>
            <Button color="primary" auto bordered>
                {selected.countryCode && (
                    <>
                        <Flag country={selected.countryCode} />
                        <Spacer x={0.5} />
                    </>
                )}{' '}
                {selected.name}
            </Button>
            <Dropdown.Menu
                color="primary"
                variant="solid"
                selectionMode="single"
                selectedKeys={selected.value}
                onSelectionChange={(value) => onSelect(getSelected(value))}
            >
                {mapOptions(currencies)}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CurrencyPicker;
