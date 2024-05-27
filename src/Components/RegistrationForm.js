import React from 'react'
import { useState } from 'react'

export default function RegistrationForm() {
    const [inputName, setInputName] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [inputAddress, setInputAdress] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [email, setEmail] = useState('');
    const [inputDob, setInputDob] = useState('');
    const [dob, setDob] = useState('');
    const [inputGender, setInputGender] = useState('');
    const [gender, setGender] = useState('');
    const [inputClassName, setInputClassName] = useState('');
    const [className, setClassName] = useState('');
    const [inputDivision, setInputDivision] = useState('');
    const [division, setDivision] = useState('');
    const [inputSubjectGroup, setInputSubjectGroup] = useState('');
    const [subjectGroup, setSubjectGroup] = useState('');
    const [inputBloodGroup, setInputBloodGroup] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [inputAadharNumber, setInputAadharNumber] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');

    const [nameError, setNameError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [dobError, setDobError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [classNameError, setClassNameError] = useState('');
    const [divisionError, setDivisionError] = useState('');
    const [subjectGroupError, setSubjectGroupError] = useState('');
    const [bloodGroupError, setBloodGroupError] = useState('');
    const [aadharNumberError, setAadharNumberError] = useState('');

    const handleInputChange = (e) => {
        setInputName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateData()) {
            setName(inputName);
            setAddress(inputAddress);
            setEmail(inputEmail);
            setDob(inputDob);
            setGender(inputGender);
            setClassName(inputClassName);
            setDivision(inputDivision);
            setSubjectGroup(inputSubjectGroup);
            setBloodGroup(inputBloodGroup);
            setAadharNumber(inputAadharNumber);
        }
    }

    const handleAddressChange = (e) => {
        setInputAdress(e.target.value);
    }

    const handleEmailChange = (e) => {
        setInputEmail(e.target.value);
    }

    const handleDobChange = (e) => {
        setInputDob(e.target.value);
    }

    const handleGenderChange = (e) => {
        setInputGender(e.target.value);
    }

    const handleClassNameChange = (e) => {
        setInputClassName(e.target.value);
    }

    const handleDivisionChange = (e) => {
        setInputDivision(e.target.value);
    }

    const handleSubjectGroupChange = (e) => {
        setInputSubjectGroup(e.target.value);
    }

    const handleBloodGroupChange = (e) => {
        setInputBloodGroup(e.target.value);
    }

    const handleAadharNumberChange = (e) => {
        setInputAadharNumber(e.target.value);
    }

    const validateData = () => {
        let isValid = true;
        if (inputName.trim() === '') {
            setNameError('Name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        if (inputAddress.trim() === '') {
            setAddressError('Address is required');
            isValid = false;
        } else {
            setAddressError('');
        }

        if (inputEmail.trim() === '') {
            setEmailError('Email is required');
            isValid = false;
        } else if (!inputEmail.includes('@') || !inputEmail.includes('.')) {
            setEmailError('Email is not valid');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (inputDob.trim() === '') {
            setDobError('Date of Birth is required');
            isValid = false;
        }
        else if (new Date(inputDob) > new Date()) {
            setDobError('Date of Birth cannot be a future date');
            isValid = false;
        }
        else {
            setDobError('');
        }

        if (!inputGender) {
            setGenderError('Please select a gender')
            isValid = false;
        }
        else {
            setGenderError('');
        }

        if (inputClassName.trim() === '') {
            setClassNameError('Class Name is required');
            isValid = false;
        } else {
            setClassNameError('');
        }

        if (inputDivision.trim() === '') {
            setDivisionError('Division is required');
            isValid = false;
        }
        else {
            setDivisionError('');
        }

        if (!inputSubjectGroup) {
            setSubjectGroupError('Please select a subject group')
            isValid = false;
        }
        else {
            setSubjectGroupError('');
        }

        if (inputBloodGroup.trim() === '') {
            setBloodGroupError('Blood Group is required');
            isValid = false;
        }
        else {
            setBloodGroupError('');
        }

        if (inputAadharNumber.trim() === '') {
            setAadharNumberError('Aadhar Number is required');
            isValid = false;
        }
        else if (inputAadharNumber.length !== 12) {
            setAadharNumberError('Aadhar Number should be of 12 digits');
            isValid = false;
        }
        else {
            setAadharNumberError('');
        }

        return isValid;
    }

    return (
        <div>
            <div className="container">
                <h2>Student Form</h2>
                <form id="studentForm">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" onChange={handleInputChange} value={inputName} id="name" required />
                                {nameError && <div className="text-danger">{nameError}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <textarea className="form-control" id="address" rows="2" onChange={handleAddressChange} value={inputAddress} required></textarea>
                                {addressError && <div className="text-danger">{addressError}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" onChange={handleEmailChange} value={inputEmail} className="form-control" id="email" required />
                                {emailError && <div className="text-danger">{emailError}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dob" className="form-label">Date of Birth</label>
                                <input type="date" onChange={handleDobChange} value={inputDob} className="form-control" id="dob" required />
                                {dobError && <div className="text-danger">{dobError}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Gender</label>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" onChange={handleGenderChange} type="radio" name="gender" id="male" value="Male" required />
                                        <label className="form-check-label" htmlFor="male">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" onChange={handleGenderChange} id="female" value="Female" required />
                                        <label className="form-check-label" htmlFor="female">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" onChange={handleGenderChange} id="other" value="Other" required />
                                        <label className="form-check-label" htmlFor="other">Other</label>
                                    </div>
                                </div>
                                {genderError && <div className="text-danger">{genderError}</div>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="className" className="form-label">className</label>
                                <input type="text" onChange={handleClassNameChange} value={inputClassName} className="form-control" id="className" required />
                                {classNameError && <div className="text-danger">{classNameError}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="division" className="form-label">Division</label>
                                <input type="text" className="form-control" onChange={handleDivisionChange} value={inputDivision} id="division" required />
                                {divisionError && <div className="text-danger">{divisionError}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="subjectGroup" className="form-label">Subject Group</label>
                                <select className="form-select" onChange={handleSubjectGroupChange} value={inputSubjectGroup} id="subjectGroup" required>
                                    <option defaultValue disabled value="">Choose...</option>
                                    <option value="Science">Science</option>
                                    <option value="Commerce">Commerce</option>
                                    <option value="Arts">Arts</option>
                                </select>
                            </div>
                            {subjectGroupError && <div className="text-danger">{subjectGroupError}</div>}

                            <div className="mb-3">
                                <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
                                <input type="text" className="form-control" onChange={handleBloodGroupChange} value={inputBloodGroup} id="bloodGroup" required />
                            </div>
                            {bloodGroupError && <div className="text-danger">{bloodGroupError}</div>}
                            <div className="mb-3">
                                <label htmlFor="aadharNumber" className="form-label">Aadhar Number</label>
                                <input type="number" className="form-control" id="aadharNumber" onChange={handleAadharNumberChange} value={inputAadharNumber} required />
                            </div>
                            {aadharNumberError && <div className="text-danger">{aadharNumberError}</div>}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <button type="reset" className="btn btn-secondary">Cancel</button>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                    </div>
                </form>
                {name && !nameError && !addressError && !dobError && !emailError && !genderError && !classNameError && !divisionError &&
                    !subjectGroupError && !bloodGroupError && !aadharNumberError && <div className="mt-3" id="result">
                        <p> The name of the student is {name}</p>
                        <p>The address of the student is {address}</p>
                        <p>The email of the student is {email}</p>
                        <p>The Date of Birth of the student is {dob}</p>
                        <p>The gender of the student is {gender}</p>
                        <p>The gender of the student is {className}</p>
                        <p>The division of the student is {division}</p>
                        <p>The subject group of the student is {subjectGroup}</p>
                        <p>The blood group of the student is {bloodGroup}</p>
                        <p>The aadhar number of the student is {aadharNumber}</p>
                    </div>
                }
            </div>
        </div >
    )
}
