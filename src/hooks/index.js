import { useMutation, useQuery } from "@tanstack/react-query"; 

export const useSignup = () => {
    const mutation = useMutation({
       mutationFn: async({fname, lname, email, password, confirmPassword})=>
        {
            const{data} = await axios.post('/tasks',
            {
                fname,
                lname,
                email,
                password,
                confirmPassword
            })

          

    }
})


    return mutation;
}
