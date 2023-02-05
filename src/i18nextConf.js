import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';



i18n.use(initReactI18next).init({
  lng: `en`,
  fallbackLng: 'en',
  resources: {
    es: {
      translation: {
        "slogan": "Chatea con contactos no guardados.",
        "share": "Compartir",
        "developed": "Desarrollo por <span>micoSuelto</span>",
        "about": "<h2>Mi mamá detesta guardar contactos solo para escribirles por<span class=\"text-secondary\"> Whatsapp</span>.</h2><h2>Esta es una simple pero funcional App para aquellos que sufren de lo mismo.</h2><p>Es mi primera PWA con ReactJS. Siéntete libre de criticar estas líneas.</p><p>Este es mi GitHub.</p>",
        "back": "Volver al App",
        "notFound" : "Página no encontrada."
      }
    },
    en: {
      translation: {
        "slogan": "Chat with unsaved contacts.",
        "share": "Share",
        "developed": "Developed by <span>micoSuelto</span>",
        "about": "<h2>My mom detests saving contacts just so she can write to them on<span class=\"text-secondary\"> Whatsapp</span>.</h2><h2>This is a simple but useful App for those who are suffering from the same.</h2><p>It's my first PWA with ReactJS. Feel free to punish those lines.</p><p>This is my GitHub.</p>",
        "back": "Back to App",
        "notFound" : "Page not found."
      }
    },
    fr: {
      translation: {
        "slogan": "Discutez avec des contacts non enregistrés.",
        "share": "Partager",
        "developed": "Développé par <span>micoSuelto</span>",
        "about": "<h2>Ma mère déteste enregistrer des contacts juste pour pouvoir leur écrire sur<span class=\"text-secondary\"> Whatsapp</span>.</h2><h2>Ceci est une application simple mais utile pour ceux qui souffrent de la même chose.</h2><p>C'est mon premier PWA avec ReactJS. N'hésitez pas à punir ces lignes.</p><p>Ceci est mon GitHub.</p>",
        "back": "Retour à App",
        "notFound" : "Page non trouvée."
      }
    },
    br: {
      translation: {
        "slogan": "Discuta com contatos não registrados.",
        "share": "Compartilhe",
        "developed": "Développé par <span>micoSuelto</span>",
        "about": "<h2>Minha mãe detesta salvar contatos só para poder escrever para eles no<span class=\"text-secondary\"> Whatsapp</span>.</h2><h2>Este é um aplicativo simples, mas útil para aqueles que sofrem do mesmo.</h2><p>É meu primeiro PWA com ReactJS. Sinta-se livre para punir essas linhas.</p><p>Este é o meu GitHub.</p>",
        "back": "Retour à App",
        "notFound" : "Página não encontrada."
      }
    }
  }
});

// Language Change Function
export const changeLanguage = (lng) => {
  const spanishList = ["es" , "ar", "bl", "bo", "cl", "co", "cr", "cu", "cw", "dm", "do", "ec", "fk", "gd", "gf", "gl", "gp", "gt", "gy", "hn", "kn", "lc", "mf", "mx", "ni", "pa", "pe", "pm", "pr", "py", "sr", "sv", "tt", "uy", "vc", "ve"];
    const frenchList = ["fr", "fr-ca", "fr-ch", "fr-fr"];
    const portugueseList = ["br"];
    switch(true) {
      case (frenchList.includes(lng)):
        i18n.changeLanguage('fr');
        break;
      case (portugueseList.includes(lng)):
        i18n.changeLanguage('br');
        break;
      case (spanishList.includes(lng)):
        i18n.changeLanguage('es');
        break;
      default:
        i18n.changeLanguage('en');
      ;
    }
}
changeLanguage(localStorage.defaultCountryCode);
