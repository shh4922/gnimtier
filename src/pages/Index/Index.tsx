import { Link, useNavigate } from "react-router-dom";
import "./index.scss"
import IndexRankCell from "../../components/IndexRankCell/IndexRankCell";
import { useEffect, useState } from "react";
import axios from "axios";
import { regionStore } from "../../stores/regionStore";
import { useMySchoolRank } from "../../api/mySchoolRank/queries";
import useRegionSoloRank from "../../api/regionSoloRank/queries";
import IndexCell from "../../components/IndexCell/IndexCell";
import IndexGrid from "./index-grid/IndexGrid";
import IndexRank from "./index-rank/IndexRank";
import { authStore } from "../../stores/authStore";

interface kakaoLocationResponse {
    documents: locationResponseDetail[]
}
interface locationResponseDetail {
    address_name: string
    region_1depth_name: string
    region_2depth_name: string
}

function Index() {

    const [pageParams, setPageParams] = useState(1)
    const { token } = authStore()
    const { currentRegion, updateRegion } = regionStore()

    useEffect(() => {
        if (!token && !currentRegion) {
            getCurrentLocation()
        } else {
            console.log(currentRegion)
        }
    }, [])

    // 현재위치를 받아서 상태업데이트
    const getCurrentLocation = async () => {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const longitude = pos.coords.longitude;
                const latitude = pos.coords.latitude;
                const param = { x: longitude.toString(), y: latitude.toString() };
                const { data } = await axios.get<kakaoLocationResponse>('https://dapi.kakao.com/v2/local/geo/coord2regioncode.json', {
                    params: param,
                    headers: {
                        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_APIKEY}`
                    }
                });
                updateRegion({ region: data.documents[0].region_1depth_name, city: data.documents[0].region_2depth_name });
            },
            (err) => { updateRegion({ region: "서울시", city: "강남구" }); }
        )
    }

    return (
        <article className="index">
            <div className="index-content">
                <aside className="box">
                    광고
                </aside>

                <section className="main-section">
                    <IndexGrid />
                    <div className="box">광고</div>
                    <IndexRank />
                </section>

                <aside className="box">

                </aside>
            </div>
        </article>
    );
}

export default Index;
