import React, {useEffect, useState} from 'react';
import "./ActivAdminka.css"
import {Link} from "react-router-dom";
import axios from "axios";
import * as XLSX from "xlsx";
import {toast, ToastContainer} from "react-toastify";
import ReactPaginate from 'react-paginate';
import {ApiUrl} from "./domenName";




function Activ(props) {

    const [Activs, setactiv] = useState([]);
    const [src, setsrc] = useState('');
    const [message, setMessage] = useState('');

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 20;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        if (src ===''){
            setCurrentItems(Activs.slice(itemOffset, endOffset));
        }
        else {setCurrentItems(Activs.filter((item, index)=>{
            return item.ID===src
        }))}

        setPageCount(Math.ceil(Activs.length / itemsPerPage));

    }, [itemOffset, itemsPerPage,Activs]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Activs.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        Active();
    },[src]);

    useEffect(() => {
        notify();
        setMessage('')
    },[message,Active]);

    function Active() {
        axios.post(`${ApiUrl}/profile/adm/profile_list/status/active`, "", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((response) => {
            setactiv(response.data);
        }).catch((error) => {
            console.log(error.response)

        })
    }
    function editStatus(e) {
        axios.put(`${ApiUrl}/profile/adm/change_status/${e}`,
            {},{
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }).then((response) => {
            if (response.status===200){
                setMessage("Foydalanuvchi Block bo'ldi")
            }
            console.log(response)
        }).catch((error) => {
            console.log(error.response);
        });}

    const testExcel = () =>{
        const wb = XLSX.utils.book_new(),
            ws = XLSX.utils.json_to_sheet(Activs);
        XLSX.utils.book_append_sheet(wb,ws, "Activ foydalanuvchilar");
        XLSX.writeFile(wb, "Activ foydalanuvchilar.xlsx");
    };
    function notify() {
        if (message.trim().length> 0 ){
            toast.success(message)
        }
    }

    return (
        <div className="Adminka">
            <ToastContainer/>

            <div className="box">
                <div className="navbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 navBox">
                                <Link className="link" to="/AdminPanell/">Umumiy</Link>
                                <Link className="link" to="/AdminPanell/NoActiv">BLOCK</Link>
                                <Link className="activ link" to="/AdminPanell/Activ">Activ</Link>
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
                        <th>Holatini belgilang</th>
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
                            <td>
                                <button onClick={(e)=>editStatus(item.ID)} type="button" className="btn btn-danger">Block</button>
                            </td>
                        </tr>
                    })}

                    </tbody>
                </table>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< prev"
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

export default Activ;