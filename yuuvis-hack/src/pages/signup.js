import React from 'react';
import NavigationBar from '../components/NavigationBar';

const butStyle = {
    margin: '20px',
    width: '200px',
    background: '#D3D3D3',
    color: 'black',
};

const CreateProfile = () => 
<div>
    <NavigationBar></NavigationBar>
    <div className='signuppage text-center ml-3 mr-3'>
        <form className="pt-5 pb-5">
            <h1>Your Profile</h1>
            <div className="form-group row">
                <div className='col-sm-6'>
                    <label for="Profile" className>First Name</label>
                    <input type="text" class="form-control" placeholder="John"/>
                </div>
                <div className="col-sm-6">
                    <label for="Profile">Last Name</label>
                    <input type="text" class="form-control" placeholder="Appleseed"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-6">
                    <label for="Profile">Email Address</label>
                    <input type="email" class="form-control" placeholder="name@example.com"/>
                </div>
                <div className="col-sm-6">
                    <label for="Profile">Password</label>
                    <input type="password" class="form-control" placeholder=""/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-6">
                    <label for="Profile">Company Name</label>
                    <input type="email" class="form-control" placeholder=""/>
                </div>
                <div className="col-sm-6">
                    <label for="Profile">Video Source URL</label>
                    <input type="password" class="form-control" placeholder=""/>
                </div>
            </div>
            <div className="form-group">
                <label for="Profile">Short Bio</label>
                <textarea class="form-control" placeholder="I am a business owner who..." rows="3"></textarea>
            </div>
            <a type="button" href="/signIn" class="btn btn-success mb-2" style={butStyle}>Create your profile!</a>
        </form>
    </div> 
    </div>

export default CreateProfile