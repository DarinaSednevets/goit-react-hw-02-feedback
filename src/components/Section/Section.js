import styles from './Section.module.css'


const Section = ({ title, children }) => {
    return (
        <section>
            <p className={styles.section}>{title}</p>
            {children}
        </section>
    )
}
export default Section;