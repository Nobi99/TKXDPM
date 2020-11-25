import React, { useEffect, useState } from 'react';
import axios from 'axios';

import backgroundImg1 from '../assets/background.jfif';
import backgroundImg2 from '../assets/background2.jpg';
import backgroundImg3 from '../assets/background3.jpg';
import { Link } from 'react-router-dom';


const imgArr = [backgroundImg1, backgroundImg2, backgroundImg3];
const imgArrLength = imgArr.length;
let count = 1;

function Home() {

    const [backgroundImg, setBackgroundImg] = useState(backgroundImg1);

    const getData = async () => {
        let kq = await axios.get('http://localhost:9000/api/infor/all-bike?id=2');
        console.log(kq.data.data);
    }

    getData();


    useEffect(() => {
        let runningImage = setInterval(async () => {
            await setBackgroundImg(imgArr[count]);
            if (count < imgArrLength - 1) {
                count++;
            }
            else count = 0;
            console.log(count);
        }, 5000);

        return clearInterval(runningImage);
    }, [backgroundImg]);

    return (
        <div className="home flex items-center" style={ {
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        } }>
            <div className="home-right">
                <h2>EcoBikeRental</h2>
                <div className="infor">
                    <p>Thuê xe dễ dàng với QR code.</p>
                    <p>Thanh toán tiện lợi.</p>
                    <p>Trả xe bất kì lúc nào.</p>
                    <p>Miễn phí trải nghiệm 10p đầu.</p>
                </div>
                <Link to="/docking" className="btn rent-bike">Thuê xe ngay</Link>
            </div>
            <div className="home-left" style={ {

            } }>

            </div>
        </div>
    )
}

export default Home;