import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { authStore } from "../../stores/authStore";
import { interceptorAxios } from "../interceptor";

export function useRegionRank() {
    
    const { setToken } = authStore()

    // return useQuery({
    //     queryKey: ["regionRank"],
    //     queryFn: (loginInput: loginInput) => interceptorAxios.get("www.naver.com"),
    //     onError: (error) => {
    //         console.error(error)
    //     }
    // })
    return 0
}