import React, { Component } from 'react';
import styles from './Contact.module.css';
import { FormattedHTMLMessage } from "react-intl";

class Contact extends Component {

    state = {
        nameTitle: '',
        emailTitle: '',
        messageTitle: '',
        isNameTitleError: true,
        isEmailTitleError: true,
        isMessageTitleError: true,
        errorName: false,
        errorEmail: false,
        errorMessage: false,
        isDisableButton: true
    };

    nameTitle = (e) => {
        this.setState({
            nameTitle: e.currentTarget.value,
        })
    };

    titleErrorNameChange = () => {
        let lengthName = this.state.nameTitle.length;
        let isNameTitleError = !(lengthName <= 2 || lengthName > 30);
        if (isNameTitleError === false) {
            this.setState({
                errorName: true
            })
        } else {
            this.setState({
                errorName: false
            })
        }
        this.setState({ isNameTitleError: isNameTitleError })
    };

    emailTitle = (e) => {
        this.setState({
            emailTitle: e.currentTarget.value,
        })
    };

    titleErrorEmailChange = () => {
        let str = (/^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/);
        let titleEmail = this.state.emailTitle || this.state.emailTitle.length;
        let isEmailTitleError = str.test(titleEmail);
        if (isEmailTitleError === false) {
            this.setState({
                errorEmail: true
            })
        } else {
            this.setState({
                errorEmail: false
            })
        }
        this.setState({
            isEmailTitleError: isEmailTitleError
        })
    };

    messageTitle = (e) => {
        this.setState({
            messageTitle: e.currentTarget.value,
        })
    };

    titleErrorMessageChange = () => {
        let lengthMessage = this.state.messageTitle.length;
        let isMessageTitleError = (lengthMessage > 10);
        if (isMessageTitleError === false) {
            this.setState({
                errorMessage: true
            })
        } else {
            this.setState({
                errorMessage: false
            })
        }
        this.setState({ isMessageTitleError: isMessageTitleError })
    };

    render() {

        let {
            errorName, errorEmail, errorMessage, nameTitle, emailTitle, messageTitle, isNameTitleError,
            isEmailTitleError, isMessageTitleError
        } = this.state;

        let disableButton = errorName || errorEmail || errorMessage ||
            nameTitle.length === 0 || emailTitle.length === 0 ||
            messageTitle.length === 0;
        return (
            <div id='contact' className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <span><h3><FormattedHTMLMessage id='contact.title' defaultMessage='Контакты' /></h3></span>
                    </div>
                    <form
                        className={styles.emailForm}
                        action="https://formspree.io/mlejalqy"
                        method="POST"
                    >
                        <div className={styles.emailInputsTextarea}>
                            <input name={'name'} placeholder='Name' onChange={this.nameTitle}
                                className={isNameTitleError ? styles.input : styles.errorName}
                                onBlur={this.titleErrorNameChange} />
                            <div className={styles.popupErrorName}>
                                {!errorName ? '' : <FormattedHTMLMessage id='contact.nameError'
                                    defaultMessage='Введите не менее трех симвлолов' />}
                            </div>
                            <input name={'email'} placeholder='Email' onChange={this.emailTitle}
                                onBlur={this.titleErrorEmailChange}
                                className={isEmailTitleError ? styles.input : styles.emailError} />
                            <div className={styles.popupErrorEmail}>
                                {!errorEmail ? '' : <FormattedHTMLMessage id='contact.emailError'
                                    defaultMessage='Введите корректное значение' />}
                            </div>
                            <textarea name={'message'} placeholder='Message'
                                className={isMessageTitleError ? styles.input : styles.messageError}
                                onChange={this.messageTitle}
                                onBlur={this.titleErrorMessageChange} />
                            <div className={styles.errorMessageButton}>
                                <div className={styles.popupErrorMessage}>
                                    {!errorMessage ? '' : <FormattedHTMLMessage id='contact.messageError'
                                        defaultMessage='Введите не менее десяти симвлоло' />}
                                </div>
                            </div>
                        </div>
                        <button type='submit' disabled={disableButton}
                            className={styles.button}><FormattedHTMLMessage
                                id='contact.button'
                                defaultMessage='Отправить' />
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
