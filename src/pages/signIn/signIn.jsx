import React from "react";
import Card from "@mui/material/Card";
// import TextField from "@mui/material/TextField";
import "../signIn/signIn.css";
import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";

export const SignIn = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    // <div className="signInOuterContainer">
    // <Card className="signInOuterContainer">
    <Card sx={{ minWidth: 275 }} className="signInOuterContainer">
      <div className="text-singin">
        {/* <p style={{ marginLeft: "35%", fontSize: "150%" }}>SignIn</p> */}
        {/* <div>SignIn</div> */}
        <Button variant="text" style={{ color: "black" }}>
          SignIn
        </Button>
      </div>

      <div className="text-field">
        <TextField
          label="email id"
          id="outlined-size-small"
          defaultValue="email"
          size="small"
          style={{ width: "287px", marginLeft: "9px" }}
        />
        <FormControl sx={{ m: 1, width: "32ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" size="small">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            inputProps={{
              style: {
                fontSize: 14,
                height: 40,
                width: 350,
                padding: "0 14px",
              },
            }}
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div className="button">
        <Button
          variant="contained"
          size="small"
          style={{ width: "287px", marginLeft: "9px" }}
        >
          Login
        </Button>

        <div>OR</div>
      </div>
      <div className="facebook-button">
        <Button
          variant="contained"
          size="small"
          className="facebook"
          inputProps={{
            style: {
              color:"#A03037",
            },
          }}
        >
          facebook
        </Button>
        <Button variant="contained" disabled>
          Google
        </Button>
      </div>
      {/* </div> */}
    </Card>
  );
};
