import { create } from "zustand";

type currentRegion = {
    region: string | null,
    city: string | null,
}

type regionStoreType = {
    currentRegion: currentRegion | null,
    updateRegion: (newRegion: currentRegion) => void
}

export const regionStore = create<regionStoreType>(set => ({
    currentRegion: null,
    updateRegion: (newRegion: currentRegion) => set(() => ({
        currentRegion: newRegion
    }))
}))