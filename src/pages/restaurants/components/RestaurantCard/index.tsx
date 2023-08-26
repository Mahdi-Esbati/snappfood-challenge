import clsx from 'clsx'
import styles from './restaurant-card.module.scss'
import Rating from '@/components/Rating'
import { Vendor } from '@/api/vendors-list/types'
import { toFa } from '@/utils/number'

interface Props {
    data: Vendor
    style?: React.CSSProperties
}

const RestaurantCard: React.FC<Props> = ({ data, style }) => {
    return (
        <div
            className={clsx(
                'd-flex flex-column w-100 shadow-main',
                styles.RestaurantCard
            )}
            style={style}
        >
            <header
                className={clsx(
                    'd-flex flex-column',
                    styles.RestaurantCard__header
                )}
            >
                <div className={styles.RestaurantCard__header__cover}>
                    <img src={data.coverPath || data.backgroundImage} />
                </div>
                <div
                    className={clsx(
                        'pos-absolute shadow-main',
                        styles.RestaurantCard__header__avatar
                    )}
                >
                    <img src={data.defLogo} />
                </div>
                <div></div>
            </header>

            <main
                className={clsx(
                    'd-flex flex-column gap-2 px-4 pt-5 pb-2',
                    styles.RestaurantCard__content
                )}
            >
                <div className="d-flex">
                    <h2 className="text-heading grow-1">{data.title}</h2>
                    <Rating
                        rating={toFa(data.rate)}
                        count={toFa(data.countReview)}
                    />
                </div>

                <div className="d-flex text-body gap-2">
                    {data.cuisinesArray.map((cuisin) => (
                        <span key={cuisin.id}>{cuisin.title}</span>
                    ))}
                </div>

                <div className="d-flex mt-1 ai-center">
                    {data.deliver ? (
                        <div className="d-flex ai-center gap-1 text-body">
                            <span className="text-body-light">پیک فروشنده</span>
                            <div>
                                {data.deliveryFee > 0 ? (
                                    <>
                                        <span>{toFa(data.deliveryFee)}</span>
                                        <span>تومان</span>
                                    </>
                                ) : (
                                    'رایگان'
                                )}
                            </div>
                        </div>
                    ) : null}
                </div>
            </main>
        </div>
    )
}

export default RestaurantCard
