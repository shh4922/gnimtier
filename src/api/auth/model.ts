export type loginInput = {
    userEmail: string,
    password: string
}

export type Token = {
    accessToken: string|null,
    refreshToken: string|null,
    
}

