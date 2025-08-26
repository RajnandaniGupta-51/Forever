import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from "../components/NewsLetterBox"

const About = () => {
  return (
    <div >
       <div className='text-2xl text-center pt-8 border-t'>
           <Title text1={'ABOUT'} text2={'US'}/>
       </div>
       <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eligendi ab impedit nobis accusamus reiciendis optio sapiente placeat, ad mollitia sint exercitationem vel fugit, nesciunt quidem porro repudiandae numquam distinctio! Vitae atque earum odit quae ex impedit voluptates facilis natus optio, itaque obcaecati dolorum? Neque a nam quas iste aut quia beatae maiores  </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eligendi ab impedit nobis accusamus reiciendis optio sapiente placeat, ad mollitia sint exercitationem vel fugit, nesciunt quidem porro repudiandae numquam distinctio! Vitae atque earum odit quae ex impedit voluptates facilis natus optio, itaque obcaecati dolorum? Neque a nam quas iste aut quia beatae maiores  </p>
        <b className='text-gray-800 '>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione, ad commodi officiis voluptatum est culpa deserunt blanditiis consectetur molestiae. Laborum laboriosam delectus ullam eveniet.</p>
        </div>
       </div>
       <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore recusandae aliquam impedit vero, cum placeat.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore recusandae aliquam impedit vero, cum placeat.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore recusandae aliquam impedit vero, cum placeat.</p>
        </div>
       </div>
       <NewsLetterBox/>
    </div>
  )
}

export default About