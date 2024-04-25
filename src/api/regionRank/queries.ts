import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { authStore } from "../../stores/authStore";
import { interceptorAxios } from "../interceptor";

import { get } from "../http";
export default function useRegionRank() {

    const { setToken } = authStore()

    return useQuery({
        queryKey: ["regionRanks"],
        // queryFn: () => get<>("www.naver.com"),
                
    })
    return 0
}