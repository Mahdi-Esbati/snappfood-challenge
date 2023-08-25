import { useRef } from 'react'

export function useDebounce(
    callback: (...data: unknown[]) => unknown,
    delay = 200
) {
    const timeOutRef = useRef<ReturnType<typeof setTimeout>>()
    const pendingRef = useRef(false)

    const action = (data?: unknown) => {
        if (pendingRef.current) return
        timeOutRef.current = setTimeout(() => {
            pendingRef.current = false
        }, delay)

        pendingRef.current = true
        callback(data)
    }

    return action
}
