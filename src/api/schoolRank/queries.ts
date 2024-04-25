import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { authStore } from "../../stores/authStore";
import { useNavigate } from "react-router-dom";
import { interceptorAxios } from "../interceptor";
import { get } from "../http";


// NOTE: 학교랭킹 보낼시, 로그인되어있으면 본인학교위치를 넘겨야하는데, 그럼 토큰을 함께받아 넘겨야하는건지?
export function useSchoolRank() {
    
    return useQuery({        
        queryKey: ["schoolRanks"],
        queryFn: () => get("https://myURL"),
    })
}