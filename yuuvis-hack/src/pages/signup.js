import React from 'react'



const CreateProfile = () => 
    <div className='signuppage text-center'>
        <form className="pt-5 pb-5">
            <h1>Your Profile</h1>
            <div className="form-group row">
                <div className='col-sm-6'>
                    <label for="Profile" className>First Name</label>
                    <input type="text" class="form-control" placeholder="First Name"/>
                </div>
                <div className="col-sm-6">
                    <label for="Profile">Last Name</label>
                    <input type="text" class="form-control" placeholder="Last Name"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-6">
                    <label for="Profile">Email address</label>
                    <input type="email" class="form-control" placeholder="name@example.com"/>
                </div>
                <div className="col-sm-6">
                    <label for="Profile">Password</label>
                    <input type="password" class="form-control" placeholder="Password"/>
                </div>
            </div>
            <div className="form-group">
                <label for="Profile">Short Bio</label>
                <textarea class="form-control" placeholder="I am an amateur chef who..." rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Create your profile</button>
        </form>
    </div> 

export default CreateProfile