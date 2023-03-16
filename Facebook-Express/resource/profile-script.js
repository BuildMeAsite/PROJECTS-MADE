

let userCookie = []
let DeserializeUserCookie = JSON.parse(localStorage.getItem('userCookie'))// retrieve userlist array from local thru JSON
if (Array.isArray(DeserializeUserCookie)) {
    userCookie = DeserializeUserCookie
    UserProfileInitialize()
} else {
    userCookie = []
}

let Isvisible = false // this will flip once profile was click and logoutdiv was not showing
let pictureUploaded // this will capture the newly uploaded picture




// THE START OF INITIALIZATION
// MODEL
function UserProfileInitialize(){
    let UserFullName = document.querySelector('.UserFullName')
    UserFullName.textContent = `${userCookie[0].Firstname} ${userCookie[0].Lastname}`
    
    let friendCount = document.querySelector('.friendCount')
    friendCount.textContent = `${userCookie[0].friendC} ${userCookie[0].friendC>1 ? "Friends":"Friend"}`

    let UserProfile = document.querySelector('.profile-pic')
    UserProfile.setAttribute('src', userCookie[0].ProfilePicture)

    let logoutProfile = document.querySelector('.main-profile-logout')
    logoutProfile.setAttribute('src', userCookie[0].ProfilePicture)

    let topProfile = document.querySelector('.main-profile')
    topProfile.setAttribute('src', userCookie[0].ProfilePicture)

    if (userCookie[0].CoverPhoto != null) {
        let coverProfile = document.querySelector('.cover-photo')
        coverProfile.setAttribute('src', userCookie[0].CoverPhoto) 
    }

    document.querySelector('.mainfullname').textContent = userCookie[0].Firstname + ' ' + userCookie[0].Lastname


}
function EmptyUserCookie(){//Invoke when Logout to clear the value inside usercookie
    userCookie = [null]
    localStorage.setItem('userCookie', JSON.stringify(userCookie))
    console.log(userCookie)
}
function showLogout(){
    let logout = document.getElementById('logoutmenu')
    logout.style = "visibility: visible;"
    Isvisible = true
}
function hideLogout(){
    let logout = document.getElementById('logoutmenu')
    logout.style = "visibility: hidden;"
    Isvisible = false
}



function saveUploadedCover(){
    let userList = []
    let DeserializeUserList = JSON.parse(localStorage.getItem('userListKey'))
    userList = DeserializeUserList

    userList.forEach((obj) => {
        if (obj.UniqueUserID === userCookie[0].UniqueUserID) {
            console.log('True')
            userList.pop(obj)
            return
        }
    })
    userCookie = Object.assign(userCookie[0],{CoverPhoto : pictureUploaded})
    userList.push(userCookie)
    localStorage.setItem('userListKey',JSON.stringify(userList))
}

function refreshPAge(){
    location.reload()
}
// VIEW

// CONTROL

document.querySelector('.main-profile').addEventListener('click', () => {
    if (Isvisible == true) {
        hideLogout()
    } else {
        showLogout()
    }
})
document.querySelector('.logoutdiv').addEventListener('click', () => {
    EmptyUserCookie()
    location.href = "/login"
})
document.querySelector('.mini-profiles').addEventListener('click', () => {
    location.href = "/profile"
})
document.querySelector('.Home').addEventListener('click', () => {
    location.href = "/newsfeed"
})
document.querySelector('.Home2').addEventListener('click', () => {
    location.href = "/newsfeed"
})

let newupload = document.querySelector('#uploadPhoto')

newupload.addEventListener('change', () => {
    const uploadReader = new FileReader()
    uploadReader.readAsDataURL(newupload.files[0])

    uploadReader.addEventListener('load', () => {
        pictureUploaded = uploadReader.result
        document.querySelector('.cover-photo').setAttribute('src', pictureUploaded)
        document.getElementById('coverPhoto').style = "width: 100%;max-height: 600px;object-fit: cover;border-radius: 15px;object-position: center;"
        document.getElementById('btnSave').style = "visibility: visible;"
    })
})

document.querySelector('.change-cover').addEventListener('click', () => {
    let myModal = document.querySelector('.UploadPhotodiv')
    myModal.showModal()
})
document.querySelector('.btnClose').addEventListener('click', () => {
    let myModal = document.querySelector('.UploadPhotodiv')
    myModal.close()
})

document.querySelector('.btnSave').addEventListener('click', () => {
    saveUploadedCover()
    let myModal = document.querySelector('.UploadPhotodiv')
    myModal.close()
})
