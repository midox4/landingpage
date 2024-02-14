import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import anim from "../../assets/img/anim2.json";
import Lottie from "lottie-react";
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/500.css"


// TODO remove, this demo shouldn't need to reset the theme.

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        margin:'20px',
        width: "97%",
        position: "relative",
        borderRadius: "8px",
        height: "94vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
    
    <Typography  sx={{fontFamily:'Roboto',fontWeight:'500', fontSize:'30px', textAlign:'center'}}>
         <b>
         Explorez Notre Solution ERP <br /> dédiée au secteur postal, optimisée pour
          répondre <br /> à vos besoins spécifiques.
            </b> 
            
          <Box  sx={{textAlign:"center", fontFamily:'Roboto', marginTop:'8px', fontSize:'20px' , color:'gray'}}>
          Découvrez comment notre plateforme
          vous permet de gérer <br /> efficacement les opérations postales
            </Box>
            
          <img src="" alt=""></img>
        </Typography>

        <Box   sx={{
        width: "97%",
        position: "relative",
        height: "94vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "start",

      }}>
        <Box sx={{ width: "50%", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            marginTop: 8,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 , width:'60%' }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        <Lottie
          animationData={anim}
          style={{ width: "400px", height: "400px", marginTop: "60px"}}
        />

       
      </Box>
        </Box>
        <Typography>
        <p className="text-center mb-1 ">
            Copyright &copy; {new Date().getFullYear()} {""}
            All Rights Reserved. Made By <span> La Poste Tunisienne</span>
          </p>
          <img src="" alt=""></img>
        </Typography>
   
    </Box>
  );
}

export default Login;
