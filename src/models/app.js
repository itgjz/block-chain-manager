import { registerUser, createChannel } from '../services/app'
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
            console.log("---dispath submitRegisterUser")
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
            console.log("---dispath submitCreateChannel")
            const { payload } = action

            const userInfoCache = JSON.parse(window.localStorage.getItem("user_info"))

            yield call(registerUser, userInfoCache)

            const ret = yield call(createChannel, payload.data, {
                authorization: `Bearer ${userInfoCache.access_token}`
            })
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