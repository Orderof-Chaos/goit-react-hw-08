import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
const ContactForm = () => { 

    const dispatch = useDispatch();
    
    const onlyLaters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

    const onlyNumbers = /^[0-9]+$/;

    const validSchema = Yup.object().shape({
        name: Yup.string()
            .required("this field is required")
            .min(3, "at least 3 symbols")
            .max(25, "no more than 25 characters")
            .matches(onlyLaters, "only laters!"),
        number: Yup.string()
            .matches(onlyNumbers, "wrong phone number")
            .required("this field is required"),
    });

    const handleSubmit = (values, actions) => {
        dispatch(addContact({ ...values, id: nanoid() }));
        actions.resetForm();
    };

    return (
        <Formik initialValues={{
            name: "",
            number: '',
        }}
            onSubmit={handleSubmit}
            validationSchema={validSchema} >
            <Form className={s.form}>
                <label>
            <p>Name</p>
                    <Field type="text" name="name" />
                    <ErrorMessage
                        name="name"
                        component="p"
                        className={s.error}
                    />
                </label>
                <label>
                    <p>Phone number</p>
                    <Field
                        type="text"
                        name="number"
                    />
                    <ErrorMessage
                        name="number"
                        component="p"
                        className={s.error}
                    />
                </label>
                <button
                    type="submit">
                    Save contact
                </button>
            </Form>
        </Formik>
    )
}
export default ContactForm