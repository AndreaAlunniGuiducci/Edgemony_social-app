import styles from './MessagePreview.module.scss';

const MessagePreview = (props) => {
    const data = props.data || { text: 'Lorem Ipsum', date: new Date(), sender: 'User' };

    return (
        <div className={styles.message}>
            <h5>{data.sender}</h5>
            <p><small>{data.date.toLocaleDateString()} - {data.date.toLocaleTimeString()}</small></p>
            <p>{data.text}</p>
        </div>
    )
}

export { MessagePreview };