import { create } from "zustand"
import { Token } from "../api/auth/model"


type authStore = {
    token: Token|null
    setToken: (newToken: Token) => void
}

export const authStore = create<authStore>((set) => ({
    token: null as Token|null,
    setToken: (newToken: Token) => set({token: newToken}),
    
}))

