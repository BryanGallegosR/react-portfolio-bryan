import { Button, Card, CardActions, CardContent, CardMedia, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { minWidth } from '@mui/system';
import React, { useEffect, useState } from 'react'


export default function ScoreKeeper() {

    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [winningScore, setWinningScore] = useState(7);
    const [winner, setWinner] = useState(false)
    const [Loser, setLoser] = useState(false)

    function handleP1PlusOne() {
        if (!isGameOver) {
            if (p1Score === winningScore) {
                setIsGameOver(true)
            }
            else (setP1Score(p1Score + 1));
        }
    }
    function handleP2PlusOne() {
        if (!isGameOver) {
            if (p2Score === winningScore) {
                setIsGameOver(true)
            }
            else (setP2Score(p2Score + 1));
        }
    }
    function handleReset() {
        setP1Score(0);
        setP2Score(0);
        setIsGameOver(false);
    }
    function handlePlayToChange(ev) {
        setWinningScore(ev.target.value)
    }

    function playerWins() {
        setWinner(true)
    }
    function playerLoses() {
        setLoser(true)
    }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}>
                <Card
                    style={{ backgroundColor: "#8DB600" }}
                    sx={{
                        boxShadow: 20,
                        borderRadius: '10px',
                        maxWidth: 480,
                        minWidth: 440
                    }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                    />
                    <CardContent>
                        <Typography variant='h2'
                            style={{ color: "#fff" }}>
                            <span >{p1Score}</span> a <span >{p2Score}</span>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <FormControl
                                    sx={{ m: 1, minWidth: 120 }}
                                    size="small">
                                    <InputLabel id="play-to"
                                        style={{ color: "#fff" }}>Jugar hasta</InputLabel>
                                    <Select
                                        style={{ color: "#fff" }}
                                        id="playToSelect"
                                        value={winningScore}
                                        label="PlayTo"
                                        onChange={handlePlayToChange}
                                    >
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                        <MenuItem value={7}>7</MenuItem>
                                        <MenuItem value={8}>8</MenuItem>
                                        <MenuItem value={9}>9</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={11}>11</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={5}>
                                <Button
                                    variant="contained"
                                    onClick={handleP1PlusOne}
                                    fullWidth
                                    style={{ backgroundColor: "#6F9000" }}
                                >+1 Jugador 1</Button>
                            </Grid>
                            <Grid item xs={5}>
                                <Button
                                    variant="contained"
                                    onClick={handleP2PlusOne}
                                    fullWidth
                                    style={{ backgroundColor: "#6F9000" }}
                                >+1 Jugador 2</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    variant="contained"
                                    onClick={handleReset}
                                    fullWidth
                                    style={{ backgroundColor: "#6F9000" }}
                                >Reset</Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </div>



        </>
    )
}
