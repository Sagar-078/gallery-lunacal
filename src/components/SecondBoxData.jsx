import React, { useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa6";
import image from "../assets/Rectangle 5160.png"

const SecondBoxData = () => {

    const fileUploadRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const [images, setImages] = useState([
        `${image}`, `${image}`,`${image}`,
    ]);


    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages([...images, reader.result]);
            };
            reader.readAsDataURL(file);
            setCurrentIndex(currentIndex + 1);
        }
    };

  return (
    <div className=' flex w-full justify-between items-center flex-col'>
        <div className=' flex justify-between w-[90%]'>
            <button className="h-[90%] bg-black px-7 py-3 rounded-2xl text-white text-lg
                shadow-inner shadow-black font-medium flex items-center justify-center"
            >
                Gallery
            </button>

            <div className='flex gap-4 px-4'>
                <div className=" shadow-sm rounded-full">
                    <button
                        className="px-4 py-3 rounded-full bg-[#FFFFFF08] text-white font-semibold text-xs
                        flex justify-center items-center gap-1 shadow-inner shadow-[#a7a4a4b5]"
                        onClick={() => fileUploadRef.current.click()}
                    >
                        <FaPlus className="w-[10px] mb-[1.4px]" /> ADD IMAGE
                    </button>
                    <input
                        type="file"
                        ref={fileUploadRef}
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </div>
                <div className="flex gap-3 px-2">
                    <div className="rounded-full active:scale-[0.8] z-0"
                    >
                        <button
                            className="rounded-full bg-custom-gradient-button drop-shadow-custom-shadow-button shadow-xl shadow-zinc-900 p-3"
                            onClick={handlePrev}
                        >
                            <FaArrowLeft />
                        </button>
                    </div>
                    <div
                        className="rounded-full
                                    active:scale-[0.8] z-0"
                    >
                        <button
                            className="rounded-full bg-custom-gradient-button drop-shadow-custom-shadow-button shadow-xl shadow-zinc-900 p-3 "
                            onClick={handleNext}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>

        </div>

        <div className="flex gap-8 w-[90%] mt-4">
            <div className="grid grid-cols-3 justify-evenly w-full">
                {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                    <div key={index} className="relative">
                        <img
                            alt=''
                            src={image}
                            className="h-[150px] w-[170px] rounded-2xl duration-1000 
                            transform hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default SecondBoxData