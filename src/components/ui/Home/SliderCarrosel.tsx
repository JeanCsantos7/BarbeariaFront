import Slider from "react-slick";

import Corte1 from '../assets/Corte1.jpeg';
import Corte2 from '../assets/Corte2.jpeg';
import Corte3 from '../assets/Corte3.jpeg';
import Corte4 from '../assets/Corte4.jpeg';
import Corte5 from '../assets/Corte5.jpeg';
import Corte6 from '../assets/Corte6.jpeg';

interface ImagensBarbearia {
    id: number;
    imagem: any;
}

const listaImagens: ImagensBarbearia[] = [
    { id: 1, imagem: Corte1 },
    { id: 2, imagem: Corte2 },
    { id: 3, imagem: Corte3 },
    { id: 4, imagem: Corte4 },
    { id: 5, imagem: Corte5 },
    { id: 6, imagem: Corte6 },
];

export default function SliderCarrosel() {
    let settings = {
      dots: true, 
      speed: 200, 
      slidesToShow: 1, 
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 3500, 
      arrows: true, 
    };

    return (
      <div className="flex justify-center items-center w-full mt-[3%] mb-[9%]">
        <Slider {...settings} className="lg:max-w-[20vw] md: max-w-[85vw] w-full">
          {listaImagens.map(item => (
            <div key={item.id} className="flex justify-center items-center">
              <img
                className="w-full  object-cover rounded-2xl transition-opacity duration-500 hover:opacity-80 "
                src={item.imagem}
                alt={`Imagem ${item.id}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
}
