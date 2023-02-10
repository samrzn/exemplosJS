/*
function filter_array_values(arr) {
    arr = arr.filter(isEligible);
    return arr;
}

function isEligible(value) {
    if (value !== false || value !== null || value !== 0 || value !== "") {
        return value;
    }
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
*/


function json(ipgc_testSheet) {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    const sheet = spreadsheet.getSheetByName('ipgc_testSheet')
    const data = sheet.getDataRange().getValues()
    const jsonData = convertToJson(data)
    const blankFilter = removeNullValues(blankFilter)
    const finalJson = blankFilter
    return ContentService
        .createTextOutput(JSON.stringify(jsonData))
        .setMimeType(ContentService.MimeType.JSON)
}

function convertToJson(data) {
    const headers = data[0]
    const raw_data = data.slice(1,)
    let json = []
    raw_data.forEach(d => {
        let object = {}
        for (let i = 0; i < headers.length; i++) {
            object[headers[i]] = d[i]
        }
        json.push(object)
    });
    return json
}

function removeNullValues(blankFilter) {
    const safeCopy = blankFilter[0]
    let finalCopy = []

    safeCopy.filter((values) => {
        if (values !== false || values !== null || values !== 0 || values !== "") {
            return values;
        }
    });
    return finalCopy
}


// function removeValues(values) {
// const filters = blankFilter
// let filteredJson = []

/*
function json(ipgc_testSheet) {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    const sheet = spreadsheet.getSheetByName('ipgc_testSheet')
    const data = sheet.getDataRange().getValues()
    const jsonData = convertToJson(data)
    return ContentService
        .createTextOutput(JSON.stringify(jsonData))
        .setMimeType(ContentService.MimeType.JSON)
}

function convertToJson(data) {
    const headers = data[0]
    const raw_data = data.slice(1,)
    let json = []
    raw_data.forEach(d => {
        let object = {}
        for (let i = 0; i < headers.length; i++) {
            object[headers[i]] = d[i]
        }
        json.push(object)
    });
    return json
}

function doGet(e) {
    const path = e.parameter.path
    return json(path)
} 
*/