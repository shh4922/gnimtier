import React, { useState } from "react"
import useRegionSoloRank from "../../api/regionSoloRank/queries"
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { regionStore } from "../../stores/regionStore"
import usePagination from "../../hooks/usePagination"
import ReactPaginate from "react-paginate"


interface PagenationProps {
    currentPage: number,
    totalItems: number,
    setPage: (newPage: number) => void
}

function Pagenation({ currentPage, setPage, totalItems }: PagenationProps) {
    
    const handlePageClick = (event:{selected:number}) => {
        setPage(event.selected)
    };
    
    return (
        <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            pageCount={Math.ceil(totalItems / 30)}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            pageLinkClassName={"pagination__link"}
            activeLinkClassName={"pagination__link__active"}
        />
    )
}

export default Pagenation