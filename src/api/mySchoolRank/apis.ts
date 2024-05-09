import { authStore } from "../../stores/authStore"
import { getWithToken } from "../http"

export const fetchMySchoolRank = async () => {
    console.log("내학교랭킹 호출!")
    const { token } = authStore()
    const result = await getWithToken("나의학교랭킹url", {
        headers:{
            Authorization: token?.accessToken
        },
    })
    return "내 학교 랭킹!"
}