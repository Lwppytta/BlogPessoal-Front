import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

import './Slide.css'

function Slide() {

    const imagens = [
        { id: "1", image: "https://cdn.discordapp.com/attachments/1050597957352833117/1177204632720789565/1.jpg?ex=6571a83f&is=655f333f&hm=f77aedcb50b85e5ad8bad708e2a1b726bdf330f0979320169a8308d2231d89ec&" },
        { id: "2", image: "https://cdn.discordapp.com/attachments/1050597957352833117/1177204633412837396/2.jpg?ex=6571a840&is=655f3340&hm=658b49c163f88bacde5f6d1455afcbed90947a4522adfa88d18e931d7650cef6&" },
        { id: "3", image: "https://cdn.discordapp.com/attachments/1050597957352833117/1177204657274241054/3.jpg?ex=6571a845&is=655f3345&hm=c4d249deb4d4c26a2011fbb09a4adbd2064e4ee921cfd6d4d4b5c0aacd1e0ae0&" },
        { id: "4", image: "https://cdn.discordapp.com/attachments/1050597957352833117/1177204657907572786/4.jpg?ex=6571a845&is=655f3345&hm=b00bdb3b16f2f42737be1ba82b5288b8490e52f3dd5024659f865cc421bcf848&" },
        { id: "5", image: "https://cdn.discordapp.com/attachments/1050597957352833117/1177204682511360000/5.jpg?ex=6571a84b&is=655f334b&hm=8903b34011bbd2e7c173da4877e9c7ad4508e91a1d56406b5a1354fe34555729&" },
        { id: "6", image: "https://cdn.discordapp.com/attachments/1050597957352833117/1177204683576717392/6.jpg?ex=6571a84b&is=655f334b&hm=7d04a20cce762bd15e11d64bca7398e01ea69e5a11c96fdbac91ced57b9e3810&" },
    ];

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                effect={'fade'}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {imagens.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Slides"
                            className="slide-imagem"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slide;