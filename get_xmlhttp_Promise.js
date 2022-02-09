const url='./studentReg.json'

const myPromise = new Promise((resolve, reject)=>{
    const http = new XMLHttpRequest()
    http.open('GET', url, true)
    http.onload=()=>{
        if(http.status == 200){
            resolve(JSON.parse(http.response))
        }
        else{
            reject(http.statusText)
        }
    }
    http.send()
})

myPromise.then((value)=>{
    var temp = ""
    for (let x of value) {

        const {id, name, mobile, email, gender, mode } = x
        var myString = name
        var fName = myString.split(" ")[0];
        var myString2 = name
        var lName = myString2.split(" ")[1];

        temp += `<tr> <td>${id}</td> <td>${fName}</td> <td>${lName}</td>  <td>${mobile}</td> <td>${email}</td> <td>${gender}</td> <td>${mode}</td></tr>`
        document.querySelector('tbody').innerHTML = temp
    }
    
}).catch(error => console.log(error))

search = ()=>{ 

    
    var rslt = document.querySelector('input').value
    var temp = ""
    
        myPromise.then((value)=>{
            
            var data_filter = value.filter( std => std.fName == rslt.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase()))
            const [id, name, mobile, email, gender, mode ]= data_filter

            if(rslt == ""){
                var temp = ""
                for (let x of value) {
            
                    const {id, name, mobile, email, gender, mode } = x
                    var myString = name
                    var fName = myString.split(" ")[0];
                    var myString2 = name
                    var lName = myString2.split(" ")[1];
            
                    temp += `<tr> <td>${id}</td> <td>${fName}</td> <td>${lName}</td>  <td>${mobile}</td> <td>${email}</td> <td>${gender}</td> <td>${mode}</td></tr>`
                    document.querySelector('tbody').innerHTML = temp
                }
            }

            var myString = id.name
            var fName = myString.split(" ")[0];


            var myString1 = id.name
            var lName = myString1.split(" ")[1];

            temp = `<tr> <td>${id.id}</td> <td>${fName}</td> <td>${lName}</td>  <td>${id.mobile}</td> <td>${id.email}</td> <td>${id.gender}</td> <td>${id.mode}</td></tr>`
            document.querySelector('tbody').innerHTML = temp
            
       
      })
}

        myDelete = (val)=>{ 
            myPromise.then((value)=>{
                alert(val)

                    var data_filter = value.replace( std => std.id==val)
                    console.log(data_filter)
                    delete value[val];

        })
    }

    // <td><button onclick='myDelete(${id.id})'> <font color='red'> DELETE </font></button></td>