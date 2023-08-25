import clsx from 'clsx'
import styles from './rating.module.scss'

interface Props {
    rating: number | string
    count: number | string
}

const Rating: React.FC<Props> = ({ rating, count }) => {
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
            <span className="text-body-light">({count})</span>
        </div>
    )
}

export default Rating
