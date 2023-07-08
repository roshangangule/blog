import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/roshan.jpg" alt="An image showing Roshan" width={300} height={300}/>
        </div>
        <h1>Hi, I'm Roshan</h1>
        <p>
            I blog about web development - especially frontend using React & NextJS and bancked using Java, SpringBoot.
        </p>
    </section>
}

export default Hero;