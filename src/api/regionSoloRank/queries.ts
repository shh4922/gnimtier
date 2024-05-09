import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchRegionSoloRank } from "./apis";
import { regionStore } from "../../stores/regionStore";

export default function useRegionSoloRank(pageParam: number) {
    const { currentRegion } = regionStore()
    console.log(`지역은 ${currentRegion?.region} ${currentRegion?.city} 이고 page는: ${pageParam} 호출하겠움`)
    return useQuery({
        queryKey: ["regionRanks", currentRegion?.region, currentRegion?.city, pageParam],
        queryFn: () => fetchRegionSoloRank(pageParam),
        enabled: !!currentRegion,
    });
    
}