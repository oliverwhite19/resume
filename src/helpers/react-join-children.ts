export default function JoinChildren(
    children: any[],
    render: (arg0: any, arg1: any) => any,
    renderSeparator: (arg0: string) => any
) {
    return children.reduce((result: any[], child: any, index: string | number) => {
        if (index < children.length - 1) {
            return result.concat([render(child, index), renderSeparator(index + '-separator')]);
        }

        return result.concat(render(child, index));
    }, []);
}
