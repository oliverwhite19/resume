import { Dropdown, styled } from '@nextui-org/react';
import { useMemo } from 'react';
import { map, find, values } from 'ramda';
import ReactCountryFlag from 'react-country-flag';

const currencies = [
    {
        name: 'Australian Dollars',
        value: 'AUD',
        countryCode: 'AU',
    },
    {
        name: 'Brazilian Lira',
        value: 'BRL',
        countryCode: 'BR',
    },
    {
        name: 'Great British Pounds',
        value: 'GBP',
        countryCode: 'GB',
    },
    {
        name: 'Canadian Dollar',
        value: 'CAD',
        countryCode: 'CA',
    },
    {
        name: 'Chinese Yuan',
        value: 'CNY',
        countryCode: 'CN',
    },
    {
        name: 'Danish Krone',
        value: 'DKK',
        countryCode: 'DK',
    },
    {
        name: 'Euro',
        value: 'EUR',
        countryCode: 'EU',
    },
    {
        name: 'Hong Kong Dollar',
        value: 'HKD',
        countryCode: 'HK',
    },
    {
        name: 'Hungarian Forint',
        value: 'HUF',
        countryCode: 'HU',
    },
    {
        name: 'Indonesian Rupiah',
        value: 'IDR',
        countryCode: 'ID',
    },
    {
        name: 'Indian Rupee',
        value: 'INR',
        countryCode: 'IN',
    },
    {
        name: 'Israeli Shekel',
        value: 'ILS',
        countryCode: 'IL',
    },
    {
        name: 'Japanese Yen',
        value: 'JPY',
        countryCode: 'JP',
    },
    {
        name: 'Malaysian Ringgit',
        value: 'MYR',
        countryCode: 'MY',
    },
    {
        name: 'Mexican Peso',
        value: 'MXN',
        countryCode: 'MX',
    },
    {
        name: 'New Zealand Dollar',
        value: 'NZD',
        countryCode: 'NZ',
    },
    {
        name: 'Philippine Peso',
        value: 'PHP',
        countryCode: 'PH',
    },
    {
        name: 'Polish Złoty',
        value: 'PLN',
        countryCode: 'PL',
    },
    {
        name: 'Russian Ruble',
        value: 'RUB',
        countryCode: 'RU',
    },
    {
        name: 'Singapore Dollar',
        value: 'SGD',
        countryCode: 'SG',
    },
    {
        name: 'South Korean Won',
        value: 'KRW',
        countryCode: 'KR',
    },
    {
        name: 'Swedish Krona',
        value: 'SEK',
        countryCode: 'SE',
    },
    {
        name: 'Swiss Franc',
        value: 'CHF',
        countryCode: 'CH',
    },
    {
        name: 'Thai Baht',
        value: 'THB',
        countryCode: 'TH',
    },
    {
        name: 'United States Dollar',
        value: 'USD',
        countryCode: 'US',
    },
];

const Button = styled(Dropdown.Button, {
    borderRadius: '2px',
    '@xs': {
        width: '185px !important',
    },
    '@xsMax': {
        width: '100% !important',
    },
});

const CurrencyPicker = ({
    onSelect,
    selected,
}: {
    onSelect: (value: { name: string; value: string; countryCode: string }) => void;
    selected?: { name: string; value: string; countryCode: string };
}) => {
    const selectedName = useMemo(() => selected?.name, [selected]);
    const selectedValue = useMemo(() => selected?.value, [selected]);
    const selectedCode = useMemo(() => selected?.countryCode, [selected]);
    const mapOptions = useMemo(
        () =>
            map(({ value, name, countryCode }) => (
                <Dropdown.Item key={value} icon={<ReactCountryFlag countryCode={countryCode} />}>
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
            <Button color="primary" auto>
                {selectedCode && <ReactCountryFlag countryCode={selectedCode} />}
                {selectedName}
            </Button>
            <Dropdown.Menu
                color="primary"
                variant="solid"
                selectionMode="single"
                selectedKeys={selectedValue}
                onSelectionChange={(value) => onSelect(getSelected(value))}
            >
                {mapOptions(currencies)}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CurrencyPicker;
