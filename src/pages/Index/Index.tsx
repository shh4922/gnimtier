import { Link } from "react-router-dom";
import "./index.scss"
import IndexRankCell from "../../components/IndexRankCell/IndexRankCell";
import { useEffect } from "react";

function Index() {

    useEffect(() => {
        getCurrentLocation()
    }, [])

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(handleSuccess,handleError)
    }
    const handleSuccess = (pos: GeolocationPosition) => {
        const { latitude, longitude } = pos.coords

        alert(`${latitude} ${longitude}`)
    }

    const handleError = (err: GeolocationPositionError) => {
        alert(`실패`)
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
