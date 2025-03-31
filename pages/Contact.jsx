
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


const Contact = () => {
    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/codecamp-web' },
        { icon: FaInstagram, url: 'https://www.instagram.com/sixneuf_/' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/edward-ogheneochuko/' },
    ];

  return (
    <div className='pb-10 items-center text-center flex flex-col gap-y-5'>
        <div className="text-lg  text-amber-400">
            <span className="pr-1 font-mono">{"> "}04.</span>
            What's Next 
        </div>
        <h1 className='text-4xl font-bold '>Get in Touch</h1>
        <p className='max-w-[550px] text-gray-400'>I'm Always open to opportunities. Whether you have a 
            question or just want to say Hi, I'll try my best to get back to you!
        </p>
        <button className='border px-10 py-4 rounded-md cursor-pointer
         hover:bg-amber-400 hover:text-black  '>
            <p className='font-mono'>Say Hello</p>
        </button>

        <div className='mt-[300px] items-center  text-gray-400 flex flex-col gap-y-5'>
            <p className='flex gap-x-5 text-2xl '>
            {socialLinks.map(({icon:Icon, url}, index) => (
                <a key={index} href={url} className=' hover:text-amber-400'>
                    <Icon />
                </a>
            ))}
            </p>
            <a href="" 
            className='hover:text-amber-400'>
            <div>Bulit by whodeme</div>
            <div className='flex items-center gap-x-3'><FaGithub /> Source code - Github</div>
            </a>
        </div>
    </div>
  )
}

export default Contact