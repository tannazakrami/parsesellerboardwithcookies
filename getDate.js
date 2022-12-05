const {google} = require('googleapis')
const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets'
})

const getDate = async () => {
    const client = await auth.getClient()
    const googleSheets = google.sheets({version: 'v4', auth: client})
    const spreadsheetId = '1a0mn3BpjCvBYG_Vva4FF-uVh6pAz94hPEvvXlWEF0bc'
    let data = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'Данные!A2:B2'
    })
    return data.data.values || undefined;
}

module.exports = getDate;