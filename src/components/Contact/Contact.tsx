'use client'
import React from 'react'
import InputCustom from '@/hooks/inputCustom';
import TextareaCustom from '@/hooks/textareaCustom';
import { useFormik } from 'formik'
import emailjs from 'emailjs-com';


type Props = {}
type formType = {
    txtName: string;
    txtPhone: string;
    txtEmail: string;
    txtMessage: string;
}
const time = new Date().toLocaleString("vi-VN", {
    hour12: false,
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});
const Contact = (props: Props) => {
    const { values, handleSubmit, handleChange, handleBlur, touched, errors, resetForm } = useFormik<formType>({
        initialValues: {
            txtName: "",
            txtPhone: "",
            txtEmail: "",
            txtMessage: "",
        },
        onSubmit: (values) => {
            sendEmail(values)
            resetForm();
        }
    })

    const sendEmail = (values: formType) => {
        emailjs.send(
            'service_iw0qo5b',           // Service ID
            'template_njwrxxl',        // Template ID
            {
                txtName: values.txtName, //tên key phải giống như biến đặt trên template EmailJs
                time, //thời gian gửi email
                txtPhone: values.txtPhone,
                txtEmail: values.txtEmail,
                txtMessage: values.txtMessage,
                reply_to: values.txtEmail
            },
            'QXLc-y0HSI4yUfgHt', // Public Key
        ).then(
            (result) => {
                alert('Gửi thành công! Chúc mừng bạn');
            },
            (error) => {
                alert('Gửi thất bại!');
            }
        );
    }
    //Dùng sendForm trong trường hợp onsubmit đại diện bởi emailJs, khi ấy bên trong trường  HTMLFormElement truyền thẳng  e.currentTarget vào luôn vì EmailJs có cơ chế đọc dữ liệu input từ form thuần 
    // emailjs.sendForm().then((result) => {alert('Gửi thành công!')}, (error) => { alert('Gửi thất bại!')})}; 
    return (
        <section className='contact-form my-5 pt-5'>
            <div className="container-fluid">
                <div className='row pt-5'>
                    <div className='col-12 col-md-12 col-xl-6 mx-auto'>
                        <form onSubmit={handleSubmit} className='border p-5 shadow-lg rounded-3'>
                            <div className='title mb-5 text-center'>
                                <h2>Contact Me</h2>
                            </div>
                            <InputCustom name="txtName" id="txtName" label={"First & Last Name"} type='text' value={values.txtName} placeHolder='Your Full Name' onchange={handleChange} onBlur={handleBlur} />
                            <InputCustom name="txtPhone" id="txtPhone" label={"Phone Number"} type='text' value={values.txtPhone} placeHolder='Your Phone Number' onchange={handleChange} onBlur={handleBlur} />
                            <InputCustom name="txtEmail" id="txtEmail" label={"Email"} type='text' value={values.txtEmail} placeHolder='Your email' onchange={handleChange} onBlur={handleBlur} />
                            <TextareaCustom name='txtMessage' id="txtMessage" rows={5} value={values.txtMessage} placeHolder='Type your message' onChange={handleChange} />
                            <div className='text-center'><button type='submit' className='btn btn-dark mt-3'>Contact Now</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contact