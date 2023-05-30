import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function SignUpButton(){
    const navigate=useNavigate()
    return(
        <div>
            <Button variant="outlined"
            onClick={()=>navigate('/home')}
            sx={{
                backgroundColor:"#B2BEB5",
                width:"30rem"
            }}
            >Sign Up</Button>
        </div>
    )

}