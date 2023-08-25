import {
    TextResponse,
    VendorResponse,
    isText,
    isVendor,
} from '@/api/vendors-list/types'
import RestaurantCard from '../RestaurantCard'

interface Props {
    data: (VendorResponse | TextResponse)[]
}

const VendorRenderer: React.FC<Props> = ({ data }) => {
    const renderText = (data: TextResponse) => {
        return <h2 key={data.data}>{data.data}</h2>
    }

    const renderVendor = (data: VendorResponse) => {
        return <RestaurantCard key={data.data.id} data={data.data} />
    }

    return (
        <>
            {data.map((item) => {
                if (isVendor(item)) return renderVendor(item)
                else if (isText(item)) return renderText(item)
            })}
        </>
    )
}

export default VendorRenderer
