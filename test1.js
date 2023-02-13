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


// function json(ipgc_testSheet) {
//     const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
//     const sheet = spreadsheet.getSheetByName('ipgc_testSheet')
//     const data = sheet.getDataRange().getValues()
//     const jsonData = convertToJson(data)
//     // const blankFilter = removeNullValues(blankFilter)
//     // const finalJson = blankFilter
//     return ContentService
//         .createTextOutput(JSON.stringify(jsonData))
//         .setMimeType(ContentService.MimeType.JSON)
// }

// function convertToJson(data) {
//     const headers = data[0]
//     const raw_data = data.slice(1,)
//     let json = []
//     let copy = []
//     raw_data.forEach(d => {
//         let object = {}
//         for (let i = 0; i < headers.length; i++) {
//             object[headers[i]] = d[i]
//         }
//         copy.push(object)
//         return copy;
//     });
//     function removeNull(nullValue) {
//         copy = copy.filter((isNull) => {
//             if (isNull !== false || isNull !== null || isNull !== 0 || isNull !== "")
//                 return isNull;
//         });
//         return nullValue;
//     }
//     json.push(removeNull)
//     return json;
// }

// function convertToJson(data) {
//     const headers = data[0]
//     const raw_data = data.slice(1,)
//     let copy = []
//     let json = []
//     raw_data.forEach(d => {
//         let object = {}
//         for (let i = 0; i < headers.length; i++) {
//             object[headers[i]] = d[i]
//         }
//         copy.push(object)
//     });
//     for (let y = 0; y < copy.length; y++) {
//         if (copy !== "") {
//             json.push(copy);
//         }
//     }
//     return json
// }

// copy[y] !== false || copy[y] !== null || copy[y] !== 0 || copy[y] !== ""

// function removeNullValues(blankFilter) {
//     const safeCopy = blankFilter[0]
//     let finalCopy = []

//     safeCopy.filter((values) => {
//         if (values !== false || values !== null || values !== 0 || values !== "") {
//             return values;
//         }
//     });
//     return finalCopy
// }


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

// function json(ipgc_testSheet) {
//     const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
//     const sheet = spreadsheet.getSheetByName('ipgc_testSheet')
//     const data = sheet.getDataRange().getValues()
//     const jsonData = convertToJson(data)
//     return ContentService
//         .createTextOutput(JSON.stringify(jsonData))
//         .setMimeType(ContentService.MimeType.JSON)
// }

// function convertToJson(data) {
//     const headers = data[0]
//     const raw_data = data.slice(1,)
//     let json = []
//     raw_data.forEach(d => {
//         let object = {}
//         for (let i = 0; i < headers.length; i++) {
//             object[headers[i]] = d[i]
//         }
//         json.push(object)
//     });
//     return json
// }

// function doGet(e) {
//     const path = e.parameter.path
//     return json(path)
// } 

const jsonData = [null, 'filter', 23, 0, null, '', "", 'test'];
const jsonFilter = filterToJson(jsonData)

function filterToJson(jsonData) {
    let arrCopy = []
    const jsonCopy = jsonData

    for (let i = 0; i < jsonCopy.length; i++) {
        if (jsonCopy[i] !== null) {
            arrCopy.push(jsonCopy[i]);
        }
    }
    return arrCopy
}

console.log(jsonFilter)

// const jsonFilter = jsonData
// const finalJson = filterToJson(jsonFilter)

// function filterToJson(jsonFilter) {
//     const jsonCopy = jsonFilter
//     let arrCopy = []
//     for (let i = 0; i < jsonCopy.length; i++) {
//       if (jsonCopy[i] !== null) {
//         arrCopy.push(jsonCopy[i]);
//       }
//     }
//     return arrCopy
//   }

/*
SOS16

function json(ipgc_testSheet) {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    const sheet = spreadsheet.getSheetByName('ipgc_testSheet')
    const data = sheet.getDataRange().getValues()
    const jsonData = convertToJson(data)
    const jsonFilter = jsonData
    const finalJson = filterToJson(jsonFilter)
    return ContentService
      .createTextOutput(JSON.stringify(finalJson))
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
  
  function filterToJson(jsonFilter) {
    const jsonCopy = jsonFilter
    let arrCopy = []
    for (let i = 0; i < jsonCopy.length; i++) {
      if (jsonCopy[i] !== null) {
        arrCopy.push(jsonCopy[i]);
      }
    }
    return arrCopy
  }
  
  function doGet(e) {
    const path = e.parameter.path
    return json(path)
  }
*/

/*
SOS22

const jsonFilter = filterToJson(jsonData)

function filterToJson(jsonData) {
  let filterCopy = []

  function removeEmptyProperties(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));

  }

  const jsonCopy = removeEmptyProperties(jsonData)

  filterCopy.push(jsonCopy);

  return filterCopy

}
*/