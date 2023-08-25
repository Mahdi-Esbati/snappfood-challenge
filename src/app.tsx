import styles from './app.module.scss'
import clsx from 'clsx'

const App = () => {
    return (
        <div className={clsx(styles.App, 'shadow-main')}>Hello Snappfood!</div>
    )
}

export default App
