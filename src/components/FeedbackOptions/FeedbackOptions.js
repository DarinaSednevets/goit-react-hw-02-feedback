import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={StyleSheet.buttonsList}>{
            options.map(option => (
                <button
                    type="button"
                    key={option}
                    name={option}
                    onClick={onLeaveFeedback}
                    className={styles.btn}>
                    {option}
                </button>
            ))
        }

        </div>
    )
};
export default FeedbackOptions;