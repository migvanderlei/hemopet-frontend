import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import axios from 'axios';
// Para as margens

const useStyles = makeStyles({
    field: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10
    }
});


// Register new package
const getAnimal = async (animalId) => {
    //   const axiosInstance = axios.create({baseUrl: "https://hemopet-api.herokuapp.com"})
    
      const url = "https://hemopet-api.herokuapp.com/animal/" + animalId;
    
      return await axios
        .get(url)
        .then(function (response) {
          console.log(response['data']);
          return response['data'];
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    

const StatusEnvio = () => {
    const classes = useStyles();

    const [idPacote, setIdPacote] = useState('');

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipoSang, setTipoSang] = useState('');
    const [dataNascAnimal, setDataNascAnimal] = useState('');
    const [cpf, setCpf] = useState('');
    const [nomeTutor, setNomeTutor] = useState('');
    const [dataNascTutor, setDataNascTutor] = useState('');

 
    const handleSubmit = (e) => {
        e.preventDefault();

        if (idPacote) {
            console.log(idPacote);
            getAnimal(idPacote).then(data => {
                setId(data['id']);
                setNome(data['nome']);
                setRaca(data["raca"]);
                setTipoSang(data['tipo_sanguineo']);
                setDataNascAnimal(data["data_nascimento"]);
                setCpf(data["tutor"]["cpf"]);
                setNomeTutor(data["tutor"]["nome"]);
                setDataNascTutor(data["tutor"]["data_nascimento"]);
                

            }).catch(console.log("Não Encontrado!"))

        }
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: 300, maxWidth: '100%' }
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <Typography variant="h5" gutterBottom>
                    Buscar envio
                </Typography>
                <TextField id="outlined-multiline-flexible" label="ID do pacote" multiline onChange={(e) => setIdPacote(e.target.value)}
                    className={classes.field} />
                <Button size="large" variant="contained" margin="hard" onClick={handleSubmit}>
                    Buscar
                </Button>
            </div>
            <div>
                <br />
                <Typography variant="h5" gutterBottom>
                    Dados do Animal
                </Typography>
                <TextField
                    className={classes.field}
                    id="outlined"
                    label="ID do animal"
                    disabled
                    value={id}
                />
                <TextField
                    className={classes.field}
                    id="outlined-textarea"
                    label="Nome"
                    multiline
                    disabled
                    value={nome}
                />
                <TextField
                    className={classes.field}
                    id="outlined-textarea"
                    label="Raça"
                    multiline
                    disabled
                    value={raca}
                />
                <TextField
                    className={classes.field}
                    id="outlined-textarea"
                    label="Sexo"
                    multiline
                    disabled
                    value={sexo}
                />
                <TextField
                    className={classes.field}
                    id="outlined-textarea"
                    label="Tipo Sanguíneo"
                    multiline
                    disabled
                    value={tipoSang}
                />
                <TextField
                    className={classes.field}
                    id="outlined-textarea"
                    label="Data de Nascimento"
                    disabled
                    value={dataNascAnimal}
                />

                <Typography variant="h5" gutterBottom>
                    Dados do Tutor
                </Typography>

                <TextField
                    className={classes.field}
                    id="outlined"
                    label="CPF"
                    disabled
                    value={cpf}
                />
                <TextField
                    className={classes.field}
                    id="outlined"
                    label="Data de Nacimento"
                    disabled
                    value={dataNascTutor}
                />
                <TextField
                    className={classes.field}
                    id="outlined"
                    label="Nome"
                    disabled
                    value={nome}
                />
            </div>
            <Grid container direction="column" alignItems="center" justify="center">
                <Button size="large" variant="contained" margin="hard">
                    Atualizar
                </Button>
            </Grid>
        </Box>
    );
};

export default StatusEnvio;
