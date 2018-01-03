export default function filterDataByLocale(object, localeId){
    const newObject = {}
        //Run through all object properties(or objects)
    for (let prop in object) {
        if (object.hasOwnProperty(prop)) {
            //console.log("object.",prop,":", object[prop])
            for (let localeProp in object[prop]) {
                if (object[prop].hasOwnProperty(localeProp)) {
                    //assign values from same locale as in url
                    //console.log("object.", prop,".", localeProp, ":", object[prop][localeProp])
                    if (localeProp === localeId){
                        newObject[prop]= object[prop][localeProp]
                    }

                }
            }
        }
    }
    //console.log('object (filtered by locale)', newObject)
    return newObject
}
