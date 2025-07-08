import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SummaryState {
    isMenuOpen: boolean,
    quantity: number,
    location: string,
    price: number,
    period: number,
    total: number,
    hasYearlyDiscount: boolean,
    discountPercent: number,
    discountCode: string | null
}

const initialState: SummaryState = {
    isMenuOpen: false,
    quantity: 10,
    location: 'United Kingdom',
    price: 3,
    period: 1,
    total: 30,
    hasYearlyDiscount: false,
    discountPercent: 0,
    discountCode: null
}

const priceMap: Record<number, number> = {
    100: 2.25,
    50: 2.50,
    25: 2.75,
};

const calculatePriceByQuantity = (quantity: number): number => {
    const thresholds = Object.keys(priceMap)
        .map(Number)
        .sort((a, b) => b - a);

    const threshold = thresholds.find(t => quantity >= t);
    return threshold ? priceMap[threshold] : 3;
};

const YEARLY_DISCOUNT_PERCENT = 20;

const calculateTotal = (
    quantity: number,
    price: number,
    period: number,
    hasYearlyDiscount: boolean,
    discountPercent: number
): number => {
    const baseTotal = quantity * price * period;
    let totalDiscount = discountPercent;

    if (hasYearlyDiscount) {
        totalDiscount = Math.max(totalDiscount, YEARLY_DISCOUNT_PERCENT);
    }

    return baseTotal * (1 - totalDiscount / 100);
}

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
        setQuantity: (state, action: PayloadAction<number>) => {
            state.quantity = action.payload;
            state.price = calculatePriceByQuantity(action.payload);
            state.total = calculateTotal(
                state.quantity,
                state.price,
                state.period,
                state.hasYearlyDiscount,
                state.discountPercent
            );
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        },
        setPeriod: (state, action: PayloadAction<number>) => {
            state.period = action.payload;
            state.hasYearlyDiscount = action.payload === 12;
            state.total = calculateTotal(
                state.quantity,
                state.price,
                state.period,
                state.hasYearlyDiscount,
                state.discountPercent
            );
        },
        applyDiscountCode: (state, action: PayloadAction<{code: string, percent: number}>) => {
            const { code, percent } = action.payload;
            state.discountCode = code;
            state.discountPercent = percent;

            state.total = calculateTotal(
                state.quantity,
                state.price,
                state.period,
                state.hasYearlyDiscount,
                state.discountPercent
            );
        },
        clearDiscountCode: (state) => {
            state.discountCode = null;
            state.discountPercent = 0;

            state.total = calculateTotal(
                state.quantity,
                state.price,
                state.period,
                state.hasYearlyDiscount,
                state.discountPercent
            );
        },
    }
})

export const {
    setQuantity,
    setLocation,
    setPeriod,
    applyDiscountCode,
    clearDiscountCode
} = summarySlice.actions

export default summarySlice.reducer