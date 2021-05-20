const RegistrationPage = () =>{
    return (
    <div className="card mx-auto w-50 rounded-3 mt-4 text-start fw-bold">
        <div className="card-body">
        <form>
            <div className="mb-3">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" />
            </div>
            <div className="text-center">
                <button className="btn btn-primary btn-block">Submit</button> 
            </div>
              
        </form>
        </div>
        
    </div>

    )
}

export default RegistrationPage;