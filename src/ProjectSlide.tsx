import { Box, Grid, Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import ReactPlayer from 'react-player/youtube';

export const ProjectSlide = ({ projects }: { projects: { name: string, description: string, url: string, repo: string, type: string }[] }) => {
    return (
        <Carousel
            next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
            prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
            animation='slide'
            autoPlay={false}
            navButtonsAlwaysVisible
        >
            {
                projects.map((item, i) => <Item key={i} props={item} />)
            }
        </Carousel>
    )
}

const Item = ({ props }: { props: { name: string, description: string, url: string, repo: string, type: string } }) => {
    return (
        <Box paddingX={4} height='65vh'>
            <Typography variant='h4' align='center' marginBottom={2}>{props.name}</Typography>
            <Grid container spacing={2} direction='column' alignItems='center'>
                <Grid item>
                    {
                        props.type === 'video' ?
                            (<ReactPlayer url={props.url} playbackRate={1.5} width='500px' height='290px' />) :
                            (<img width='500px' height='290px' src={props.url} alt='project ilustration' />)
                    }
                </Grid>
                <Grid item>
                    <Typography marginBottom={1} height={20} width='800px' noWrap align='justify'>Project : <a href={props.repo} target='_blank' rel="noopener noreferrer">{props.repo}</a></Typography>
                    <Typography height={110} width='800px' overflow='hidden' textOverflow='ellipsis' align='justify'>{props.description}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}