const puppeteer = require('puppeteer')
const getAccounts = require('./getAccounts')
const getDate = require('./getDate')
let parseHeaders = require('./parseHeaders')
const swithcAcc = require('./switchAcc')
const takeResponseHeaders = require('./takeResponseHeaders')
const unpackingData = require('./unpackingData')
const insertData = require('./insertData')

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

const fetchData = async (headers, id, dayStart, dayEnd) => {
    let dateParts = dayStart.split('.')
    let startDate = Date.UTC(+dateParts[2], dateParts[1]-1, +dateParts[0], 0, 0, 0)
    startDate = startDate/1000
    dateParts = dayEnd.split('.')
    let endDate = Date.UTC(+dateParts[2], +dateParts[1]-1, +dateParts[0], 23, 59, 59)
    endDate = endDate/1000
    let data = await fetch("https://app.sellerboard.com/en/dashboard/periods", {
        "headers": {
            "accept": "*/*",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sellerboard-account-id": id,
            "sellerboard-user-id": "47202227-212a-11ec-85d6-e4434b01ba5a",
            "x-requested-with": "XMLHttpRequest",
            "cookie": `PHPSESSID=${headers.cookiesPHP}; ${headers.cookiesNoPHP}`,
            "Referer": "https://app.sellerboard.com/en/dashboard/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": `_=${headers.currentTime}&dashboardSessionId=${headers.SESSIONID_param}&viewType=panels&compare=&groupByAsin=&groupBy=&loadBy=periods&periods%5B0%5D%5Bstart%5D=${startDate}&periods%5B0%5D%5Bend%5D=${endDate}&periods%5B0%5D%5Bforecast%5D=0&periods%5B0%5D%5Bstandard%5D=0`,
        "method": "POST"
    }).then(data => data.json())
    return data
}


const start = async () => {
    const dayRange = await getDate();
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']})
    const page = await browser.newPage()
    await page.goto('https://app.sellerboard.com/en/auth/login/')
    await page.waitForSelector('#username')
    await page.type('#username', 'talkachevrabochiy@gmail.com')
    await page.type('#password', 'fmu3N32Cdj')
    await page.click('button[type="submit"]')

    for(let day of dayRange){
        let accounts = await getAccounts();
        for(let acc of accounts){
            let data
            try{
                await swithcAcc(page, acc[1])
                page.reload(page)
                let headers = await takeResponseHeaders(page)
                headers = await parseHeaders(headers, page)
                console.log(day[0])
                data = await fetchData(headers, acc[1], day[0], day[1])
                let result = await unpackingData(data)
                result.unshift(null)
                result.unshift(day[1])
                result.unshift(day[0])
                result.unshift(acc[0])
                await insertData([result])
            }
            catch(e){
                accounts.push(acc)
            }
        }
    }
    await browser.close();
}

module.exports = start;