import { Box } from "@mui/material";
import { ProjectSlide } from "../ProjectSlide";
import game from '../images/my_beloved_game.png';
import cashier_app from '../images/cashier.png';
import tm from '../images/tm.png';

export const MessingAround = () => {
    const projets = [
        {
            name: "Simple Airstrike Game",
            description: "This was a memorable project because even though I was just starting to learn about computers, I managed to finish this project myself... :')",
            url: game,
            type: 'image',
            repo: 'https://github.com/AnandaIlyasa/Tubes-Konsep-Pemrograman-Game-Sederhana'

        },
        {
            name: "Just a Cashier App",
            description: "This project aims to explore and study microservices. In this project I learned to implement independent Services, Api Gateway, and Service Discovery.",
            url: cashier_app,
            type: 'image',
            repo: 'https://github.com/Spring-Boot-Microservice-Playground'

        },
        {
            name: "Arithmetic Turing Machine Simulator",
            description: "I try to remake my class final project while also learning about Webflux which is one of reactive streams technology implementation in Java. Webapp / frontend for this project will be available soon..🙏",
            url: tm,
            type: 'image',
            repo: 'https://github.com/AnandaIlyasa/reactive-tm-be'

        },
    ]

    return (
        <Box width='70%'>
            <ProjectSlide projects={projets} />
        </Box>
    );
}