import React from 'react'

const About = () => {
  return (
    <div 
    name="about" 
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-4'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About Me
                </p>
            </div>

            <p className="text-xl mt-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates tempora cupiditate hic obcaecati, aspernatur iusto quas! 
                Officia dignissimos assumenda ipsa eaque sapiente, soluta, 
                quaerat provident in rem voluptates facilis illo numquam 
                tempore voluptas quas laudantium delectus! Praesentium veritatis 
                doloremque placeat vero rerum reprehenderit? Eaque, veniam 
                corrupti provident saepe debitis consequuntur.
            </p>

            <br/>
            
            <p className="text-xl">            
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates tempora cupiditate hic obcaecati, aspernatur iusto quas! 
                Officia dignissimos assumenda ipsa eaque sapiente, soluta, 
                quaerat provident in rem voluptates facilis illo numquam 
                tempore voluptas quas laudantium delectus! Praesentium veritatis 
                doloremque placeat vero rerum reprehenderit? Eaque, veniam 
                corrupti provident saepe debitis consequuntur.
            </p>
        </div>
    </div>
  )
}

export default About