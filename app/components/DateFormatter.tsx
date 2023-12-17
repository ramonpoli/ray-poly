
type Props = {
    dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
    const date = new Date(dateString)
    return <time dateTime={dateString}>{date.toDateString()}</time>
}

export default DateFormatter