import { Link } from "react-router-dom";
import "./index.scss"
import IndexRankCell from "../../components/IndexRankCell/IndexRankCell";
import { useEffect } from "react";
import axios from "axios";

function Index() {

    useEffect(() => {
        getCurrentLocation()
    }, [])

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
    }
    const handleSuccess = (pos: GeolocationPosition) => {
        const { latitude, longitude } = pos.coords
        conformToLoadName(longitude, latitude)

        // alert(`${latitude} ${longitude}`)
    }

    const handleError = (err: GeolocationPositionError) => {
        alert(`실패`)
    }

    const conformToLoadName = (x: number, y: number) => {
        
        const param = { x: x.toString(), y: y.toString() }
        axios.get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json`, {
            params: param,
            headers: {
                Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_APIKEY}`
            }
        }).then((res) => {
            console.log(res)
        })
    }


    return (
        <article className="index">
            <div className="index-content">
                <section className="city-rank">
                    <h2>강남구 개인 랭킹</h2>
                    {
                        [...Array(10)].map((_, index) => {
                            return <IndexRankCell />
                        })
                    }
                    <Link to={"/schoolRank"}>더보기</Link>
                </section>
                <section className="city-rank">
                    <h2>강남구 학교 랭킹</h2>
                    {
                        [...Array(10)].map((_, index) => {
                            return <IndexRankCell />
                        })
                    }
                    <Link to={"/schoolRank"}>더보기</Link>
                </section>
                <section className="myschool-rank">
                    <h2>우리학교랭킹</h2>
                    {
                        [...Array(10)].map((_, index) => {
                            return <IndexRankCell />
                        })
                    }
                    <Link to={"/schoolRank"}>더보기</Link>
                </section>
            </div>
        </article>
    );
}

export default Index;
