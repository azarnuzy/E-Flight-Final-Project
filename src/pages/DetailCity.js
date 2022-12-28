/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import yogyakarta from '../assets/yogyakarta.jpg'
import bali from '../assets/bali.jpg'
import jakarta from '../assets/jakarta.jpg'
import surabaya from '../assets/surabaya.jpg'
import malang from '../assets/malang.jpg'
import surakarta from '../assets/solo.jpg'
import bandung from '../assets/bandung.jpg'
import padang from '../assets/padang.jpg'
import papua from '../assets/raja-ampat.jpeg'
import { useParams } from 'react-router-dom';
import dataCity from '../assets/data.json'

export const DetailCity = () => {
    window.scrollTo(0, 0);

    const [data] = useState(dataCity);
    let cityItem;
    const {id} = useParams();

    const city = () => {
        data.map((item) => {
            if(item.id == id) {
                cityItem = item
            }
        })
    }
    console.log(city())

    const handleImage = () => {
        if(id === '1') {
            return <img src={yogyakarta} alt='' className="lg:w-[400px] w-[200px] my-8 mx-auto"/>
        } else if (id === '2') {
            return <img src={bali} alt='' className="lg:w-[400px] w-[200px] my-8 mx-auto"/>
        } else if (id === '3') {
            return <img src={jakarta} alt='' className="lg:w-[400px] w-[200px] my-8 mx-auto"/>
        }else if (id === '4') {
            return <img src={surabaya} alt='' className="lg:w-[400px] w-[200px] my-8 mx-auto"/>
        }else if (id === '5') {
            return <img src={malang} alt='' className="lg:w-[400px] w-[200px] my-8 mx-auto"/>
        }else if (id === '6') {
            return <img src={surakarta} alt='' className="lg:w-[400px] w-[200px] my-8 mx-auto"/>
        }else if (id === '7') {
            return <img src={bandung} alt='' className="lg:w-[400px] w-[200px] my-8 mx-auto"/>
        }else if (id === '8') {
            return <img src={padang} alt='' className="lg:w-[400px] w-[200px] my-8 mx-auto"/>
        }else if (id === '9') {
            return <img src={papua} alt='' className="lg:w-[400px] w-[200px] my-8 mx-auto"/>
        }
    }
    return (
      <div>
        <Navbar />
        <div className="mt-[90px] lg:ml-24">
          <div className="lg:flex lg:flex-row lg:gap-3 lg:p-10">
            <div className="mx-auto">
                <div>
                <h2 className="text-center font-bold lg:text-3xl text-2xl items-center">
                    {cityItem.title}
                </h2>
                <p className="lg:w-[700px] w-full  text-justify lg:p-10 text-slate-500 lg:leading-8 md:m-6 p-4 leading-7">
                    {cityItem.content}
                </p>
                </div>
            </div>
            <div className="w-full flex items-center">
              {handleImage()}
            </div>
          </div>
        </div>
        <Footer />
      </div>
  )
}
