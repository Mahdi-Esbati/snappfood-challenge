import { isText, isVendor } from '@/api/vendors-list/types'

import { VariableSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import RestaurantCard from '../RestaurantCard'
import useAppSelector from '@/hooks/useAppSelector'
import { vendorSelectors } from '@/pages/restaurants/store'

const { restaurantSelector } = vendorSelectors

interface Props {
    onEndRender: () => void
}

const VendorRenderer: React.FC<Props> = ({ onEndRender }) => {
    const data = useAppSelector(restaurantSelector)

    return (
        <AutoSizer>
            {({ height, width }) => (
                <VariableSizeList
                    height={height}
                    width={width}
                    className="d-flex flex-column ai-center jc-center gap-2"
                    direction="rtl"
                    itemCount={data.length}
                    itemSize={(index) => {
                        const item = data[index]
                        if (isVendor(item)) return 248 + 16
                        return 38
                    }}
                >
                    {({ index, style }) => {
                        const item = data[index]
                        if (index === data.length - 1) onEndRender()

                        if (isVendor(item))
                            return (
                                <div
                                    key={item.data.id}
                                    className="d-flex jc-center w-full mb-4"
                                    style={style}
                                >
                                    <RestaurantCard
                                        key={item.data.id}
                                        data={item.data}
                                    />
                                </div>
                            )
                        else if (isText(item))
                            return (
                                <div
                                    key={item.data}
                                    className="d-flex jc-center w-full"
                                    style={style}
                                >
                                    <h2 className="text-header">{item.data}</h2>
                                </div>
                            )
                    }}
                </VariableSizeList>
            )}
        </AutoSizer>
    )
}

export default VendorRenderer
