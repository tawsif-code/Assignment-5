const transactionData = []

// add heart feature

document.querySelectorAll(".add-heart").forEach(el=>{el.addEventListener("click",function(e){
    e.preventDefault()
    const availableheart = parseInt(document.getElementById("available-heart").innerText)
    const totalnewheart = 1 + availableheart
    document.getElementById("available-heart").innerText = totalnewheart
  })
})

// call feature

const callALert = {
    1: "Calling National Emergency (999)",
    2: "Calling Police (999)",
    3: "Calling Fire Service (999)",
    4: "Calling Ambulance (1994-999999)",
    5: "Calling Women & Child Helpline (109)",
    6: "Calling Anti-Corruption (106)",
    7: "Calling Electricity Outage (16216)",
    8: "Calling Brac (16445)",
    9: "Calling Bangladesh Railway (163)"
}


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
    alert(callALert[id])
  })
})

// copy feature

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