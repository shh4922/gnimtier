import axios from "axios";

const interceptorAxios = axios.create({
    baseURL: "API.BASE_URL",
    timeout: 5000,
})

interceptorAxios.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("accessToken")
        
        if(accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        
        return config
    }
)

// 401일때 token refresh 하기위해 사용
interceptorAxios.interceptors.response.use(
    (res) => { return res.data },
    async (error) => {
        switch (error?.response?.status) {
            case 401:
                try {
                    const result = await axios.get(`API`, { withCredentials: true})
                    localStorage.setItem("accessToken", result.data.accessToken)

                    error.config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
                    
                    return axios.request(error.config);

                } catch (error) {
                    alert("세션이 만료되었습니다.")
                    throw "402"
                }
            
            case 500:
                alert("500:서버로부터 에러가 발생했습니다.")
                throw 500
            default:
                alert("default에러남.")
                console.error(`default Error!! \n ${error}` )
                throw error
        }
    }
);

export { interceptorAxios } 