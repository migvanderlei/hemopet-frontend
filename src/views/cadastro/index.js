import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { KeyboardArrowRight } from '@mui/icons-material';
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
const registerAnimal = async (newAnimal) => {
//   const axiosInstance = axios.create({baseUrl: "https://hemopet-api.herokuapp.com"})

  const url = "https://hemopet-api.herokuapp.com/animal"

  return await axios
    .post(url, newAnimal)
    .then(function (response) {
      console.log(response);
      window.location.reload();
      alert("Dados cadastrados");
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default function Cadastrar() {
    const classes = useStyles();

    // Declaraões das Variáveis

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [sexo, setSexo] = useState('');
    const [tipoSang, setTipoSang] = useState('');
    const [dataNascAnimal, setDataNascAnimal] = useState('');
    const [cpf, setCpf] = useState('');
    const [nomeTutor, setNomeTutor] = useState('');
    const [dataNascTutor, setDataNascTutor] = useState('');

    // Variáveis auxiliares para checagem dos campos

    const [idError, setIdError] = useState(false);
    const [nomeError, setNomeError] = useState(false);
    const [racaError, setRacaError] = useState(false);
    const [sexoError, setSexoError] = useState(false);
    const [tipoSangError, setTipoSangError] = useState(false);
    const [dataNascAnimalError, setDataNascAnimalError] = useState(false);
    const [cpfError, setCpfError] = useState(false);
    const [nomeTutorError, setNomeTutorError] = useState(false);
    const [dataNascTutorError, setDataNascTutorError] = useState(false);

    // Checagens e Submissão

    const handleSubmit = (e) => {
        e.preventDefault();

        // Recolocando as variáveis em false para campos saírem do vermelho

        setIdError(false);
        setNomeError(false);
        setRacaError(false);
        setSexoError(false);
        setTipoSangError(false);
        setDataNascAnimalError(false);
        setCpfError(false);
        setNomeTutorError(false);
        setDataNascTutorError(false);

        // Checagem: deixa vermelho os campos não preenchidos

        if (id == '') {
            setIdError(true);
        }
        if (nome == '') {
            setNomeError(true);
        }
        if (raca == '') {
            setRacaError(true);
        }
        if (sexo == '') {
            setSexoError(true);
        }
        if (tipoSang == '') {
            setTipoSangError(true);
        }
        if (dataNascAnimal == '') {
            setDataNascAnimalError(true);
        }
        if (nomeTutor == '') {
            setNomeTutorError(true);
        }        
        if (cpf == '') {
            setCpfError(true);
        }        
        if (dataNascTutor == '') {
            setDataNascTutorError(true);
        }

        // Submissão: só prossegue com todos os campos preenchidosa

        if (id && nome && raca && sexo && tipoSang && nomeTutor && cpf && dataNascTutor) {
            const newAnimal = {
                "id": id,
                "nome": nome,
                "sexo": sexo,
                "raca": raca,
                "tipo_sanguineo": tipoSang,
                "data_nascimento": dataNascAnimal,
                "status": true,
                "tutor": {
                  "nome": nomeTutor,
                  "cpf": cpf,
                  "data_nascimento": dataNascTutor,
                  "telefone": "991234567",
                  "endereco": {
                    "cep": 69022345,
                    "pais": "Brasil",
                    "estado": "AM",
                    "cidade": "Manaus",
                    "bairro": "São Francisco",
                    "rua": "Rua 10",
                    "numero": "123"
                  }
                },
                "clinica": "123",
                "exames": [],
                "doacoes": []
              } 
              registerAnimal(newAnimal).then(response => console.log(response));
        }
    };

    return (
        <Container>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant="h5" gutterBottom>
                    Dados do Animal
                </Typography>
                <TextField
                    onChange={(e) => setId(e.target.value)}
                    className={classes.field}
                    id="outlined"
                    label="ID do animal"
                    required
                    error={idError}
                />
                <TextField
                    onChange={(e) => setNome(e.target.value)}
                    className={classes.field}
                    id="outlined-textarea"
                    label="Nome"
                    multiline
                    required
                    error={nomeError}
                />
                <TextField
                    onChange={(e) => setRaca(e.target.value)}
                    className={classes.field}
                    id="outlined-textarea"
                    label="Raça"
                    multiline
                    required
                    error={racaError}
                />
                <TextField
                    onChange={(e) => setSexo(e.target.value)}
                    className={classes.field}
                    id="outlined-textarea"
                    label="Sexo"
                    multiline
                    required
                    error={sexoError}
                />
                <TextField
                    onChange={(e) => setTipoSang(e.target.value)}
                    className={classes.field}
                    id="outlined-textarea"
                    label="Tipo Sanguíneo"
                    multiline
                    required
                    error={tipoSangError}
                />
                <TextField
                    onChange={(e) => setDataNascAnimal(e.target.value)}
                    className={classes.field}
                    id="outlined-textarea"
                    label="Data de Nascimento"
                    multiline
                    error={dataNascAnimalError}
                />

                <Typography variant="h5" gutterBottom>
                    Dados do Tutor
                </Typography>

                <TextField
                    onChange={(e) => setCpf(e.target.value)}
                    className={classes.field}
                    id="outlined"
                    label="CPF"
                    required
                    error={cpfError}
                />
                <TextField
                    onChange={(e) => setDataNascTutor(e.target.value)}
                    className={classes.field}
                    id="outlined"
                    label="Data de Nacimento"
                    required
                    error={dataNascTutorError}
                />
                <TextField
                    onChange={(e) => setNomeTutor(e.target.value)}
                    className={classes.field}
                    id="outlined"
                    label="Nome"
                    required
                    error={nomeTutorError}
                />
                <p></p>
                <Grid container direction="column" alignItems="center">
                    <Button size="large" variant="contained" margin="dense" endIcon={<KeyboardArrowRight />} type="submit">
                        Cadastrar
                    </Button>
                </Grid>
            </form>
        </Container>
    );
}
