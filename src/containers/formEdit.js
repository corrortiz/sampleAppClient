import React, {Component} from "react";
import {maxLength10, emailV, number} from '../assets/jv/validatorsForms';
import {Field, reduxForm} from "redux-form";
import {updateUser, fetchUsers, setSingleUser} from "../action/index";
import FormField from '../componets/formField';

import {connect} from 'react-redux'

class FormEdit extends Component {
    componentWillMount(){
        this.props.setSingleUser(this.props.user);
    }

    onSubmit = (props) =>{
        this.props.updateUser(props, this.props.user.idUser)
            .then(()=>{
                this.props.fetchUsers();
                this.props.reset();
            });

    };

    render() {

        const {handleSubmit} = this.props;


        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className="ui form">
                <Field
                    name="name"
                    type="text"
                    component={FormField}
                    label="Name"
                />
                <Field
                    name="idCard"
                    component={FormField}
                    type="text"
                    label="ID Card"
                />
                <Field
                    name="homeClinic"
                    component={FormField}
                    type="text"
                    label="Home Clinic"
                />
                <Field
                    name="phone"
                    component={FormField}
                    type="text"
                    label="Phone"
                    validate={[maxLength10, number]}
                />
                <Field
                    name="mail"
                    component={FormField}
                    type="text"
                    label="Mails"
                    validate={emailV}
                />
                <button type="submit" className="ui submit button">Save</button>
            </form>
        );
    };
}


const validate = values=> {
    const errors = {};
    if (!values.name){
        errors.name = 'Enter a name'
    }
    if (!values.idCard){
        errors.idCard = 'Enter a ID Card'
    }
    if (!values.homeClinic){
        errors.homeClinic = 'Enter a Home Clinic'
    }
    if (!values.phone){
        errors.phone = 'Enter a Phone'
    }
    if (!values.mail){
        errors.mail = 'Enter a mail'
    }
    return errors;
};

FormEdit = reduxForm({
    form: 'formEdit',
    validate
})(FormEdit);

FormEdit = connect(
    state => ({
        initialValues: state.user.user
    }),
    {updateUser, fetchUsers, setSingleUser}
)(FormEdit);

export default FormEdit;