import { useEffect, useState } from "react";
import RankCell from "../../components/RankCell/RankCell";
import Pagenation from "../../components/Pagenation/Pagenation";
import useRegionSoloRank from "../../api/regionSoloRank/queries";
import { regionStore } from "../../stores/regionStore";
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import "./regionSoloRank.scss"
// 특정지역(강남구)에 있는 학교들의 랭킹
function RegionSoloRank() {
    const userName = decodeURI(window.location.search)
    const params = new URLSearchParams(location.search);
    const navigation = useNavigate()
    const [currentPage, setCurrentPage] = useState<number>(Number(params.get('page')))
    const { currentRegion } = regionStore()

    const totalItems = 1242


    useEffect(() => {
        if (!userName) {
            alert("없는유저")
        }
        console.log(params.get("page"))
    }, [])

    const goNextPage = () => {
        setCurrentPage(currentPage + 1)
        navigation(`/regionSoloRank?region=${currentRegion?.region}&city=${currentRegion?.city}&page=${currentPage}`)
    }
    const goPrevPage = () => {
        setCurrentPage(currentPage - 1)
        navigation(`/regionSoloRank?region=${currentRegion?.region}&city=${currentRegion?.city}&page=${currentPage}`)
    }
    const setPage = (newPage: number) => {
        setCurrentPage(newPage)
        navigation(`/regionSoloRank?region=${currentRegion?.region}&city=${currentRegion?.city}&page=${newPage}`)
    }

    const { data: regionSoloRank, isLoading, isError } = useRegionSoloRank(Number(currentPage))

    if (isError) return <h1>error! {isError}</h1>

    return (
        <article className="SchoolRank">
            <section className="ranker-head">
                <p className="rank">순위</p>
                <p className="profile">프로필</p>
                <p className="schoolName">학교</p>
                <p className="gntRank">티어</p>
            </section>

            <section className="ranker-info">
                <RankCell />
                <RankCell />
                <RankCell />
                <RankCell />
                <RankCell />
                <RankCell />
                <RankCell />
                <RankCell />
            </section>
            <Pagenation currentPage={currentPage} totalItems={totalItems} setPage={setPage}/>
            
            {/* <Pagenation currentPage={Number(currentPage)} goNextPage={goNextPage} goPrevPage={goPrevPage} totalItems={totalItems}  /> */}
        </article>
    );
}

export default RegionSoloRank;
