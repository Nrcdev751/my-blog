import Navbar from "../../assets/Navbar/Navbar"
import profile from '../../assets/img/profile.jpg'
import Footer from "../../assets/Footer/Footer"
import sololeveling from '../../assets/img/Solo-Leveling-ARISE.png'
import valorant from '../../assets/img/valorant.png'
import honkai from '../../assets/img/honkai.jpeg'
import {Link} from 'react-router-dom'
import GoToTop from "../../assets/Gototop/Gototop"

function Narongchai(){
    return(
        <>
        <Navbar/>
            <section className="dark:bg-slate-950/25   bg-white">
                <div className="p-4 max-w-screen-xl  mx-auto">
                        <div className="text-sm breadcrumbs">
                            <ul>
                                <li><Link to="/">หน้าแรก</Link></li> 
                                <li><Link to="/author/narongchai">ผู้เขียนบทความ</Link></li>
                            </ul>
                        </div>
                        <div className="author-profile flex flex-col md:flex-row content-center items-center text-center md:text-start my-3 md:my-0">
                            <img src={profile} className="size-40 rounded-full my-2"  alt="" />
                            <div className="author-info mx-5">
                                <p className="text-3xl">Narongchai</p>
                                <p>Student at KMUTNB</p>
                                <p>Born 17 May 2547 (19 yrs)</p>
                                <div className="icon flex md:flex-row mt-3">
                                    <p>Skills </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  w-6  h-6 ms-5 dark:fill-white" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  w-6  h-6 ms-5 dark:fill-white" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  w-6  h-6 ms-5 dark:fill-white" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  w-6  h-6 ms-5 dark:fill-white" viewBox="0 0 640 512"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  w-6  h-6 ms-5 dark:fill-white" viewBox="0 0 576 512"><path d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4 238.2 333.5 225 333.5 201.4zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1 0-55.8 28.1-54.7 58.5c1 29.3-.3 67.2-9.8 98.1c-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1c9.5 30.9 10.9 68.8 9.8 98.1c-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5c-1-29.3 .3-67.2 9.8-98.1c9.6-31 25.7-50.6 52.1-53.1v-28.5C542.7 239.2 526.5 219.6 517 188.6zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4c0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3C383.4 349.7 352.1 375.1 300.2 375.1zM290.2 266.4h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5C344.7 279.6 326.1 266.4 290.2 266.4z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg"  className="  w-6  h-6 ms-5 dark:fill-white" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
                                </div>
                                <div className="group-button flex  my-3">
                                    <p className="me-2">Contact :</p>
                                    <a href="https://github.com/Nrcdev751" target="_blank" className="hover:scale-125 ease-in duration-150">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:fill-white" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                    </a>
                                    <a href="https://www.instagram.com/nar_mc751/" target="_blank"  className="hover:scale-125 ease-in duration-150 ms-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:fill-white" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=100004078716167" target="_blank"  className="hover:scale-125 ease-in duration-150 ms-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:fill-white" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>                                </a>
                                </div>
                            </div>
                        </div>
                    
                        <div className="md:grid grid-cols-6">
                            <div className="col-span-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                            <ion-icon name="book"></ion-icon>
                                            <p className="text-2xl py-3  px-2">บทความของ Narongchai</p>
                                    </div>
                                    <Link to="/blog">
                                            <div className="btn btn-sm btn-ghost  bg-gradient-to-r from-blue-500 to-blue-800 text-white">ชมทั้งหมด</div>
                                        </Link>
                            </div>
                                <label className="input input-bordered mb-3 flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="ค้นหาบทความ" />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                </label>
                                
                            <Link to="/blog/blog01">
                                <div className="blog-1 grid md:grid-cols-2 py-2 hover:bg-blue-900/25 duration-200 md:p-5">
                                    <div className="blog relative">
                                        <div className="flex">
                                            <img className="w-full rounded-xl" src={sololeveling} alt="" />
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <p className=" md:text-xl my-2">Solo leveling Arise เปิดบริการวันแรกเป็นอย่างไรบ้าง</p>
                                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        <div className="status flex justify-between md:hidden xl:flex">
                                            <div className="icon status flex  items-center">
                                                <ion-icon name="eye-outline"></ion-icon>
                                                <p className='mx-2'>100</p>
                                                <ion-icon name="heart-outline"></ion-icon>
                                                <p className='mx-2'>10</p>
                                            </div>
                                            <div className="date status">
                                                <p>21 มีนาคม 67 19.21 น.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-3  md:hidden xl:flex ">
                                            <img className="rounded-full  h-10 w-10 my-3" src={profile} alt="" />
                                            <div className="infomation ms-2">
                                                <p className="font-bold">Narongchai</p>
                                                <p>ผู้เขียน</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            <Link to="/blog/blog01">
                                <div className="blog-1 grid md:grid-cols-2 py-2 hover:bg-blue-900/25 duration-200 md:p-5">
                                    <div className="blog relative">
                                        <div className="flex">
                                            <img className="w-full rounded-xl" src={valorant} alt="" />
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <p className=" md:text-xl my-2">Clove เอเจนท์ใหม่ทำให้ Smoke น่าเล่นขึ้น</p>
                                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        <div className="status flex justify-between md:hidden xl:flex">
                                            <div className="icon status flex  items-center">
                                                <ion-icon name="eye-outline"></ion-icon>
                                                <p className='mx-2'>50</p>
                                                <ion-icon name="heart-outline"></ion-icon>
                                                <p className='mx-2'>5</p>
                                            </div>
                                            <div className="date status">
                                                <p>28 มีนาคม 67 19.05 น.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-3  md:hidden xl:flex ">
                                            <img className="rounded-full  h-10 w-10 my-3" src={profile} alt="" />
                                            <div className="infomation ms-2">
                                                <p className="font-bold">Narongchai</p>
                                                <p>ผู้เขียน</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            <Link to="/blog/blog01">
                                <div className="blog-1 grid md:grid-cols-2 py-2 hover:bg-blue-900/25 duration-200 md:p-5">
                                    <div className="blog relative">
                                        <div className="flex">
                                            <img className="w-full rounded-xl" src={honkai} alt="" />
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <p className=" md:text-xl my-2">แพทซ์ใหม่ครบรอบ 1 ปีมีอะไรน่าสนใจมาดูกัน</p>
                                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        <div className="status flex justify-between md:hidden xl:flex">
                                            <div className="icon status flex  items-center">
                                                <ion-icon name="eye-outline"></ion-icon>
                                                <p className='mx-2'>45</p>
                                                <ion-icon name="heart-outline"></ion-icon>
                                                <p className='mx-2'>3</p>
                                            </div>
                                            <div className="date status">
                                                <p>28 มีนาคม 67 16.49 น.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-3  md:hidden xl:flex ">
                                            <img className="rounded-full  h-10 w-10 my-3" src={profile} alt="" />
                                            <div className="infomation ms-2">
                                                <p className="font-bold">Narongchai</p>
                                                <p>ผู้เขียน</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            
                        </div>
                </div>
            </section>
            
            <Footer/>
            <GoToTop/>
        </>
      
    )
}
export default Narongchai