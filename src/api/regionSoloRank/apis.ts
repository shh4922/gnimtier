import { get } from "../http"
import { regionSoloRankModel } from "./model.type"

// 지역별 개인랭킹url
export const fetchRegionSoloRank = async (pageParam: number) => {
    
    const result = await get<regionSoloRankModel>(`https://dummyjson.com/products?limit=10&skip=${pageParam}`)
    return result
    
}

