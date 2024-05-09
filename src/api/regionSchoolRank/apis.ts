import { get } from "../http"

// 지역별 학교랭킹url
export const fetchRegionSchoolRank = async (currentPage:number) => {
    console.log("지역별 학교랭킹 호출")
    // const result = await get<regionSoloRankModel>(`https://dummyjson.com/products?limit=10&skip=${currentPage}`)
    // console.log(result.product)
    return "result"
    // return result
}