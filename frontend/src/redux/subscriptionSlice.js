
const initialState = {
  selectedPlan: null,
  months: 1,
  loading: false,
  error: null,
};

/*const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
    setMonths: (state, action) => {
      state.months = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSelectedPlan, setMonths, setLoading, setError } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;]*/