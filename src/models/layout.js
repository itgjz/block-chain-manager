export default {
    namespace: 'layout',

    state: {
        collapsed: false,
    },

    reducers: {
        onCollapse(state) {
            return {
                ...state,
                collapsed: !state.collapsed
            }
        },
    }
}