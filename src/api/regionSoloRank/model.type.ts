export type regionSoloRankModel = {
    product: soloRankModel[],
    total: number,
    skip: number,
    limit: number
}

export type soloRankModel = {
    id: number
    title: string
    description:string
    price: number,
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: [string]
}