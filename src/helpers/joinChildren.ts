export default function joinChildren<T>(
    children: T[],
    render: (arg0: T, arg1: number) => React.FC | JSX.Element,
    renderSeparator: (arg0: string) => React.FC | JSX.Element
): Array<React.FC | JSX.Element> {
    return children.reduce((result: Array<React.FC | JSX.Element>, child: T, index: number) => {
        if (index < children.length - 1) {
            return result.concat([render(child, index), renderSeparator(index + '-separator')]);
        }

        return result.concat(render(child, index));
    }, []);
}
