import React, { useEffect, useState } from 'react';

import backgroundImg1 from '../assets/background.jfif';
import backgroundImg2 from '../assets/background2.jpg';
import backgroundImg3 from '../assets/background3.jpg';
import bike from '../assets/bike.png';

const imgArr = [backgroundImg1, backgroundImg2, backgroundImg3];
const imgArrLength = imgArr.length;
let count = 1;

function Home() {

    const [backgroundImg, setBackgroundImg] = useState(backgroundImg1);

    useEffect(() => {
        let runningImage = setInterval(async () => {
            await setBackgroundImg(imgArr[count]);
            if (count < imgArrLength - 1) {
                count++;
            }
            else count = 0;
            console.log(count);
        }, 5000);
    }, []);

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
                <a className="btn rent-bike">Thuê xe ngay</a>
            </div>
            <div className="home-left" style={ {

            } }>

            </div>
        </div>
    )
}

export default Home;