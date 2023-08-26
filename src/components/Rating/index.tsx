import clsx from 'clsx'
import styles from './rating.module.scss'

interface Props {
    rating: number
}

const Rating: React.FC<Props> = ({ rating }) => {
    return (
        <div
            className={clsx(
                'd-flex gap-1  jc-center ai-center ',
                styles.Rating
            )}
            dir="ltr"
        >
            <span className={clsx('text-body', styles.Rating__container)}>
                ★ {rating}
            </span>
            <span className="text-body-light">(42,321)</span>
        </div>
    )
}

export default Rating
