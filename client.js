
  const fs = require("fs")

  const addClient = (fname , lname , city , age , id,address) => {
       const allData = loadData()

        const duplicatedData = allData.filter ((obj) => {
            return obj.id === id
        })
        console.log(duplicatedData)

        if (duplicatedData.length == 0) {
        allData.push ({
            id : id,
            fname : fname,
            lname : lname,
            city : city,
            age : age
        })

        saveAllData(allData)
    } else {
        console.log("ERROR DUPLICATED ID")
    }
  }

  /////////////////////////////////////////////////////////////////
  const loadData = () => {
   
    try {
        const dataJson = fs.readFileSync ("clients.json").toString()
        return JSON.parse (dataJson)
    } catch {
            return []
    }

  }
///////////////////////////////////////////////////////////////////

  const saveAllData = (allData) => {
      const saveAllDataJson = JSON.stringify(allData) 
      fs.writeFileSync("clients.json" , saveAllDataJson)
  }
/////////////////////////////////////////////////////////////////////

 const deleteClient = (id) => {
        const allData = loadData()

        const dataToKeep = allData.filter ((obj) => {
             return obj.id !== id 
        })
        // console.log(dataToKeep)
        saveAllData(dataToKeep)
 }

//////////////////////////////////////////////////////////////////
      
        const readData = (id) => {
            const allData = loadData()

            const itemWanted = allData.find((obj) => {
                 return obj.id == id 
            })
            console.log(itemWanted)

        }
//////////////////////////////////////////////////////////////////

    const listData = () => {
        const allData = loadData()

        allData.forEach ((obj) => {
            console.log(obj.fname , obj.city, obj.age)
        })
    }
     

module.exports = {
    addClient,
    deleteClient, 
    readData,
    listData
}