import { Box } from "@mui/material";
import { ProjectSlide } from "../ProjectSlide";
import bahanbaku from '../images/bahanbaku.jpeg';
import logo_uns from '../images/logo-uns.png';

export const SeriousProject = () => {
    const projets = [
        {
            name: "ERP system for School",
            description: "During my first internship I was working on this project in my University to create ERP system for school. I contribute in almost every part of the development including Requirement Analysis, Design, Development, and Testing. In the end, I was awarded The Most Goal-Oriented on this project. It was such a valuable experience.",
            url: logo_uns,
            type: 'image',
            repo: ''

        },
        {
            name: "Bangkit Academy Capstone: BahanbaKu App",
            description: "This project is currently in further development since the project has successfully got the top 15 predicate and received funding.",
            url: bahanbaku,
            type: 'image',
            repo: 'https://github.com/Bahanbaku-Official'
        }
    ]

    return (
        <Box width='70%'>
            <ProjectSlide projects={projets} />
        </Box>
    );
}