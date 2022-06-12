import { Dropdown, styled } from '@nextui-org/react';
import { useMemo } from 'react';
import { map, find, values } from 'ramda';
const currencies = [
    {
        name: 'Australian Dollars',
        value: 'AUD',
    },
    {
        name: 'Brazilian Lira',
        value: 'BRL',
    },
    {
        name: 'Great British Pounds',
        value: 'GBP',
    },
    {
        name: 'Canadian Dollar',
        value: 'CAD',
    },
    {
        name: 'Chinese Yuan',
        value: 'CNY',
    },
    {
        name: 'Danish Krone',
        value: 'DKK',
    },
    {
        name: 'Euro',
        value: 'EUR',
    },
    {
        name: 'Hong Kong Dollar',
        value: 'HKD',
    },
    {
        name: 'Hungarian Forint',
        value: 'HUF',
    },
    {
        name: 'Indonesian Rupiah',
        value: 'IDR',
    },
    {
        name: 'Indian Rupee',
        value: 'INR',
    },
    {
        name: 'Israeli Shekel',
        value: 'ILS',
    },
    {
        name: 'Japanese Yen',
        value: 'JPY',
    },
    {
        name: 'Malaysian Ringgit',
        value: 'MYR',
    },
    {
        name: 'Mexican Peso',
        value: 'MXN',
    },
    {
        name: 'New Zealand Dollar',
        value: 'NZD',
    },
    {
        name: 'Philippine Peso',
        value: 'PHP',
    },
    {
        name: 'Polish Złoty',
        value: 'PLN',
    },
    {
        name: 'Russian Ruble',
        value: 'RUB',
    },
    {
        name: 'Singapore Dollar',
        value: 'SGD',
    },
    {
        name: 'South Korean Won',
        value: 'KRW',
    },
    {
        name: 'Swedish Krona',
        value: 'SEK',
    },
    {
        name: 'Swiss Franc',
        value: 'CHF',
    },
    {
        name: 'Thai Baht',
        value: 'THB',
    },
    {
        name: 'United States Dollar',
        value: 'USD',
    },
];

const Button = styled(Dropdown.Button, {
    borderRadius: '2px',
});

const CurrencyPicker = ({
    onSelect,
    selected,
}: {
    onSelect: (value: { name: string; value: string }) => void;
    selected?: { name: string; value: string };
}) => {
    const selectedName = useMemo(() => selected?.name, [selected]);
    const selectedValue = useMemo(() => selected?.value, [selected]);
    const mapOptions = useMemo(() => map(({ value, name }) => <Dropdown.Item key={value}>{name}</Dropdown.Item>), []);
    const getSelected = useMemo(
        () => (value) => value ? find((currency) => currency.value === values(value)[0], currencies) : undefined,
        []
    );
    return (
        <Dropdown>
            <Button color="primary">{selectedName}</Button>
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
