import Typography from "../../common/components/Typography/Typography";
import { AboutMeContainer } from "./AboutMe.styles";
import Photo from '../../about-me.jpg';

const AboutMe = () => {
    return <AboutMeContainer>
        <img src={Photo}/>
        <Typography variant="body2" as="p">
            I've got 5 years of real-world experience as a front-end developer, mainly working with React and Typescript. I'm also pretty good at unit testing, and I'm currently diving into the fun world of animations and SVG transformations.
        </Typography>
        <Typography variant="body2" as="p">
            I’m passionate about creating beautiful and user-friendly UIs and awesome component libraries. I’m also a little obsessed with code quality,  and I treat each line as if it were a work of art.
        </Typography>
        <Typography variant="body2" as="p">
            Outside of the tech stuff, I enjoy bartending as a hobby and gaming in my free time. I like to work on personal projects that revolve around my interests. And let's not forget my dog – she's a big part of my life, and you'll definitely see her popping up in my portfolio!
        </Typography>
    </AboutMeContainer>
}

export default AboutMe;
