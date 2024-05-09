import { useCallback, useEffect } from "react";

interface paginationProps {
    setCurrentPage: (page: number) => void
    totalPage: number
    firstPage: number
    lastPage: number
}
export default function usePagination({ setCurrentPage, totalPage, firstPage, lastPage }: paginationProps) {

    const pageNumbers = [];

    for (let i = firstPage; i <= lastPage; i++) {
        pageNumbers.push(i)
    }

    // 현재 페이지를 set 해주는 setCurrentPage 로 페이지 그룹을 이동하기 위해 firstPage 에서 - 1 을 해줌
    // ex) 5개씩 이루어지는 페이지그룹에 7번 페이지에 위치해있다면 첫 페이지는 6페이지, 6페이지 - 1 은 5, 버튼 클릭시 1~5 페이지가 노출됨
    const prev = () => setCurrentPage(firstPage - 1);

    // 현재 페이지를 set 해주는 setCurrentPage 로 페이지 그룹을 이동하기 위해 lastPage 에서 + 1 을 해줌
    const next = () => setCurrentPage(lastPage + 1);

    // 현재 페이지를 1페이지로 보내주는 버튼
    const first = () => setCurrentPage(1)

    const last = () => setCurrentPage(totalPage);

    // pageNum 을 받아 현재 페이지에  pageNum 를 넘겨줌
    const paginate = (pageNum: number) => setCurrentPage(pageNum)

    // 검색 혹은 초기화, 리스트 개수 변경 시 1번 페이지로 set 해주는 함수
    const initPageNum = useCallback(() => {
        setCurrentPage(1)
    }, [setCurrentPage])

    

    useEffect(() => {
        initPageNum()
    }, [initPageNum, totalPage])

    return { pageNumbers, prev, next, first, last, paginate }
}