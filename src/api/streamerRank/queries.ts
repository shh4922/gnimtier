import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchFemaleStreamerRank, fetchMaleStreamerRank } from "./apis";



export function useFemaleStreamerRank(pageParam: number = 1) {
    
    return useQuery({
        queryKey: ["femalRank", pageParam],
        queryFn: () => fetchFemaleStreamerRank(pageParam)
        
    });
    
}
export function useMaleStreamerRank(pageParam: number) {
    
    return useQuery({
        queryKey: ["maleRank", pageParam],
        queryFn: () => fetchMaleStreamerRank(pageParam),
        
    });
    
}