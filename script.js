const callAlert = {
    1: "Calling National Emergency Number",
    2: "Calling Police Helpline Number",
    3: "Calling Fire Service Number",
    4: "Calling Ambulance Service",
    5: "Calling Women & Child Helpline",
    6: "Calling Anti-Corruption Helpline",
    7: "Calling Electricity Helpline",
    8: "Calling Brac Helpline",
    9: "Calling Bangladesh Railway Helpline"
}

const copyALert = {
    1: "999",
    3: "999",
    2: "999",
    4: "1994-999999",
    5: "109",
    6: "106",
    7: "16216",
    8: "16445",
    9: "163"
}

const callHistoryData = []

// add heart feature

document.querySelectorAll(".add-heart").forEach(el=>{el.addEventListener("click",function(e){
    e.preventDefault()
    const availableheart = parseInt(document.getElementById("available-heart").innerText)
    const totalnewheart = 1 + availableheart
    document.getElementById("available-heart").innerText = totalnewheart
  })
})

// call feature

document.querySelectorAll(".call-btn").forEach(el=>{el.addEventListener("click",function(e){
    e.preventDefault()
    const id = this.dataset.id
    const availablecoin = parseInt(document.getElementById("available-coin").innerText)
    if ( availablecoin <= 0 ){
        alert("Not enough coins.")
        return
    }
    const totalnewcoin = availablecoin - 20 
    document.getElementById("available-coin").innerText = totalnewcoin
    alert(callAlert[id] + " " + copyALert[id])

    const data = {
        name: callAlert[id],
        number: copyALert[id],
        date: new Date().toLocaleTimeString()
    }

    callHistoryData.push(data)
    updateCallHistory()

  })
})

// copy feature

document.querySelectorAll(".copy-btn").forEach(el=>{el.addEventListener("click", async function(e){
    e.preventDefault()
    const id = this.dataset.id
    const copiedNumber = parseInt(document.getElementById("copy").innerText)
    try{
        await navigator.clipboard.writeText(copyALert[id])
        alert("The number is copied:" + copyALert[id])
    }
    catch (err) {
        alert("Failed to copy.")
    }
    const totalCopiedNubmer = 1 + copiedNumber
    document.getElementById("copy").innerText = totalCopiedNubmer
  })
})

// call history feature

function updateCallHistory() {
    const callHistoryContainer = document.getElementById("call-history-container")
        callHistoryContainer.innerHTML = ""

        for(const data of callHistoryData){
            const div = document.createElement("div")
            div.innerHTML = `
            <div class="bg-gray-100 p-2 mt-5 rounded-lg flex justify-between items-center gap-2">
                <div>
                    <h1 class="text-sm font-medium">${data.name}</h1>
                    <p>${data.number}</p>
                </div>
                <div>
                    <p>${data.date}</p>
                </div>
            </div>        
            `
            callHistoryContainer.prepend(div)
        }    
}        

// clear button feature
document.getElementById("clear-btn").addEventListener("click", function(e){
    e.preventDefault()
    callHistoryData.length = 0;
    updateCallHistory();
})