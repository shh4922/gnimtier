import { Link, useNavigate } from "react-router-dom"
import IndexRankCell from "../../../components/IndexRankCell/IndexRankCell"
import { regionStore } from "../../../stores/regionStore"
import { useState } from "react"
import "./indexrank.scss"
import useRegionSoloRank from "../../../api/regionSoloRank/queries"
import { useMySchoolRank } from "../../../api/mySchoolRank/queries"

function IndexRank() {
    const [isLogin, setIsLogin] = useState(false)
    const navigation = useNavigate()
    const { currentRegion, updateRegion } = regionStore()
    const [pageParams, setPageParams] = useState(1)
    // const { data: regionSoloRank, isLoading: regionSoloRanksLoading, error: regionSoloRanksError } = useRegionSoloRank(pageParams)
    // const { data: mySchoolRank, isLoading: myRankisLoading, error: myRankError } = useMySchoolRank()

    return (
        <section className="rank-containers">
            <section className="city-rank">
                <h2>강남구 개인 랭킹</h2>
                {
                    [...Array(10)].map((_, index) => {
                        return <IndexRankCell />
                    })
                }
                <Link to={`/regionSoloRank?region=${currentRegion?.region}&city=${currentRegion?.city}&page=${pageParams}`}>더보기</Link>
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
                    isLogin ? (
                        [...Array(10)].map((_, index) => {
                            return <IndexRankCell />
                        })
                    ) : (
                        <>
                            {
                                [...Array(10)].map((_, index) => {
                                    return <IndexRankCell />
                                })
                            }
                            <span className="goToLogin" typeof="button" onClick={() => { navigation("/login") }}>가입하고 우리학교 랭킹 보기</span>
                        </>
                    )
                }
                <Link to={"/schoolRank"}>더보기</Link>
            </section>
        </section>
    )
}
export default IndexRank
