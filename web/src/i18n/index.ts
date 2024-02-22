// Code generated by go generate. DO NOT EDIT.
//
// Run the following command to generate this file:
// 		go run ./cmd/authelia-gen locales
//

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import LocalStorageCustomDetector from "@i18n/detectors/localStorageCustom";
import { getBasePath } from "@utils/BasePath";

const basePath = getBasePath();

const CustomLanguageDetector = new LanguageDetector();

CustomLanguageDetector.addDetector(LocalStorageCustomDetector);

i18n.use(Backend)
    .use(CustomLanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ["querystring", "localStorageCustom", "navigator"],
            lookupQuerystring: "lng",
            lookupLocalStorage: "lng",
        },
        backend: {
            loadPath: basePath + "/locales/{{lng}}/{{ns}}.json",
        },
        load: "all",
        ns: ["portal"],
        defaultNS: "portal",
        fallbackLng: {
            default: ["en"],
            ar: ["en"],
            "ar-SA": ["ar", "en"],
            cs: ["en"],
            "cs-CZ": ["cs", "en"],
            da: ["en"],
            "da-DK": ["da", "en"],
            de: ["en"],
            el: ["en"],
            "el-GR": ["el", "en"],
            es: ["en"],
            fi: ["en"],
            fr: ["en"],
            hu: ["en"],
            it: ["en"],
            ja: ["en"],
            "ja-JP": ["ja", "en"],
            nb: ["en"],
            "nb-NO": ["nb", "en"],
            nl: ["en"],
            no: ["en"],
            pl: ["en"],
            pt: ["en"],
            "pt-BR": ["en"],
            ro: ["en"],
            ru: ["en"],
            sl: ["en"],
            "sl-SI": ["sl", "en"],
            sv: ["en"],
            "sv-SE": ["sv", "en"],
            uk: ["en"],
            "uk-UA": ["uk", "en"],
            zh: ["en"],
            "zh-CN": ["zh", "en"],
            "zh-TW": ["en"],
        },
        supportedLngs: [
            "en",
            "ar",
            "ar-SA",
            "cs",
            "cs-CZ",
            "da",
            "da-DK",
            "de",
            "el",
            "el-GR",
            "es",
            "fi",
            "fr",
            "hu",
            "it",
            "ja",
            "ja-JP",
            "nb",
            "nb-NO",
            "nl",
            "no",
            "pl",
            "pt",
            "pt-BR",
            "ro",
            "ru",
            "sl",
            "sl-SI",
            "sv",
            "sv-SE",
            "uk",
            "uk-UA",
            "zh",
            "zh-CN",
            "zh-TW",
        ],
        lowerCaseLng: false,
        nonExplicitSupportedLngs: true,
        interpolation: {
            escapeValue: false,
        },
        debug: false,
    });

export default i18n;

export const supportedLngsNames = [
    { lng: "en", name: "English [en]" },
    { lng: "ar-SA", name: "Arabic (Saudi Arabia) [ar-SA]" },
    { lng: "cs-CZ", name: "Czech (Czechia) [cs-CZ]" },
    { lng: "da-DK", name: "Danish (Denmark) [da-DK]" },
    { lng: "de", name: "German [de]" },
    { lng: "el-GR", name: "Greek (Greece) [el-GR]" },
    { lng: "es", name: "Spanish [es]" },
    { lng: "fi", name: "Finnish [fi]" },
    { lng: "fr", name: "French [fr]" },
    { lng: "hu", name: "Hungarian [hu]" },
    { lng: "it", name: "Italian [it]" },
    { lng: "ja-JP", name: "Japanese (Japan) [ja-JP]" },
    { lng: "nb-NO", name: "Norwegian Bokmål (Norway) [nb-NO]" },
    { lng: "nl", name: "Dutch [nl]" },
    { lng: "no", name: "Norwegian Bokmål [no]" },
    { lng: "pl", name: "Polish [pl]" },
    { lng: "pt", name: "Portuguese [pt]" },
    { lng: "pt-BR", name: "Brazilian Portuguese [pt-BR]" },
    { lng: "ro", name: "Romanian [ro]" },
    { lng: "ru", name: "Russian [ru]" },
    { lng: "sl-SI", name: "Slovenian (Slovenia) [sl-SI]" },
    { lng: "sv-SE", name: "Swedish (Sweden) [sv-SE]" },
    { lng: "uk-UA", name: "Ukrainian (Ukraine) [uk-UA]" },
    { lng: "zh-CN", name: "Chinese (China) [zh-CN]" },
    { lng: "zh-TW", name: "Chinese (Taiwan) [zh-TW]" },
];
