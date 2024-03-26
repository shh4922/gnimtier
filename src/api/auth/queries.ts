import { useMutation } from "@tanstack/react-query";
import {  authStore } from "../../stores/authStore";

import { post } from "../http";
import { Token, loginInput } from "./model";

export function useLogin() {
    
    const { setToken } = authStore()

    return useMutation({        
        mutationFn: (loginInput: loginInput) => post<Token>('/login', loginInput),
        onSuccess: (token) => {
            if (!token) {
                throw Error("Token값이 안들어있음")
            }
        
            setToken(token)
        },
        onError: (error) => {
            console.error(error)
        }
    })
}