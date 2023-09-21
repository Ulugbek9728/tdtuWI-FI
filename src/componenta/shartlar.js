import React from 'react';
import {Link} from "react-router-dom";
import "../css/fontawesome/css/all.min.css"

import "./shartlar.css"
function Shartlar(props) {
    return (
        <div className="shartlarBox">
            <div className="box">

                <Link to={"/employee"}><i className="fa-solid fa-angles-left"/> Ortga</Link>

                <h1 align="center">Universitet hududida Wi-Fi tarmog'idan foydalanish shartlari</h1>
                <p align="justify">
                    Universitet internet tarmogʼidan foydalanilgan barcha internet resurslari murojaat qilingan saytlar,
                    koʼchirib olinayotgan maʼlumotlar Universitet serverida monitoring qilib boriladi. Shu boisdan
                    foydalanuvchi
                    oʼziga berilgan Login - Paroldan faqatgina oʼzi foydalanishi lozim.
                </p>
                <p align="justify">
                    Universitet internet tarmogʼidan faqat ilmiy ishlar olib borishda, ilmiy bilim va koʼnikmalarni
                    yanada
                    mustahkamlash hamda lavozimga oid faoliyat maqsadlarida foydalanish zarur.
                </p>
                <p align="justify">
                    Universitet internet tarmogʼidan turli xil Oʼzbekiston Respublikasi siyosatiga, urf-odatiga va ahloq
                    normalariga zid boʼlgan saytlardan Oʼzbekiston Respublikasi qonunchiligiga zid boʼlgan, hududiy
                    yaxlitligini
                    zoʼrlik bilan oʼzgartirishga daʼvat etishga, urush, zoʼravonlik, terrorizm, shuningdek diniy
                    ekstremizm,
                    separatizm va fundamentalizm gʼoyalarini targʼib qilishga, milliy, irqiy, etnik yoki diniy adovat
                    qoʼzgʼatuvchi axborotni, (misol uchun: ozodlik.com, ozodlik.org, ezgulik.org, bbc.com, bbc.org,
                    fergana.ru,
                    muslimuzbekistan.com, muslimuzbekistan.org, harakat.net, birdamlik.net, lenta.ru va x.k.),
                    pornografik
                    xususiyatga ega boʼlgan barcha saytlardan, turli-hil ijtimoiy tarmoqlardan (facebook.com,
                    odnoklassniki.ru,
                    twitter.com, vk.com va x.k.), turli hil koʼngil ochar saytlardan (youtube.com, mediabay.uz,
                    allplay.uz,
                    mtrk.uz, haqida.uz, va x.k) foydalanish, taʼlim jarayoniga oid boʼlmagan audio (*.mp3, *.wav, *.cda
                    va
                    shu.k.) va video (*.mpg, *.tr4, *.avi, *.flv, *mkv ,*.vob, *.3gp va shu.k.) fayllarni koʼchirish,
                    taʼlim va
                    ish jarayoni uchun zarur boʼlmagan saytlari hamda VPN dasturlaridan foydalanish katʼiyan <b>MАN
                    ETILАDI</b> .
                </p>
            </div>
        </div>
    );
}

export default Shartlar;