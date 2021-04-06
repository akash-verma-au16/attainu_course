import { UI } from "./DOM.mjs";

export class Fetch {
    static apiKey = '8d62bb8f42a6be5677eee149c00921da';

    static async get() {
        try {
            const response = await fetch(`http://data.fixer.io/api/latest?access_key=${Fetch.apiKey}`);
            const resData = await response.json();
            return resData;
        } catch (error) {
            UI.alertMessage(error);
        };
    };
};