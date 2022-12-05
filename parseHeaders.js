const parseHeaders = async (headers, page) => {
    await page.waitForTimeout(5000)
    try{
        await page.click('.completeRegistration-close')
        await page.waitForTimeout(1000)
        await page.click('div.jconfirm-buttons > .btn-primary')
    }
    catch{}
    const SESSIONID = headers.request()._postData
    let url_SESSIONID = 'http://test?'+SESSIONID,
    url = new URL(url_SESSIONID),
    SESSIONID_param = url.searchParams.get('dashoardSessionId'),
    currentTime = url.searchParams.get('_'),
    rangeStart = url.searchParams.get('rangeStart'),
    rangeEnd = url.searchParams.get('rangeEnd'),
    cookiesPHP = await page.cookies()
    for(let key in cookiesPHP){
        if(cookiesPHP[key].name === 'PHPSESSID'){
            cookiesPHP = cookiesPHP[key].value
        }
    }
    const cookiesNoPHP = await page.evaluate(async () => document.cookie, {waitUntil: 'networkidle2'})
    return{
        SESSIONID_param,
        currentTime,
        cookiesNoPHP,
        cookiesPHP
    }
}

module.exports = parseHeaders;