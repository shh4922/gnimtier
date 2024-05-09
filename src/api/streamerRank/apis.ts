import { get } from "../http"

export const fetchFemaleStreamerRank = async (pageParam: number) => {
    // const result = await get<string>(`https://dummyjson.com/products?limit=10&skip=${pageParam}`)
    // return result
    return "여성스트리머 랭크"
}

export const fetchMaleStreamerRank = async (pageParam: number) => {
    // const result = await get<string>(`https://dummyjson.com/products?limit=10&skip=${pageParam}`)
    // return result
    return "남자 랭크"
}