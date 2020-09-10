import React from 'react';
import './App.css';
import Header from './Headers/Header';
import Main from './Mains/Main';
import Skill from './Skills/Skill';
import Projects from './MyProject/Projects';
import {IntlProvider} from 'react-intl';
import Contacts from './Contacts/Contact';
import Footer from './Footers/Footer';
import messages_ru from "./i18n/ru";
import messages_en from "./i18n/en";

class App extends React.Component {

    state = {
        currentLocal: 'en',
        messages: {
            'ru': messages_ru,
            'en': messages_en
        }
    };



    changeLocal = (e) => {
        if (e) {
            this.setState({currentLocal: 'en'}
            )
        } else {
            this.setState({currentLocal: 'ru'})
        }
    };

    render() {
        return (
            <div className="App">
                <div className="portfolio">
                    <IntlProvider locale={this.state.currentLocal}
                                  messages={this.state.messages[this.state.currentLocal]}>
                        <Header changeLocal={this.changeLocal} currentLocal={this.state.currentLocal}/>
                        <Main/>
                        <Skill/>
                        <Projects/>
                        <Contacts/>
                        <Footer/>
                    </IntlProvider>
                </div>
            </div>
        );
    };
};

export default App;
