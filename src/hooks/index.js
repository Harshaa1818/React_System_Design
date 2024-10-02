import { useMutation, useQuery } from "@tanstack/react-query"; 
import axios from "axios";

export const useSignup = () => {
    const mutation = useMutation({
       mutationFn: async({firstname, lastname, email, password, confirmPassword})=>
        {
            console.log(firstname,
                lastname,
                email,
                password,
                confirmPassword);
            
        //     const{data} = await axios.post('/tasks',
        //     {
        //         firstname,
        //         lastname,
        //         email,
        //         password,
        //         confirmPassword
        //     })
        // console.log(data)
          

    }
})


    return mutation;
}
