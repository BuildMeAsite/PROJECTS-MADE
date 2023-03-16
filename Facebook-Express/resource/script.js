
//STARTING POINT OF MY SIGN IN
// MODEL

    let UserList = []
    
    let DeserializeUserList = null
    deserializeUser()

    if (Array.isArray(DeserializeUserList)) {
        UserList = DeserializeUserList
    } else {
        UserList = []
    }

    let UserComments = []
    let IsAllowed// this will flip after forcheach in user login
    let isGenderSelect// this will flip once gender has been selected to allow function to invoke
    let genderSelect = 'none'
    let isProfileSet = false
    let profileURL


    

    function deserializeUser(){
        try {
            DeserializeUserList  = JSON.parse(localStorage.getItem('userListKey'))// retrieve userlist array from local thru JSON
        } catch (error) {
            console.log(error)
        }
        return DeserializeUserList
    }

    function serializeUserList(){//SAve string to local
        localStorage.setItem('userListKey', JSON.stringify(UserList))
    }

    function getDateToday(){
        const date = new Date()
        let days = date.getDate()
        let month = date.getMonth()+1
        let year = date.getFullYear()
        let today = year+'-'+days+'-'+month
        return today
    }

    function NewUser(){ // save the new user when sign in
        let uniqueID = new Date().getTime()
        console.log(uniqueID)
        let inputFN = document.getElementById('inputFN').value
        let inputLN = document.getElementById('inputLN').value
        let inputUser = document.getElementById('inputUser').value
        let newpass = document.getElementById('newpass').value
        let Bday = document.getElementById('year').value+'-'+convertMonth(document.getElementById('month').value)+'-'+convertDay(document.getElementById('day').value)
        let today = getDateToday().toString()

        if (genderSelect == 'custom') {
            genderSelect = document.getElementById('customInput').value
        }


        //to make sure all inputs are not blank
        if (inputFN != '' && inputLN != '' && inputUser !='' && isProfileSet == true) {
            UserList.push({
                UniqueUserID: uniqueID,
                Firstname : inputFN,
                Lastname : inputLN,
                Username : inputUser,
                Passkey : newpass,
                Birthday : document.getElementById('year').value+'-'+convertMonth(document.getElementById('month').value)+'-'+convertDay(document.getElementById('day').value),
                Gender : genderSelect,
                DateRegistered : today,
                ProfilePicture : profileURL,
                CoverPhoto : null,
                friendC : Math.floor(Math.random() * 999)
            })
            serializeUserList()
            closeModal()
        } else {
            alert('Please Complete!')
        }
       
    }
    function convertMonth(months){
        if (months === 'January') {
            return '01'
        } else if(months === 'February'){
            return '02'
        } else if(months === 'March'){
            return '03'
        } else if(months === 'April'){
            return '04'
        } else if(months === 'May'){
            return '05'
        } else if(months === 'June'){
            return '06'
        } else if(months === 'July'){
            return '07'
        } else if(months === 'August'){
            return '08'
        } else if(months === 'September'){
            return '09'
        } else if(months === 'October'){
            return '10'
        } else if(months === 'November'){
            return '11'
        } else if(months === 'December'){
            return '12'
        }// I could have used date.pasrse lol
    }
    function convertDay(days){
        if (Number(document.getElementById('day').value)<= 9){
            return '0'+days
        }
        else{
            return days+''
        }
    }

    function GenderRender(){
        let newselect = document.createElement('select')
        let newinput = document.createElement('input')
        let newlabel = document.createElement('span')
        let modalGenderLower = document.querySelector('.modal-gender-lower')
        modalGenderLower.innerHTML=""
        let arrcustom = ['She: Wish her a happy birthday!','He: Wish him a happy birthday!','They: Wish them a happy birthday!']
    
        newselect.id = "customSelect"
        modalGenderLower.appendChild(newselect)
    
        for (let index = 0; index < arrcustom.length; index++) {
            let option = document.createElement('option')
            option.textContent = arrcustom[index]
            option.style = "color:black;"
            newselect.appendChild(option)
        }
    
        newlabel.textContent = "Your pronoun is visible to everyone."
        newlabel.style = "margin-top:10px; margin-bottom:10px;font-size:13px"
        modalGenderLower.appendChild(newlabel)
    
        newinput.placeholder = "Gender (optional)"
        newinput.id = "customInput"
        newinput.style = "color: black"
        modalGenderLower.appendChild(newinput)
    }
    function closeModal(){
        const mainmodal = document.querySelector('.modaldialog-main')
        mainmodal.close()
    }


//VIEW
function generatedate(){
    const monthSelect = document.getElementById('month')
    const daySelect = document.getElementById('day')
    const yearSelect = document.getElementById('year')
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let prevDay
    populateMonth()
    populateYear()
    populateDays(monthSelect.value)
    function populateMonth(){
        for (let index = 0; index < months.length; index++) {
            const monthList = document.createElement('option')
            monthList.textContent = months[index];
            monthList.style = "color:black"
            monthSelect.appendChild(monthList)
            
        }
    }
    function populateYear(){
        let startyear = new Date().getFullYear()
        for (let i = 0; i < 101; i++) {
            const yearList = document.createElement('option')
            yearList.textContent = startyear - i
            yearList.style = "color:black"
            yearSelect.appendChild(yearList)
        }
    }
    function populateDays(months){
        while (daySelect.firstChild) {
            daySelect.removeChild(daySelect.firstChild)
        }
        let daysNum
        let year = yearSelect.value;
        if (months === 'January' || months === 'March' || months === 'May' || months === 'July' || months === 'August' || months === 'October' || months === 'December' ) {
            daysNum = 31
        } else if(months === 'April' || months === 'June' || months === 'September' || months === 'November' ){
            daysNum = 30
        } else{
            if (new Date(year, 1, 29).getMonth() === 1){
                daysNum = 29
            } else{
                daysNum = 28
            }
        }
        for (let i = 1; i <= daysNum; i++) {
            let createDays = document.createElement('option')
            createDays.textContent = i;
            createDays.style = "color:black"
            daySelect.appendChild(createDays)
        }
        
        if (prevDay) {
            daySelect.value = prevDay
            if (daySelect.value === "") {
                daySelect.value = prevDay -1
            }
        }
    }
    yearSelect.onchange = function(){
        populateDays(monthSelect.value)
    }
    monthSelect.onchange = function(){
        populateDays(monthSelect.value)
    }
    daySelect.onchange = function(){
        prevDay = daySelect.value
    }
}

//CONTROL

    document.getElementById('custom').addEventListener('click', () => {
    GenderRender()
}) 

document.getElementById('male').addEventListener('click', () => {
    document.querySelector('.modal-gender-lower').innerHTML = ""
})
document.getElementById('female').addEventListener('click', () => {
    document.querySelector('.modal-gender-lower').innerHTML = ""
})

document.getElementById('createbtn').addEventListener('click', () => {
    let modal = document.querySelector('.modaldialog-main')
    modal.showModal()
    generatedate()
})

document.getElementById('signupbtn').addEventListener('click', () => {
    NewUser()
})

document.getElementById('male').addEventListener('change',function(e){
    genderSelect = e.target.id
    console.log(genderSelect)
})
document.getElementById('female').addEventListener('change',function(e){
    genderSelect = e.target.id
    console.log(genderSelect)
})

document.getElementById('custom').addEventListener('click', function(e){
    genderSelect = e.target.id
    console.log(genderSelect)
})


let profileInput = document.querySelector('#fileCaptured')
profileInput.addEventListener('change', () => {
    const profileReader = new FileReader()
    profileReader.readAsDataURL(profileInput.files[0])

    profileReader.addEventListener('load', () => {
        profileURL = profileReader.result
        isProfileSet = true
        document.querySelector('.filePreview').setAttribute('src', profileURL)
        document.querySelector('.filePreview').style = "width: 500px;"
    })
})

//THE END POINT OF MY SIGN IN


//STARTING POINT OF MY LOGIN 
//MODEL
 let userCookie = []
 function serializeUserCookie(){//SAve string to local
    localStorage.setItem('userCookie', JSON.stringify(userCookie))
}
function validateUSer(){
    let willProceed = false
    let user = document.querySelector('.username').value
    let passkey = document.querySelector('.userpass').value

    UserList.forEach(function(obj){
        
        if (obj.Username === user && obj.Passkey === passkey) {
            willProceed = true
            return willProceed
        }
        
    })
    return willProceed

}
//VIEW
//CONTROL

document.getElementById('loginbtn').addEventListener('click', () =>{
    willProceed = validateUSer()
    if (willProceed == true) {

        let cookieObj
        UserList.forEach(function(obj){
            if (obj.Username === document.querySelector('.username').value && obj.Passkey === document.querySelector('.userpass').value) {
                cookieObj = obj
                return cookieObj
            }
        })

        userCookie.push(cookieObj)
        serializeUserCookie()
        location.href = "http://localhost:5000/newsfeed"
    }
    else{
        alert('Incorrect Password or Username')
    }

})



//THE END POINT OF MY LOGIN





