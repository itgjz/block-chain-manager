import { registerUser, createChannel, joinChannel } from '../services/app'
import { message } from 'antd'

export default {
    namespace: 'app',

    state: {
        modalVisible: false,
        modalTitle: '',
        access_token: '',
        username: '',
        orgName: ''
    },

    effects: {
        *submitRegisterUser(action, { put, call, select }) {
            const { payload } = action
            const ret = yield call(registerUser, payload.data)
            if (ret && ret.success === false) {
                if (ret.message) {
                    message.error(ret.message)
                }
                else {
                    message.error("请求失败")
                }
            }

            if (ret && ret.success) {
                if (ret.message) {
                    message.success(ret.message)
                }

                window.localStorage.setItem("user_info", JSON.stringify({
                    access_token: ret.token,
                    username: payload.data.username,
                    orgName: payload.data.orgName
                }))
            }
        },

        *submitCreateChannel(action, { put, call, select }) {
            const { payload } = action
            const ret = yield call(createChannel, payload.data)

            if (ret && ret.success === false) {
                if (ret.message) {
                    message.error(ret.message)
                }
                else {
                    message.error("请求失败")
                }
            }

            if (ret && ret.success) {
                if (ret.message) {
                    message.success(ret.message)
                }
            }
        },

        *submitJoinChannel(action, { put, call, select }) {
            const { payload } = action
            const ret = yield call(joinChannel, payload.data)
            if (ret && ret.success === false) {
                if (ret.message) {
                    message.error(ret.message)
                }
                else {
                    message.error("请求失败")
                }
            }

            if (ret && ret.success) {
                if (ret.message) {
                    message.success(ret.message)
                }
            }
        },

        *submitUpdateAncharPeer(action, { put, call, select }) {
            const { payload } = action
            const ret = yield call(joinChannel, payload.data)
            if (ret && ret.success === false) {
                if (ret.message) {
                    message.error(ret.message)
                }
                else {
                    message.error("请求失败")
                }
            }

            if (ret && ret.success) {
                if (ret.message) {
                    message.success(ret.message)
                }
            }
        }


    },

    subscriptions: {
        // setup({ history, dispatch }) {
        //     return history.listen(({ pathname }) => {
        //         dispatch({ type: 'getMenus' })
        //     });
        // },
    },

    reducers: {
        modalToggle(state, { payload }) {
            const { data } = payload
            return {
                ...state,
                modalVisible: data.visible,
                modalTitle: data.title
            }
        },

        saveUserInfo(state, { payload }) {
            const { data } = payload
            return {
                ...state,
                ...data,
            }
        }
    }
}