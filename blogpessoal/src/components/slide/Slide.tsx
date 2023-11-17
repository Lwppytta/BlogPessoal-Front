import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

import './Slide.css'

function Slide() {

    const imagens = [
        { id: "1", image: "src/assets/slide/evento.jpg" },
        { id: "2", image: "src/assets/slide/drag.jpg" },
        { id: "3", image: "src/assets/slide/hobbie.jpg" },
        { id: "4", image: "src/assets/slide/hobbieG.jpg" },
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