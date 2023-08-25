import { ApiRequestObject } from '@/utils/httpService'
import { useEffect, useRef, useState } from 'react'
import useAPI from './useAPI'
import { useDebounce } from './useDebounce'

interface Props<
    RequestData extends PaginatedRequest,
    ResponseData extends PaginatedResponse,
    Data,
> {
    requestData: Omit<RequestData, keyof PaginatedRequest>
    apiRequestObject: ApiRequestObject<RequestData, ResponseData>
    getPageData: (data: ResponseData) => Data[]
    itemsPerPage: number
    debounceTime?: number
}

export const useInfiniteData = <
    RequestData extends PaginatedRequest,
    ResponseData extends PaginatedResponse,
    Data,
>({
    requestData,
    apiRequestObject,
    getPageData,
    itemsPerPage,
    debounceTime,
}: Props<RequestData, ResponseData, Data>) => {
    const isFetching = useRef(false)
    const currentPage = useRef(0)

    const [isFinished, setIsFinished] = useState(false)
    const [paginatedData, setPaginatedData] = useState<Data[][]>([])

    const { request, pending } = useAPI({ apiRequestObject })

    useEffect(() => {
        handleNextPage()
    }, [])

    const hasNextPage = (totalCount: number) =>
        totalCount - itemsPerPage * (currentPage.current + 1) > 0

    const handleNextPage = useDebounce(async () => {
        if (isFinished || isFetching.current) return

        isFetching.current = true
        const response = await request({
            ...(requestData as RequestData),
            page: currentPage.current,
            page_size: itemsPerPage,
        })
        isFetching.current = false
        if (!response) return
        const pageData = getPageData(response)
        setPaginatedData((prev) => [...prev, pageData])

        if (hasNextPage(response.count)) currentPage.current += 1
        else setIsFinished(true)
    }, debounceTime)

    return { paginatedData, pending, handleNextPage }
}
