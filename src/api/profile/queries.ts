import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { authStore } from "../../stores/authStore";
import { useNavigate } from "react-router-dom";
import { interceptorAxios } from "../interceptor";


export function useProfile() {
    
    return useQuery({        
        queryKey: ["profile"],
        queryFn: () => interceptorAxios.get("/profile"),
    })
}