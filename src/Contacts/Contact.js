import React, {Component} from 'react';
import styles from './Contact.module.css';
import {FormattedHTMLMessage} from "react-intl";

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
        let isNameTitleError = !(lengthName < 3 || lengthName > 30);
        if (isNameTitleError === false) {
            this.setState({
                errorName: true
            })
        } else {
            this.setState({
                errorName: false
            })
        }
        this.setState({isNameTitleError: isNameTitleError})
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
        this.setState({isMessageTitleError: isMessageTitleError})
    };

    render() {
        let disableButton = this.state.errorName || this.state.errorEmail || this.state.errorMessage ||
            this.state.nameTitle.length === 0 || this.state.emailTitle.length === 0 ||
            this.state.messageTitle.length === 0;
        return (
            <div id='contact' className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <span><h3><FormattedHTMLMessage id='contact.title' defaultMessage='Контакты'/></h3></span>
                    </div>
                    <form
                        action="https://formspree.io/mlejalqy"
                        method="POST"
                    >
                        <input name={'name'} placeholder='Name' onChange={this.nameTitle}
                               className={this.state.isNameTitleError ? styles.input : styles.errorName}
                               onBlur={this.titleErrorNameChange}/>
                        <div className={styles.popupErrorName}>
                            {!this.state.errorName ? '' : <FormattedHTMLMessage id='contact.nameError'
                                                                                defaultMessage='Введите не менее трех симвлолов'/>}
                        </div>
                        <input name={'email'} placeholder='Email' onChange={this.emailTitle}
                               onBlur={this.titleErrorEmailChange}
                               className={this.state.isEmailTitleError ? styles.input : styles.emailError}/>
                        <div className={styles.popupErrorEmail}>
                            {!this.state.errorEmail ? '' : <FormattedHTMLMessage id='contact.emailError'
                                                                                 defaultMessage='Введите корректное значение'/>}
                        </div>
                        <textarea name={'message'} placeholder='Message'
                                  className={this.state.isMessageTitleError ? styles.input : styles.messageError}
                                  onChange={this.messageTitle}
                                  onBlur={this.titleErrorMessageChange}/>
                        <div className={styles.errorMessageButton}>
                            <div className={styles.popupErrorMessage}>
                                {!this.state.errorMessage ? '' : <FormattedHTMLMessage id='contact.messageError'
                                                                                       defaultMessage='Введите не менее десяти симвлоло'/>}
                            </div>
                            <div>
                                <button type='submit' disabled={disableButton}
                                        className={styles.button}><FormattedHTMLMessage
                                    id='contact.button'
                                    defaultMessage='Отправить'/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
