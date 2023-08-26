import { VendorsListResponse } from '@/api/vendors-list/types'
import { RootState } from '@/store'
import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'

interface Store {
    restaurants: VendorsListResponse['finalResult']
}

const initialState: Store = { restaurants: [] }

const { actions, reducer } = createSlice({
    name: 'vendors',
    initialState,
    reducers: {
        setRestaurants: (
            state,
            action: PayloadAction<Store['restaurants']>
        ) => {
            state.restaurants = action.payload
        },

        reset: () => {
            return initialState
        },
    },
})

const selectVendors = (state: RootState) => state.vendors

export const vendorSelectors = {
    restaurantSelector: createSelector(
        selectVendors,
        (vendors) => vendors.restaurants
    ),
}
export const { setRestaurants, reset } = actions
export default reducer
