import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import dp from '../jrwt-polos.svg';

export const HomeTab = () => {
    return (
        <Grid item>
            <Grid
                container
                spacing={2}
                direction="row"
                alignItems="stretch"
                justifyContent="center"
            >
                <Grid item xs={5}>
                    <Box paddingLeft={15}>
                        <img src={dp} height='400px' />
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Typography marginTop={11} variant='h1'>Hi, I'm Ilyas :)</Typography>
                    <Typography paddingRight={10} marginTop={4} variant='h4'>Tech enthusiast who loves exploring and building things, enjoy being productive every day, and a fast learner.</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}