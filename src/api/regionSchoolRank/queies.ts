import { useMutation, useQuery } from "@tanstack/react-query";
import { regionStore } from "../../stores/regionStore";
import { fetchRegionSoloRank } from "../regionSoloRank/apis";

export default function useRegionSchoolRank(pageParam: number) {
    const { currentRegion } = regionStore()

    return useQuery({
        queryKey: ["regionSchoolRank", currentRegion?.region, currentRegion?.city, pageParam],
        queryFn: () => fetchRegionSoloRank(pageParam),
        enabled: !!currentRegion,
    });
}