import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

import * as S from "./styles"
import FormViewController from "./viewController";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Topic } from "@/models/General";
import PlayersPanel from "../PlayersPanel";
import React from "react";
import { useGameContext } from "@/context/GameContext";

const FormGame = () => {
  const [userForm, setUserForm] = React.useState<Topic[] | any>()
  const {players} = useGameContext()
  const selectedLetter = "J";
  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();

  const onSubmit = (data: Topic) => {
    console.log(data); // Aqui você terá acesso aos dados do formulário após o envio
  };


  const { topics, ramdomColor, color } = FormViewController();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    setValue(fieldName, e.target.value);
    setUserForm(getValues())

  };


  return (
    <S.FormContainer>
        <PlayersPanel players={players} userForm={userForm}/>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="title">{selectedLetter}</p>

        <S.FormWrapper>
          {topics.map((item) => (
            <S.FormItem className="form-item" key={item.name}>
              <FormControl className="form-control">
                <TextField
                  id={item.name}
                  className="text-field"
                  placeholder={item.name}
                  aria-describedby="my-helper-text"
                  {...register(item.name)}
                  onChange={(e) => handleInputChange(e, item.name)} // Atualiza o valor do campo no evento onChange
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <p className="left-icon">{item.icon}</p>
                      </InputAdornment>
                    ),
                  }}
                />
                <FormHelperText id="my-helper-text">
                  {item.name} com a letra <span>{selectedLetter}</span>
                </FormHelperText>
              </FormControl>
            </S.FormItem>
          ))}
        </S.FormWrapper>
        <Button
          type="submit"
          style={{
            width: 200,
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            marginTop: 16,
            marginBottom: 16,
          }}
          variant="contained"
          color="error"
        >
          Concluir
        </Button>
      </form>
    </S.FormContainer>
  );
};

export default FormGame;
