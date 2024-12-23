//この関数はユーザーがログインしているかどうかを判定する

import axios from './axios'

//もしログインしていなかったら、catch処理が実行される
export const checkUserLogined = async () => {
    try {
        const { data } = await axios.get('/api/user')
        return { isAuth: true, data: data }
    } catch (error) {
        return { isAuth: false, data: null }
    }
}
