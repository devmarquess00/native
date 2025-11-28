export const onlyNumbers = (value: string) => {
    const formatValue = value.replace(/\D/g, '');
    return formatValue;
}