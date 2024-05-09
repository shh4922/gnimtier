import { Link } from "react-router-dom"
import IndexCell from "../../../components/IndexCell/IndexCell"
import "./indexgrid.scss"
function IndexGrid() {

    // 래밸순 랭킹, 남자스트리머랭킹, 여자스트리머랭킹, 광고, 롤많이한사람랭킹, 이름긴사람랭킹

    return (
        <section className="grid-containers">
            <section className="city-rank">
                <h2>레벨순 랭킹</h2>
                {
                    [...Array(3)].map((_, index) => {
                        return <IndexCell typeNumber={1}/>
                    })
                }
                <Link to={"/schoolRank"}>더보기</Link>
            </section>
            <section className="city-rank">
                <h2>여자스트리머 랭킹</h2>
                {
                    [...Array(3)].map((_, index) => {
                        return <IndexCell typeNumber={2}/>
                    })
                }
                <Link to={"/schoolRank"}>더보기</Link>
            </section>
            <section className="city-rank">
                <h2>남자스트리머 랭킹</h2>
                {
                    [...Array(3)].map((_, index) => {
                        return <IndexCell typeNumber={2}/>
                    })
                }
                <Link to={"/schoolRank"}>더보기</Link>
            </section>
            <section className="city-rank">
                <h2>생일이면 광고해드림</h2>
                {
                    [...Array(3)].map((_, index) => {
                        return <IndexCell typeNumber={3}/>
                    })
                }
                <Link to={"/schoolRank"}>더보기</Link>
            </section>
            <section className="city-rank">
                <h2>지박령 랭킹</h2>
                {
                    [...Array(3)].map((_, index) => {
                        return <IndexCell typeNumber={4}/>
                    })
                }
                <Link to={"/schoolRank"}>더보기</Link>
            </section>
            <section className="city-rank">
                <h2>이름긴사람</h2>
                {
                    [...Array(3)].map((_, index) => {
                        return <IndexCell typeNumber={5}/>
                    })
                }
                <Link to={"/schoolRank"}>더보기</Link>
            </section>
        </section>
    )
}
export default IndexGrid