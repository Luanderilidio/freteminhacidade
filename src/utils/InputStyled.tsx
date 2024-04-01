export const styleSX = {
    '& .MuiInputLabel-root': { // Estilizando o rótulo dentro do TextField
      color: '#222222', // Definindo a cor do rótulo
      fontWeight: 'bold',
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': { // Estilizando o rótulo quando encolhido (shrink)
      color: '#222222', // Definindo a cor do rótulo encolhido
      fontWeight: 'bold',
    },
    '& .MuiOutlinedInput-input': { // Estilizando o input de texto dentro do Autocomplete
      fontSize: '16px', // Definindo o tamanho da fonte
      fontWeight: 'bold',
      borderRadius: '16px',
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: '16px',
      "& fieldset": {
        borderColor: "#222222", // Define a cor da borda
        borderWidth: 2,
      },
      "&:hover fieldset": {
        borderColor: "#222222", // Define a cor da borda quando o mouse passa sobre o input
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000", // Define a cor da borda quando o input está focado
      },
    },
  };