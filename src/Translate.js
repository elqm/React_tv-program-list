import React from 'react';
import App from './App';
import Deco from './Translate.module.css';

// function Translate() {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//         script.async = true;
//         document.body.appendChild(script);
        
//         window.googleTranslateElementInit = function () {
//             new window.google.translate.TranslateElement({
//                 pageLanguage: 'ko,ja,en',
//                 includedLanguages: 'ko,ja,en',
//                 // layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
//                 // layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//                 autoDisplay: false
//             }, 'google_translate_element');
//         }
//     }, []);

//     return (
//         <div>
//             <div id="google_translate_element" className="hd_lang"></div>
//             <App/>
//         </div>
//     );
// }

// export default Translate;


import { Component } from 'react';

class Translate extends Component {
    googleTranslateElementInit() {
        //alert("test2")
        /* eslint-disable no-new */
        new window.google.translate.TranslateElement({
            pageLanguage: 'ko,ja,en',
            includedLanguages: 'ko,ja,en',
            layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT
        }, 'google_translate_element')
    }

    componentDidMount() {
        // alert("test")

        var addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = this.googleTranslateElementInit;
    }

    render() {
        return (
            <div className={ Deco.deco }>
            // <script type='text/javascript' src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit' />
                <div id="google_translate_element"></div>
                <App />
            </div>
        );
    }
}

export default Translate;