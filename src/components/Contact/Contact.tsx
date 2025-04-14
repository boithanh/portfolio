'use client'
import React from 'react'
import InputCustom from '@/hooks/inputCustom';
import TextareaCustom from '@/hooks/textareaCustom';
import { useFormik } from 'formik'


type Props = {}
type formType = {
    txtName: string;
    txtPhone: string;
    txtEmail: string;
    txtMessage: string;
}

const Contact = (props: Props) => {
    const { values, handleSubmit, handleChange, handleBlur, touched, errors, resetForm } = useFormik<formType>({
        initialValues: {
            txtName: "",
            txtPhone: "",
            txtEmail: "",
            txtMessage: "",
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <section className='contact-form my-5'>
            <div className='row'>
                <div className='col-12 col-md-12 col-xl-6 mx-auto'>
                    <form onSubmit={handleSubmit} className='border p-5 shadow-lg rounded-3'>
                        <div className='title mb-5 text-center'>
                            <h2>Contact Me</h2>
                        </div>
                        <InputCustom name="txtName" id="txtName" label={"First & Last Name"} type='text' value={values.txtName} placeHolder='Your Full Name' onchange={handleChange} onBlur={handleBlur} />
                        <InputCustom name="txtPhone" id="txtPhone" label={"Phone Number"} type='number' value={values.txtPhone} placeHolder='Your Phone Number' onchange={handleChange} onBlur={handleBlur} />
                        <InputCustom name="txtEmail" id="txtEmail" label={"Email"} type='email' value={values.txtEmail} placeHolder='Your email' onchange={handleChange} onBlur={handleBlur} />
                        <TextareaCustom name='txtMessage' id="txtMessage" rows={5} value={values.txtMessage} placeHolder='Type your message' onChange={handleChange} />
                        <div className='text-center'><button type='submit' className='btn btn-dark mt-3'>Contact Now</button></div>
                    </form>
                </div>
            </div>
        </section>
    )

}

export default Contact