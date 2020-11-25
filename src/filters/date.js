export default () => {
    const date = new Date(value)
    return date.toLocaleDateString(['en-GB'], {day: '2-digit',month: 'short', year: 'numeric'})
}