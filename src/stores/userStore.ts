import { create } from "zustand"

type User = {
    id: string | null,
    name: string | null,
    tier: string | null,
}

type userStore = {
    currentUser: User|null,
    logout: () => void,
    login: () => void
}

const currentUserStore = create<userStore>((set) => ({
    currentUser: null,
    login: () => set({currentUser: {
        id: "id1",
        name: "name1",
        tier: "tier1"
    }}),
    logout: () => set({currentUser: null})
}))

export {
    currentUserStore
}