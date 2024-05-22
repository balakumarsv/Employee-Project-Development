import React, { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import "./LoginPagefront.css";

function LoginPageFront() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    if (
      (email === "abinash@gmail.com" && password === "sec") ||
      (email === "mark@gmail.com" && password === "facebook")
    ) {
      localStorage.setItem("token", "my_secret_token");
      navigate(-2);
      setSuccessMessage("Login Succefull..!")
      //   console.log("Successful");
    }else if( (email === "" && password === "") ||
    (email === "" && password === "")){
      setErrorMessage("! Enter username & Password")
    }
    else if(email === ""){
      setErrorMessage("Enter Email");
    }
     else if (email !== "abinash@gmail.com" && email !== "mark@gmail.com") {
      setErrorMessage("! Invalid username");
      console.log("invalid username");
    }
    
    else if(password === ""){
      setErrorMessage("Enter Password");
    }
    
    else {
      setErrorMessage("! Invalid password");
      console.log("invalid password")
    } 
  };

  return (
    <div className="login-page-container">
      <div className="background-color-login">
        <div className="login-page container-fluid">
          <div className="row justify-content-end">
            <div className="col-md-3">
              <Sheet
                className="login-page-container rounded-4"
                sx={{
                  py: 3,
                  px: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  borderRadius: "sm",
                  boxShadow: "md",
                }}
                variant="outlined"
              >
                <div>
                  <Typography level="h4" component="h1" className="text-center">
                    <b>Welcome to EMS</b>
                  </Typography>
                </div>
                {errorMessage && (
                  <div className="alert alert-danger text-center text-danger fw-semibold" role="alert">
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>
                      <span>Email</span>
                    </FormLabel>
                    <Input
                      name="email"
                      type="email"
                      placeholder="johndoe@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="new-password" 
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="new-password" 
                    />
                  </FormControl>
                  <Button type="submit" sx={{ mt: 1 }}>
                    Log in
                  </Button>
                </form>
                <Typography
                  endDecorator={<Link href="/login">Sign up</Link>}
                  fontSize="sm"
                  sx={{ alignSelf: "center" }}
                >
                  Don't have an account?
                </Typography>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPageFront;
