import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  register: {
    marginTop: "8px",
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    marginTop: "90px",
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: "30px",
  },
  submit: {
    margin:"20px 0px 10px"
  },
  title: {
    marginTop: "15px"
  }
}))

export default useStyles;
