import React, { useState, useEffect } from 'react';
import image from './image/user.png'
import './form.css'

function FormValidation() {
    const initial = {
        name: '',
        email: '',
        textArea: '',
        rating: '',
        currentDateTime: new Date().toLocaleString(),
    }
    const date = new Date();
    console.log(date);
    const hour = date.getHours();

    const [input, setInput] = useState(initial)
    const [count, setCount] = useState(0)
    const [store, setStore] = useState([])
    const [errors, setErrors] = useState({})
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    // console.log(hour);


    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        // console.log({ ...input, [e.target.name]: e.target.value })   
    }
    const CheckValidate = (input) => {
        console.log(input.name)
        const errors = {}

        if (input.name === "" || input.name === undefined || input.name === ' ') {
            errors.name = 'set name*'
            console.log(errors)
        }
        if (input.email === "" || input.email === undefined || input.email === ' ') {
            errors.email = 'set email*'
            console.log(errors)
        }
        if (input.rating === "") {
            errors.rating = 'set rating*'
            console.log(errors)
        }
        // if (input.rating.length <6) {
        //     errors.rating = 'Valid rating*'
        //     console.log(errors)
        // }
        if (input.textArea === "" || input.textArea === undefined || input.textArea === ' ') {
            errors.password = 'Enter 6 digit password*'
            console.log(errors)
        }
        // if(input.name != '' && input.email != '' && input.password != '' ){
        //     alert('Login Successfullyy...')
        //     // window.location.reload();
        // }
        return errors
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const validate = CheckValidate(input)
        setErrors(CheckValidate(input))
        // const newStore = store
        // newStore.push(input)
        // setStore(newStore)
        console.log(input.value)
        console.log(input)
        const check = Object.keys(validate)
        if (check.length < 1) {
            setStore([...store, input])
            setInput(initial)
            console.log(initial);
            setCount(count + 1)

        }
    }

    return (
        <>
            <div className="container  ">
                <form action="" className='text-center  col-6 mt-5  form-bg m-auto' onSubmit={handleSubmit}>
                    <h1 className='mb-4 form-title text-white fw-bold'>Your <span className='text-gradiant'>REVIEW</span></h1>
                    <div className='d-flex justify-content-between' >
                        <div style={{ width: '47.666667%' }}>
                            <input type="text" value={input.name} name='name' placeholder='Enter Your UserName' className='form-control mb-3 border-0 ' onChange={handleChange} />
                            <p className='mb-3 ms-2  text-danger text-start '>{errors && errors.name}</p>
                        </div>
                        <div className="col-6">
                            <input type="email" value={input.email} name='email' placeholder='Enter Your Email' className='form-control mb-3 border-0 ' onChange={handleChange} />
                            <p className='mb-3 ms-2  text-danger text-start '>{errors && errors.email}</p>
                        </div>
                    </div>
                    <select className="form-select mb-3 border-0" value={input.rating} name='rating' aria-label="Default select example" onChange={handleChange} >
                        <option selected className='text-dark'>Select Your Rating</option>
                        <option value="Poor" className='text-dark'>Poor</option>
                        <option value="Average" className='text-dark'>Average</option>
                        <option value="Good" className='text-dark'>Good</option>
                        <option value="Excellent" className='text-dark'>Excellent</option>
                    </select>
                    <p className='mb-3 ms-2  text-danger text-start '>{errors && errors.rating}</p>
                    <textarea name="textArea" id="" value={input.textArea} className='form-control mb-3 border-0' cols="30" rows="10" onChange={handleChange} style={{ height: "200px" }} />
                    <p className='mb-3 ms-2  text-danger text-start'>{errors && errors.password}</p>
                    <button className='btn btn-gradiant w-100 fw-bold fs-3 text-white border-0'> Submit</button>
                </form>
                <div className="box  form-bg text-center mt-5 ">
                    <h1 className='mb-4 form-title text-white fw-bold'>List Of  <span className='text-gradiant'>REVIEW({count})</span></h1>
                    <table class=" text-start w-100 text-white b-0 border-style p-5" >
                        <tbody>
                            {
                                store.map((e, i) => {

                                    return <tr className='border-style position-relative '>
                                        <div className='d-flex p-4 '>
                                            <div>
                                                <td className=' '><img src={image} alt="img" style={{ width: '75px', height: "75px" }} /></td>
                                            </div>
                                            <div className='w-100 mt-2 ms-2 col-3'>
                                                <td className=' d-block'>{e.name}</td>
                                                <td className=' d-block'>{e.email}</td>
                                            </div>
                                        </div>
                                        <td className='col-5'>{e.textArea}</td>
                                        <td className=''>{e.rating}</td>
                                        <td className='text-end pe-2'>{initial.currentDateTime}</td>

                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default FormValidation
