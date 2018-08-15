export default {
    updateLoadingStatus(state, payload){
        state.isLoading = payload.isLoading
    },
    updateGeolocation(state,position){
        state.position = position
    }
}