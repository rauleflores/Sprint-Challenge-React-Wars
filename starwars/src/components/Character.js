import React, { useEffect, useState} from 'react';
import { Card, CardContent, CardActionArea, Button, FormHelperText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';

const useStyles = makeStyles({
    root: {
      width: 500,
      margin: 10,
      backgroundColor: 'yellow'
    },
    title: {
      fontSize: '24px',
    },
    pos: {
      marginBottom: 12,
    },
    button: {
        border: '1px solid dodgerblue',
        backgroundColor: 'dodgerblue'
    },
    anchor: {
        textDecoration: 'none',
        color: 'green',
        fontSize: '16px',
        fontWeight: 'bold'
    }

  });

export default function Character(props) {
    const [speciesVar, setSpeciesVar] = useState(props.characters.species)
    const [speciesName, setSpeciesName] = useState('')
    const [homeworldVar, setHomeworldVar] = useState(props.characters.homeworld)
    const [homeworldName, setHomeworldName] = useState('')
    const [moreInfo, setMoreInfo] = useState(props.characters.url)

    const classes = useStyles();

    useEffect(() => {
        Axios.get(speciesVar[0]).then(res => {
            setSpeciesName(res.data.name);
        }).catch(err => 
            console.log(err)
            )
    },[])
    useEffect(()=>{
        Axios.get(homeworldVar).then(res=> {
            setHomeworldName(res.data.name)
        }).catch(err=>console.log(err))
    },[])
    useEffect(()=>{
        Axios.get()
    },[])

    return (
        <Card className={classes.root}>
            <CardContent>
                <CardContent className={classes.title}>
                    Name: {props.characters.name}
                </CardContent>
                <CardContent>
                    Sex: {props.characters.gender}
                </CardContent>
                <CardContent>
                    Mass: {props.characters.mass}kg
                </CardContent>
                <CardContent>
                    Species: {speciesName}
                </CardContent>
                <CardContent>
                    Homeworld: {homeworldName}
                </CardContent>
                <Button className={classes.button}>
                    <a className={classes.anchor} href={moreInfo}>More Info.</a>
                </Button>
            </CardContent>
        </Card>
    )
} 
