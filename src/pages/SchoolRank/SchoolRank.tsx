import React from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';



function SchoolRank() {
    

    const products = [
        {
            rank: "1",
            schoolName: "강남초등학교",
            tier: "다이아몬드 VI",
        },
        {
            rank: "1",
            schoolName: "강북중학교",
            tier: "다이아몬드 VI",
        },
        {
            rank: "1",
            schoolName: "인성고등학교",
            tier: "다이아몬드 VI",
        },
    ]

    return (
        <div className="SchoolRank">
            <DataTable value={products} >
                <Column field='rank' header="순위"></Column>
                <Column field='schoolName' header="학교"></Column>
                <Column field='tier' header="티어"></Column>
            </DataTable>

            
        </div>
    );
}

export default SchoolRank;
