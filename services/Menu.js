import API from "./API.js";

/**
 * Retrieve data from API and store it in the app.store object
 * @returns {Promise<void>}
 * @example

 */
export async function loadData() {
    app.store.menu = await API.fetchMenu()
    console.log(app.store)
}