import { ChangeEvent,FormEvent, useState, useContext } from "react";
import {GlobalContext} from "../context/GlobalContext";

const RegistrationPage = () =>{

    const {postUserData, users} = useContext(GlobalContext)
    const [formValues, setFormValues] = useState<UserObject>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = (event:FormEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        setSubmitted(true);

        setTimeout(()=>{
            setSubmitted(false)
        },3000)

        postUserData(formValues)
        setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        })
    }

    const handleChangeFirstName = (event:ChangeEvent<HTMLInputElement>) =>{
        console.log(event.target.value)
        event.persist();
        setFormValues((formValues) => ({
            ...formValues,
            firstName: event.target.value,
        }));
    }
    const handleChangeLastName = (event:ChangeEvent<HTMLInputElement>) =>{
        console.log(event.target.value)
        event.persist();
        setFormValues((formValues) => ({
            ...formValues,
            lastName: event.target.value,
        }));
    }
    const handleEmail = (event:ChangeEvent<HTMLInputElement>) =>{
        console.log(event.target.value)
        event.persist();
        setFormValues((formValues) => ({
            ...formValues,
            email: event.target.value,
        }));
    }
    const handlePassword = (event:ChangeEvent<HTMLInputElement>) =>{
        console.log(event.target.value)
        event.persist();
        setFormValues((formValues) => ({
            ...formValues,
            password: event.target.value,
        }));
    }
    return (
    <div>
        {submitted? (<div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
            </div>): null}
        <div className="card mx-auto w-50 rounded-3 mt-4 text-start fw-bold">
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                        type="text" 
                        id="firstName"
                        className="form-control" 
                        value={formValues.firstName}
                        onChange={event=> handleChangeFirstName(event)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                        type="text"
                        id="lastName"
                        className="form-control"
                        value={formValues.lastName}
                        onChange={event=> handleChangeLastName(event)}
                        
                        
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        id="email"
                        className="form-control"
                        value={formValues.email}
                        onChange={event=> handleEmail(event)}
                        
                        
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password"
                        id="password" 
                        className="form-control"
                        value={formValues.password} 
                        onChange={event=> handlePassword(event)}
                            
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary btn-block"
                        onClick={handleSubmit}
                        >Submit
                        </button> 
                    </div>          
                </form>
            </div>
        </div>
    </div>

    )
}

export default RegistrationPage;

