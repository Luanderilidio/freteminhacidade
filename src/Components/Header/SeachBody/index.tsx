// @ts-ignore

import { AccountCircle } from "@mui/icons-material";
import {
  Autocomplete,
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import axios from "axios";

import { useState } from "react";
import { useQuery } from "react-query";
import { styleSX } from "../../../utils/InputStyled";

export default function SearchBody() {
  const [openDropDownBody, setOpenDropDownBody] = useState(false);
  const [body, setBody] = useState("");
  const [bodies, setBodies] = useState([]);

  const { data, isLoading, isError, error, refetch } = useQuery(
    "freights",
    async () => {
      const response = await axios.get("http://localhost:3000/estudants");
      let body = response.data.map((item: any) => item.typeWorkBody);
      setBodies(body);
      console.log("Bodyes", body)
      return response.data;
    },
    {
      retry: 3,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Autocomplete
      sx={{ zIndex: 1000 }}
      options={bodies}
      renderInput={(params) => (
        <TextField sx={styleSX} {...params} label="Tipo de Carroçaria" />
      )}
    />
  );
}
