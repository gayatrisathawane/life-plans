 import './Footer.css';
 import github from './github.png'
 const Footer= ()=> {
    return(
        <div className='footer'>Made by ❤ GAYATRI SATHAWANE 
        <a href='https://github.com/gayatrisathawane/life-plans' target='blank' className='github-link'><span> <img src={github} className='github-logo'alt='github-logo'/></span></a></div>
    )

 }
 export default Footer;