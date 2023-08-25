import clsx from 'clsx'
import styles from './restaurant-card.module.scss'
import Rating from '@/components/Rating'

interface Props {
    // title: string
    // cover: string
    // avatar: string
    // rating: {
    //     rate: number
    //     count: number
    // }
    // discount: number
    // pro: {
    //     freeDelivery: boolean
    //     discount: number
    // }
    // delivery: {
    //     type: 'seller' | 'express'
    //     fee: number
    //     duration: string
    // }
}

const RestaurantCard: React.FC<Props> = () => {
    return (
        <div
            className={clsx(
                'd-flex flex-column w-100 shadow-main',
                styles.RestaurantCard
            )}
        >
            <header
                className={clsx(
                    'd-flex flex-column',
                    styles.RestaurantCard__header
                )}
            >
                <div className={styles.RestaurantCard__header__cover}>
                    <img src="https://cdn.snappfood.ir/350x233/uploads/images/vendors/covers/5bcefa5438a82.jpg" />
                </div>
                <div
                    className={clsx(
                        'pos-absolute shadow-main',
                        styles.RestaurantCard__header__avatar
                    )}
                >
                    <img src="https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/5c166e3b51771.jpg" />
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
                    <h2 className="text-heading grow-1">رستوران فلان</h2>
                    <Rating rating={4.6} />
                </div>

                <p className="text-body">فست‌فود پیتزا ساندویچ برگر</p>

                <div className="d-flex mt-1 text-body gap-1 d-flex ai-center">
                    <span className="text-body-light">پیک فروشنده</span>
                    <div>
                        <span>۱۲،۳۰۰</span>
                        <span>تومان</span>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default RestaurantCard
