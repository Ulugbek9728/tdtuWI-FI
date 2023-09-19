import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import * as XLSX from "xlsx";
import ReactPaginate from 'react-paginate';
import {ApiUrl} from "./domenName";



function Umumiy(props) {

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 20;

    const [Alluser, setAlluser] = useState([]);
    const [src, setsrc] = useState('');

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        if (src ===''){
            setCurrentItems(Alluser.slice(itemOffset, endOffset));
        }
        else {setCurrentItems(Alluser.filter((item, index)=>{
            return item.ID===src
        }))}

        setPageCount(Math.ceil(Alluser.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,Alluser]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Alluser.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        All();
    },[src]);
    function All() {
        axios.post(`${ApiUrl}/profile/adm/profile_list`, "", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((response) => {
            setAlluser(response.data);
        }).catch((error) => {
            console.log(error.response)

        })
    }

    const testExcel = () =>{
        const wb = XLSX.utils.book_new(),
            ws = XLSX.utils.json_to_sheet(Alluser);
        XLSX.utils.book_append_sheet(wb,ws, "Umumiy foydalanuvchilar");
        XLSX.writeFile(wb, "Umumiy foydalanuvchilar.xlsx");
    };

    return (
        <div className="Adminka">
            <div className="box">
                <div className="navbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 navBox">
                                <Link className="activ link" to="#">Umumiy</Link>
                                <Link className="link" to="/AdminPanell/NoActiv">BLOCK</Link>
                                <Link className="link" to="/AdminPanell/Activ">Activ</Link>
                                <div className="src">
                                    <input type="search" onChange={(e)=>setsrc(e.target.value)} className="form-control" placeholder="ID bo'yicha qidiruv"/>
                                    <img src="/img/srccc.svg" alt="src"/>
                                </div>

                                <button className='mx-5 btn btn-primary' onClick={testExcel}>Yuklab olish</button>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>ID</th>
                        <th>Lavozim</th>
                        <th>Fakultet</th>
                        <th>Guruh</th>
                        <th>Login</th>
                        <th>Password</th>
                        <th>Familya</th>
                        <th>Ism</th>
                        <th>Telefon</th>
                        <th>Foydalanuvchi</th>

                    </tr>
                    </thead>
                    <tbody>

                    { currentItems&&currentItems.map((item, index) => {
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.ID}</td>
                            <td>{item.DEGREE}</td>
                            <td>{item.FACULTY}</td>
                            <td>{item.GROUP}</td>
                            <td>{item.LOGIN}</td>
                            <td>{item.PASSWORD}</td>
                            <td>{item.SURNAME}</td>
                            <td>{item.NAME}</td>
                            <td>{item.PHONE}</td>
                            <td>{item.STATUS}</td>
                        </tr>
                    })}
                    </tbody>
                </table>

                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName='pagination'
                    pageLinkClassName='page-num'
                    previousLinkClassName='page-num'
                    nextLinkClassName='page-num'
                    activeLinkClassName='activ'
                />
            </div>
        </div>
    );
}

export default Umumiy;