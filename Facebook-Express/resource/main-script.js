///WE HAVE MET THE LOCALSTORAGE LIMIT SO I NEED TO CHECK HOW TO STORE JSON ON HDD SINCE CHROME HAS A LIMIT OF CHARACTERS.

// 03/09/2023 DO THE RANDOM COMMENTS....

// 03/12/2023 DO THE RANDOM NUMBER OF REACT 

// 03/15/2023 IMPLEMENT THE POSTTYPE AT POSTDETAILS ARRAY TO DETERMINE THE TYPE OF POST TO BE USED FOR VIDEO, GAMING, PAGE
// favorite
// thumb_up
// sentiment_very_satisfied
// mood_bad
// sentiment_very_dissatisfied

// turns out i need knowledge about NDEJS
let NameSets = [
    "Nichole","Donelle","Burgundy ","Sidney","Charlee ","Marni","Sandy","Jocelyn",
    "Emma","Precious","Netta","Grace",
    "Drina","Carreen","Celeste","Lilian",
    "Wisdom","Chrystal","Dorinda","Berry",
    "Anita","Tempest","Oaklynn","Delice",
    "Gemma","Francine","Tonia","Oaklyn",
    "Ann","Sheila","Trudie","Elsabeth",
    "Daley","Rene","Margaretta","Katherina",
    "Ginger","Alberta","Marlee","Avril",
    "Kristin","Carlyn","Deanne","Leesa",
    "Kerri","Meaghan","Leeann ","Ida",
    "Teresa","Lyndsey","Xaviera","Sidney",
    "Oaklynn","Korrine","Delia","Tania",
    "Blanche","Laura","Alaina ","Kaya",
    "Dodie","Imogene","Devan ","June",
    "Lynsey","Viona","Lizbeth","Avianna",
    "Yancy","Kassia","Stephani","Ashleigh",
    "Deirdre","Edie","Dulcibella","Odetta",
    "Nyla","Lisa","Misti ","Elea",
    "Octavia","Tegan","Eddie ","Hayley"
] // THIS WILL SERVE AS MY RANDOM GENERATED FRIEND CONTACTS

let pictureSets = [
    'https://iamjosemanuel.files.wordpress.com/2016/10/reykjavik51.jpg',
    'https://i0.wp.com/captionsclub.com/wp-content/uploads/2016/09/Travel-Selfies.jpg?fit=1200%2C800',
    'https://www.traveller.com.au/content/dam/images/3/8/c/a/4/image.related.articleLeadwide.620x349.37mlz.png/1400137646823.jpg',
    'https://media.istockphoto.com/id/911812356/photo/smiling-african-guy-on-top-of-a-mountain-taking-selfie.jpg?s=612x612&w=0&k=20&c=W-P04SH9IlwrYXIpLt7WoVZw4MstWgBTsEqmwGMJUpM=',
    'https://assets-global.website-files.com/6268ee704c062ad6dcc39250/6284dd41f3ce9e551361eba3_Take%20a%20Group%20selfie.jpeg',
    'https://media.istockphoto.com/id/1305182371/photo/group-of-friends-having-fun-taking-a-selfie.jpg?s=170667a&w=0&k=20&c=6Fpsq-wY7lEk6ifetWBoSsiOaLrhX-FhHEWhIpCS8ak=',
    'https://static.toiimg.com/photo/71576673.cms',
    'https://media.canadianunderwriter.ca/uploads/2022/06/young-couple-taking-break-from-sightseeing-for-selfie-picture-id1291682560-1.jpg',
    'https://loveincorporated.blob.core.windows.net/contentimages/main/fa942503-d15b-434a-8358-834b25e8c8cf-selfies-couple-taking-selfie.jpg',
    'http://danandmoore.com/wp-content/uploads/2016/08/G0200076-690x518.jpeg',
    'https://www.scenicsuitcase.com/wp-content/uploads/2018/09/BON-VOYAGE-final-1-of-1-1024x683.jpg',
    'https://allthatsinteresting.com/wordpress/wp-content/uploads/2015/07/travel-selfies-auckland.jpg',
    'https://todaysparent.mblycdn.com/tp/resized/2017/06/1200x630/when-your-kid-becomes-a-meme.jpg',
    'https://media.npr.org/assets/img/2015/03/03/overly_custom-39399d2cf8b6395770e3f10fd45b22ce39df70d4-s1100-c50.jpg',
    'https://media.sproutsocial.com/uploads/meme-example.jpg',
    'https://i0.wp.com/www.nfid.org/wp-content/uploads/2022/04/Angry-Cat-Memes.jpg?ssl=1',
    'https://www.techsmith.com/blog/wp-content/uploads/2021/09/Make-a-meme-butterfly.png',
    'https://static.boredpanda.com/blog/wp-content/uploads/2015/10/funny-game-of-thrones-memes-fb__700.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuDNrGFOQz48jmAlrOXdbHjKnDR5GN-1RHw&usqp=CAU',
    'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/08/17/12/meme-exhibition.jpg?width=1200&height=1200',
    'https://images.prismic.io/netmums/79560436-2fb7-40ca-92ba-e376e7e81953_first+day+back.jpg?auto=compress,format&rect=0,0,1500,1000&w=660&h=440',
    'https://assets.iflscience.com/assets/articleNo/48146/aImg/24654/1528363108-cover-image-l.png',
    'https://www.scrolldroll.com/wp-content/uploads/2022/01/funny-memes-on-girls-08.jpeg',
    'https://i.pinimg.com/736x/76/81/39/768139909087adb09cb6846b4a79e306.jpg',
    'https://wanderlands.travel/wp-content/uploads/2019/04/fiji-groupie.jpg',
    'https://wanderlands.travel/wp-content/uploads/2019/04/fiji-day-6.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/0f/0f/7c/0e/take-groupies-at-the.jpg',
    'https://fupping.com/wp-content/uploads/2018/07/ecoworld.jpg',
    'https://static.euronews.com/articles/stories/07/27/75/64/1440x810_cmsv2_c75be3d7-48ed-5550-bb28-8e996680552a-7277564.jpg',
    'https://media.istockphoto.com/id/966502568/photo/breathtaking-destinations.jpg?s=612x612&w=0&k=20&c=LA6-gOW4iUp29iShGsThOEqT43En1i0t_VWVQ1T7Lqg=',
    'https://images.wisetour.com/slideshow-mobile-small/trekking-in-the-mountains.jpg',
    'https://blogpatagonia.australis.com/wp-content/uploads/2019/08/individual-trips.jpg',
    'https://imageio.forbes.com/specials-images/imageserve/168191819/A-couple-hiking-/960x0.jpg?height=474&width=711&fit=bounds',
    'https://www.thenaturaltravelcollection.com/images/africa_south_africa_group_hiking_portrait.jpg',
    'https://explorerchick.com/wp-content/uploads/2022/05/Photo-09-09-2021-8-01-46-AM.jpg',
    'https://happiestoutdoors.ca/wp-content/uploads/2019/08/TarynLadderWCTPackingList-768x1024.jpg',
    'https://cdn.tourradar.com/s3/tour/645x430/163582_028a33f6.jpg',
    'https://cdn.tourradar.com/s3/tour/645x430/86268_5df9f81e22ccf.jpg',
    'https://cdn.tourradar.com/s3/tour/645x430/163582_028a33f6.jpg',
    'https://www.remotelands.com/remotenew1/dist/images/country/philippines/city/20122901/b210330002.jpg',
    'https://lp-cms-production.imgix.net/2020-11/6df31bc2ab499f3fbaa85aa0652b2c01-puerto-princesa-subterranean-river-national-park.jpg',
    'https://i.insider.com/58c05b0e80c5ac22008b4691?width=600&format=jpeg&auto=webp',
    'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2015_38/781186/tourist-selfie-sticks-today-tease-1-150916.jpg',
    'https://media.istockphoto.com/id/1070727822/fr/photo/trois-jeunes-touristes-prenant-selfie-%C3%A0-berlin.jpg?s=170667a&w=0&k=20&c=Bd_njl2wJW0rxsGWw7BW_o__X8pT-lYSn0YM1PUbpSs=',
    'https://stackumbrella.com/wp-content/uploads/2022/03/Feature-image-2027.jpg',
    'https://st2.depositphotos.com/2931363/7183/i/600/depositphotos_71832381-stock-photo-business-people-working-together.jpg',
    'https://st3.depositphotos.com/3258807/15736/i/600/depositphotos_157362944-stock-photo-excited-savvy-engineer-sharing-his.jpg',
    'https://st2.depositphotos.com/3889193/7828/i/450/depositphotos_78289332-stock-photo-smiling-business-woman-at-work.jpg',
    'https://cdn.create.vista.com/api/media/small/253594264/stock-photo-smiling-woman-looking-camera-while',
    'https://cdn.create.vista.com/api/media/small/253592582/stock-photo-smiling-group-people-sitting-applauding',
    'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/09/Two-girlfriends-students-on-a-coffee-break-outdoors-1296x728-header-1296x728.jpg?w=1155&h=1528',
    'https://www.youngminds.org.uk/media/oqxgzxgd/0182.png?anchor=center&mode=crop&width=1920&height=1080&rnd=132693717955670000&quality=55',
    'https://www.youngminds.org.uk/media/fw0dk3d2/card-young-people1.jpg?anchor=center&mode=crop&width=1920&height=1280&rnd=133149034189800000&quality=55',
    'https://www.childrenssociety.org.uk/sites/default/files/styles/16_9_media_large/public/2020-09/information%20for%20young%20people%20banner.jpg?h=95ffb99b&itok=Oz5fL6EA',
    'https://assets.weforum.org/article/image/XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.jpg',
    'https://www.nsw.gov.au/sites/default/files/styles/hero_l_x1/public/2022-02/group-of-young-people-smiling.jpg?itok=H0L3Z5Wh',
    'https://media.istockphoto.com/id/108316207/photo/this-is-our-generation.jpg?s=612x612&w=0&k=20&c=qX71aBjJCvi9h8a9ta9phkYTqE_1ttFuUGxh_TUbSmM=',
    'https://media.istockphoto.com/id/1403441234/photo/cheerful-teenagers-putting-their-hands-together-in-unity.jpg?b=1&s=170667a&w=0&k=20&c=0hmgD9uy3JjjdRLJeEx-9v5acz-DKJOAShd4JlDYmGs=',
    'https://media.istockphoto.com/id/499755193/photo/group-of-college-students-at-campus-using-a-digital-tablet.jpg?b=1&s=170667a&w=0&k=20&c=Hsu1I4hPyW9YI9kdVOz7aGEsnEF2ns2QrgOD2P7t4Zc=',
    'https://media.istockphoto.com/id/941753458/photo/we-brought-a-lot-of-food-today.jpg?b=1&s=170667a&w=0&k=20&c=f20RdA4uuCjfiuDy6N7wR2TSVvdp2I0sGRxlzd5bIfM=',
    'https://st3.depositphotos.com/1011434/19452/i/600/depositphotos_194524184-stock-photo-friends-making-picnic-pizza-park.jpg',
    'https://media.istockphoto.com/id/532058218/photo/coliving-is-new-way-of-life.jpg?s=612x612&w=0&k=20&c=r9cWjCGSFl3uUru8w9dGMJXmXamAegUFyuIp-4GJyXI=',
    'https://media.istockphoto.com/id/181074960/photo/promising-to-stay-friends-forever.jpg?s=612x612&w=0&k=20&c=7RsmKv_P_TZhjnZpG8kRtky5XotQT6BNxlWqRE_evZk=',
    'https://static9.depositphotos.com/1594308/1112/i/600/depositphotos_11127128-stock-photo-happy-friends.jpg',
    'https://www.incimages.com/uploaded_files/image/1920x1080/getty_517194189_373099.jpg',
    'https://i.ytimg.com/vi/eK4QUjgKu7Y/maxresdefault.jpg',
    'https://i.pinimg.com/originals/64/89/3d/64893dc6074cf2f85125de77051c40f1.jpg',
    'https://www.rd.com/wp-content/uploads/2020/04/DogMeme1.jpg?fit=696,696',
    'https://hips.hearstapps.com/hmg-prod/images/dog-appointment-meme-1546529706.png',
    'https://www.rd.com/wp-content/uploads/2020/04/DogMeme37.jpg?fit=696,696'
]// THIS WILL SERVE AS MY RANDOM POST GENERATED

let wordSets = [
    'coal','the','is','a','you','her','he','she','awake','unusual','curious','obtainable','chemical','accessible','victorious','comfortable','oval','macho','fancy','billowy','snotty','intelligent','grotesque','lazy','subsequent','nervous','berserk','bloody','quicker','correctly','knottily','kiddingly','arrogantly','foolishly','slowly','worriedly','viciously','basically','questioningly','wholly','soon','boastfully','exactly','zestily','upliftingly','restfully','obnoxiously','annually','the','of','and','a','to','in','is','you','that','it','was','for','on are','as','with','they','I','at','this','be','this','have','from','or','one','hard','by','word','but','not','all','were','we ','when','can','said','there','use','an','each','which','she','do','how','their','if','will','up','other','about','out','many','then','them','these','so','some','her','would','make','like','into','time','has','look','two','more','write','go','see','number','no','way','could','people','my','than','first','water','been','called','who','oil','its','now','find','long','down','day','did','get','come','made','may','part'
]// THIS WILL SERVE AS MY RANDOM WORDS

let videoSets = [
    "https://www.youtube.com/embed/5X1O5AS4nTc","https://www.youtube.com/embed/Nh5i5obZ8OY","https://www.youtube.com/embed/pvimAM_SLic","https://www.youtube.com/embed/tvgRsbNwY","https://www.youtube.com/embed/evUfG3lrk5U","https://www.youtube.com/embed/q4DF3j4saCE","https://www.youtube.com/embed/J0S6tc6dIK8","https://www.youtube.com/embed/E8RS6SZRk_4",
    "https://www.youtube.com/embed/x9HeEVrougY","https://www.youtube.com/embed/PH29yqDcRsU",
    "https://www.youtube.com/embed/nIrYjzHAEp0","https://www.youtube.com/embed/4gMXEd49rbg"
]
//////////////////////////////// GLOBAL VARIABLES /////////////////////////
//////////////////////////////// GLOBAL VARIABLES /////////////////////////
let chatDataArray = []
let postCount = 0 // SET TIME INTERVAL LIMITER
let contactList = [] // list of friends or contact
let postUniqueID = new Date().getTime() // generate an id
let scrollCount = 0 // captures number of scrolls in windows
let Isvisible = false // my switch for logout
let postDetails = []//capturing the comment data to be pushed
let userCookie = [] // current user login details
let stopper = 0 // stops randomfriend() once it reaches 3
let stopChatGeneration = 0 // STOPS RANDOMCHAT() ONCE REACHES 3

let DeserializeUserCookie = JSON.parse(localStorage.getItem('userCookie'))// retrieve object from userlist array from local thru JSON parse to local
if (Array.isArray(DeserializeUserCookie)) {
    userCookie = DeserializeUserCookie
    UserProfileInitialize()
} else {
    userCookie = []
}

let DeserializePostDetails = JSON.parse(localStorage.getItem('postDetailsKey'))
if (Array.isArray(DeserializePostDetails)) {
    postDetails = DeserializePostDetails
    postIDsort()
    renderComments()
} else {
    postDetails = []
}

///////////////////////////////// FUNCTION INVOKE ////////////////////////

// renderContacts()
fillContact() // FILL THE CONTACT ARRAY
displayContact() // display all online
postIDsort()
renderComments()
generatePost()
contactRefresh()
randomFriendChat()// random chat appear
randomChat()// PUSH RANDOM CHAT IN CHATDATAARRAY



//////////////////////////////////////////////// MODEL  ///////////////////////////////////
//////////////////////////////////////////////// MODEL  ///////////////////////////////////

function SerailizePostDetails(){
    localStorage.setItem('postDetailsKey',JSON.stringify(postDetails))
}

function postIDsort(){
    let sortedID = postDetails.sort(function(a,b){
       return b.PostID - a.PostID
    })
    postDetails = sortedID
    return postDetails
}


function UserProfileInitialize(){
    let UserProfile = document.querySelector('.main-profile')
    UserProfile.setAttribute('src', userCookie[0].ProfilePicture)

    let UserProfileC = document.querySelector('.main-profile-comments')
    UserProfileC.setAttribute('src', userCookie[0].ProfilePicture)

    let UserProfilelogout = document.querySelector('.main-profile-logout')
    UserProfilelogout.setAttribute('src', userCookie[0].ProfilePicture)

    let UserProfileSide = document.querySelector('.main-profile-side')
    UserProfileSide.setAttribute('src', userCookie[0].ProfilePicture)

    let UserFullName = document.querySelector('.main-fullname')
    UserFullName.textContent = userCookie[0].Firstname + ' ' + userCookie[0].Lastname

    let UserFullNamelogout = document.querySelector('.mainfullname')
    UserFullNamelogout.textContent = userCookie[0].Firstname + ' ' + userCookie[0].Lastname
}
function EmptyUserCookie(){//Invoke when Logout to clear the value inside usercookie
    userCookie = [null]
    localStorage.setItem('userCookie', JSON.stringify(userCookie))
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

function resetPostModal(){
    let postMedia = document.getElementById('postMedia')
    postMedia.innerHTML = ""
    let postTextArea = document.getElementById('postTextArea')
    postTextArea.value = ""
}




function randomChat(){

    let genChats = setInterval(()=>{
        if (stopChatGeneration<1) {
            contactList.map((obj)=>{
                if (Math.floor(Math.random()*200 < 1)) {
                    let randomDescArray = []
                    let finalDesc
                    let random20 = Math.floor(Math.random()*5) + Math.floor(Math.random()*15) + Math.floor(Math.random()*5) + Math.floor(Math.random()*15)

                    for (let index = 0; index < random20; index++) {
                        randomDescArray.push(wordSets[Math.floor(Math.random()*wordSets.length)])
                        finalDesc = randomDescArray.join(" ")
                    }
                    generateConvo(obj.id,finalDesc,'received')
                    chatNotification()
                    
                }
            })
            stopChatGeneration += 1

            console.log(chatDataArray)
        }
        else{
            clearInterval(genChats)
        }
    },1000)


}

function sendThisChat(event){
    let targetThis = event.target.id
    let myChat = document.getElementById(`${targetThis}CI`).value
    generateConvo(targetThis,myChat,'sent')

    let chatBodys = document.getElementById(`${targetThis}chatBody`)
    chatBodys.innerHTML = ""

    let showChatData = []

    chatDataArray.map((obj)=>{
        if (Number(obj.id) === Number(targetThis)) {
            return showChatData.push(obj)
        }
        return
    })

    if (showChatData.length != 0) {

        if (showChatData[0].convo.length != 0) {
            showChatData[0].convo.forEach((obj)=>{
                if (obj.type === 'received') {
                    chatReceivedRender(contactList[targetThis],obj.chat)
                }
                else{
                    chatSentRender(obj.chat,contactList[targetThis].id)
                }
            })
        }
    }
    document.getElementById(`${targetThis}CI`).value = ""
}

function generateConvo(CDID,Chats,Ctype){
    let checkDouble = 0
    chatDataArray.map((obj,index)=>{
        if (Number(obj.id) === Number(CDID)) {
            checkDouble = index
            return  checkDouble
        }
        return checkDouble
    })
    if (checkDouble != 0) {
        chatDataArray[checkDouble].convo.push(
            {
                chat: Chats,
                type: Ctype
            }
        )
        chatDataArray = chatDataArray.map((obj)=>{
            if (Number(obj.id) === Number(CDID)) {
                
                return  {...obj,newChat: Number(obj.newChat) + 1}
            }
            return obj
        })
    }
    else{
        chatDataArray.push(
            {
                id:Number(CDID),
                isOpen: false,
                newChat: 1,
                convo: [
                    {
                        chat: Chats,
                        type: Ctype
                    }
                ]
            }
        )
    }
 

}


function createChatBox(event) {
    let targetID = event
    let showChatData = []

    chatDataArray.map((obj)=>{
        if (Number(obj.id) === Number(targetID)) {
            return showChatData.push(obj)
        }
        return
    })

    if (showChatData.length != 0) {
        renderChat(contactList[targetID])

        if (showChatData[0].convo.length != 0) {
            showChatData[0].convo.forEach((obj)=>{
                if (obj.type === 'received') {
                    chatReceivedRender(contactList[targetID],obj.chat)
                }
                else{
                    chatSentRender(obj.chat,contactList[targetID].id)
                }
            })
        }
        chatDataArray = chatDataArray.map((obj)=>{
            if (Number(obj.id) === Number(targetID)) {
                return {...obj,newChat: 0}
            }
            return obj
        })
        chatNotification()
    }
    else{
        renderChat(contactList[targetID])
    }

    document.querySelector('.new--chat--container').innerHTML = ""
    generateMiniChat()
    
}
function renderRandomPost(){
    let randomName = Math.floor(Math.random()*NameSets.length-1)
    let randomName2 = Math.floor(Math.random()*NameSets.length-1)
    let randomPic = Math.floor(Math.random()*pictureSets.length-1)
    let randomVid = Math.floor(Math.random()*videoSets.length-1)
    let firstname = NameSets[randomName]
    let lastname = NameSets[randomName2]
    let post = ['video','gaming','page','people']
    let randomDescArray = []
    let finalDesc
    let mediaSwitch = Math.floor(Math.random()*15) > 4 ? "image":"video"
    let postIDgenerate = new Date().getTime()
    let commentCounter = Math.floor(Math.random()*100)+Math.floor(Math.random()*100)
    let reactionCount = Math.floor(Math.random()*100)+Math.floor(Math.random()*300)+Math.floor(Math.random()*50)
    let shareCounter = Math.floor(Math.random()*100)+Math.floor(Math.random()*150)+Math.floor(Math.random()*10)


    let random20 = Math.floor(Math.random()*5) + Math.floor(Math.random()*15) + Math.floor(Math.random()*5) + Math.floor(Math.random()*15)

    for (let index = 0; index < random20; index++) {
        randomDescArray.push(wordSets[Math.floor(Math.random()*wordSets.length)])
        finalDesc = randomDescArray.join(" ")
    }




    postDetails.push({
        userUniqueID : postUniqueID,
        UserProfile : null,
        Firstname : firstname,
        Lastname : lastname,
        PostID : postIDgenerate,
        PostDEscription : finalDesc,
        mediaURL : mediaSwitch === "image" ? pictureSets[randomPic]:videoSets[randomVid],//
        mediaType : mediaSwitch,
        reaction : reactionCount,
        commentC : commentCounter,
        shareC : shareCounter,
        isUser: false,
      })

      renderPostBlock(postDetails[postDetails.length-1],'div')
}
function generateMiniChat(){
    chatDataArray.forEach((obj)=>{
        renderMiniChat(obj)
    })
}


//////////////////////////////////////////////// VIEW ////////////////////////////////////////
//////////////////////////////////////////////// VIEW ////////////////////////////////////////
// color: #b0b3b8;
// color: #1877f2;

function renderMiniChat(items){
    let newChatContainer = document.querySelector('.new--chat--container')
    let chatDisplayRead = document.createElement('div')
    chatDisplayRead.setAttribute('class','chat--display--read')
    chatDisplayRead.id = items.id
    chatDisplayRead.onclick = (event)=>createChatBox(event.target.id)
    newChatContainer.appendChild(chatDisplayRead)

        let contactProfile = document.createElement('div')
        contactProfile.setAttribute('class','contact--profile')
        contactProfile.style.background = contactList[items.id].profileColor
        contactProfile.textContent = `${contactList[items.id].fn[0]}${contactList[items.id].ln[0]}`
        chatDisplayRead.appendChild(contactProfile)

            if (contactList[items.id].isOnline) {
                let onlineStat = document.createElement('div')
                onlineStat.setAttribute('class','online--stat--green')
                contactProfile.appendChild(onlineStat)
            }
            else{
                let onlineStat = document.createElement('div')
                onlineStat.setAttribute('class','offline--stat--grey')
                contactProfile.appendChild(onlineStat)
            }

        let chatDisplayMiniChat = document.createElement('div')
        chatDisplayMiniChat.setAttribute('class','chat--display--mini--chat')
        chatDisplayRead.appendChild(chatDisplayMiniChat)

            let contactFullname = document.createElement('span')
            contactFullname.setAttribute('class','contact--fullname')
            contactFullname.textContent = `${contactList[items.id].fn} ${contactList[items.id].ln}`
            chatDisplayMiniChat.appendChild(contactFullname)

            let chatContent

            if (items.convo[items.convo.length - 1].chat.length < 25) {
                chatContent = items.convo[items.convo.length - 1].chat
            }
            else{
                let joinThis = []
                for (let index = 0; index < 25; index++) {
                    const element = items.convo[items.convo.length - 1].chat[index];
                    joinThis.push(element)
                    
                }
                joinThis.push('...')
                chatContent = joinThis.join('')
            }

            if (items.newChat !=0) {
                let miniChatter = document.createElement('span')
                miniChatter.setAttribute('class','mini--chatter')
                miniChatter.setAttribute('style','color: #1877f2;')
                miniChatter.textContent = chatContent
                chatDisplayMiniChat.appendChild(miniChatter)
            }
            else{
                let miniChatter = document.createElement('span')
                miniChatter.setAttribute('class','mini--chatter')
                miniChatter.setAttribute('style','color: #b0b3b8;')
                miniChatter.textContent = chatContent
                chatDisplayMiniChat.appendChild(miniChatter)
            }


}


function renderChat(items) {
    let footerChat = document.querySelector('.footer--chat')
    let chatContainer = document.createElement('div')
    chatContainer.setAttribute('class','chat--container')
    chatContainer.id = `${items.id}CC`
    footerChat.appendChild(chatContainer)


    let chatHeaderContainer = document.createElement('div')
    chatHeaderContainer.setAttribute('class','chat--header--container')
    chatContainer.appendChild(chatHeaderContainer)

        let chatHeaderSection = document.createElement('div')
        chatHeaderSection.setAttribute('class','chat--header--section')
        chatHeaderContainer.appendChild(chatHeaderSection)

            let chatProfile = document.createElement('div')
            chatProfile.setAttribute('class','chat--profile')
            chatProfile.textContent = `${items.fn[0]}${items.ln[0]}`
            chatProfile.style.background = items.profileColor
            chatHeaderSection.appendChild(chatProfile)

            if (items.isOnline) {
                let onlineStat = document.createElement('div')
                onlineStat.setAttribute('class','online--stat--green')
                chatProfile.appendChild(onlineStat)
            }
            else{
                let onlineStat = document.createElement('div')
                onlineStat.setAttribute('class','offline--stat--grey')
                chatProfile.appendChild(onlineStat)
            }

            let contactFullname = document.createElement('span')
            contactFullname.setAttribute('class','contact--fullname')
            contactFullname.textContent = `${items.fn} ${items.ln}`
            chatHeaderSection.appendChild(contactFullname)

        let rightDiv = document.createElement('div')
        chatHeaderContainer.appendChild(rightDiv)

            let chatMinBtn = document.createElement('button')
            chatMinBtn.setAttribute('class','chat--min--btn')
            rightDiv.appendChild(chatMinBtn)

                let minSpan = document.createElement('span')
                minSpan.setAttribute('class','material-symbols-outlined')
                minSpan.textContent = "minimize"
                chatMinBtn.appendChild(minSpan)

            let chatExitBtn = document.createElement('button')
            chatExitBtn.setAttribute('class','chat--exit--btn')
            // chatExitBtn.id = items.id
            // chatExitBtn.onclick = (event)=> closeChat(event.target.id)
            rightDiv.appendChild(chatExitBtn)

                let exitSpan = document.createElement('span')
                exitSpan.setAttribute('class','material-symbols-outlined')
                exitSpan.textContent = "close"
                exitSpan.id = items.id
                exitSpan.onclick = (event)=> closeChat(event.target.id)
                chatExitBtn.appendChild(exitSpan)

            
    let chatBody = document.createElement('div')
    chatBody.setAttribute('class','chat--body')
    chatBody.id = `${items.id}chatBody`
    chatContainer.appendChild(chatBody)

    let chatFooter = document.createElement('div')
    chatFooter.setAttribute('class','chat--footer')
    chatContainer.appendChild(chatFooter)

        let chatInput = document.createElement('input')
        chatInput.setAttribute('class','chat--input')
        chatInput.setAttribute('type','text')
        chatInput.setAttribute('placeholder','Chat here..')
        chatInput.id = `${items.id}CI`
        chatFooter.appendChild(chatInput)

        let sendBtn = document.createElement('button')
        sendBtn.setAttribute('class','send--btn')
        sendBtn.id = items.id
        sendBtn.onclick = (event)=>sendThisChat(event)
        chatFooter.appendChild(sendBtn)

            let sendSpan = document.createElement('span')
            sendSpan.setAttribute('class','material-symbols-outlined')
            sendSpan.textContent = "send"
            sendSpan.id = items.id
            sendBtn.appendChild(sendSpan)

}
function chatSentRender(items,DomID) {
    let chatBody = document.getElementById(`${DomID}chatBody`)

    let sentContainer = document.createElement('div')
    sentContainer.setAttribute('class','sent--container')
    chatBody.appendChild(sentContainer)

        let chatSent = document.createElement('div')
        chatSent.setAttribute('class','chat--sent')
        chatSent.textContent = items
        sentContainer.appendChild(chatSent)
}

function chatReceivedRender(items,chat) {

    let chatBody = document.getElementById(`${items.id}chatBody`)

        let receivedContainer = document.createElement('div')
        receivedContainer.setAttribute('class','received--container')
        chatBody.appendChild(receivedContainer)

            let chatProfile = document.createElement('div')
            chatProfile.setAttribute('class','chat--profile small--profile')
            chatProfile.textContent = `${items.fn[0]}${items.ln[0]}`
            chatProfile.style.background = items.profileColor
            receivedContainer.appendChild(chatProfile)

            if (items.isOnline) {
                let onlineStat = document.createElement('div')
                onlineStat.setAttribute('class','online--stat--green')
                chatProfile.appendChild(onlineStat)
            }
            else{
                let onlineStat = document.createElement('div')
                onlineStat.setAttribute('class','offline--stat--grey')
                chatProfile.appendChild(onlineStat)
            }

        let chatReceived = document.createElement('div')
        chatReceived.setAttribute('class','chat--received')
        chatReceived.textContent = chat
        receivedContainer.appendChild(chatReceived)

}

function contactRefresh(){
    setInterval(()=>{
        updateStat()
        displayContact()
        if (stopper<3) {
            randomFriendChat()
            
        }

        if (Math.floor(Math.random()*100) < 20) {
            stopChatGeneration = 0
            randomChat()
        }
        
    },Math.floor(Math.random()*10000+10000))
    document.querySelector('.new--chat--container').innerHTML = ""
    generateMiniChat()
}


function randomFriendChat(){
    
    if (Math.floor(Math.random()*101) >= 90) {
        let newArray = []
        let randomIndex = Math.floor(Math.random()*contactList.length-1)
        chatDataArray.map((obj)=>{
            if (Number(obj.id) === Number(randomIndex)) {
                newArray.push(obj)
                return newArray
            }
        })

        if (newArray.length != 0) {
            contactList = contactList.map((obj)=>{
                if (Number(obj.id) === Number(randomIndex)) {
                    console.log(`${randomIndex} this is the random`)
                    return {...obj,isOnline: true}
                }
                return obj
            })
            createChatBox(Number(randomIndex))
        }
        else{
            
            let randomDescArray = []
            let finalDesc
            let random20 = Math.floor(Math.random()*5) + Math.floor(Math.random()*15) + Math.floor(Math.random()*5) + Math.floor(Math.random()*15)

            contactList = contactList.map((obj)=>{
                if (Number(obj.id) === Number(randomIndex)) {
                    console.log(`${randomIndex} this is the random`)
                    return {...obj,isOnline: true}
                }
                return obj
            })

            for (let index = 0; index < random20; index++) {
                randomDescArray.push(wordSets[Math.floor(Math.random()*wordSets.length)])
                finalDesc = randomDescArray.join(" ")
            }
            generateConvo(randomIndex,finalDesc,'received')
            createChatBox(Number(randomIndex))

            
        }
        console.log(contactList[randomIndex])
    }

}


function chatNotification(){

    let counter = 0

    for (let index = 0; index < chatDataArray.length; index++) {
        const element = chatDataArray[index];
        counter += chatDataArray[index].newChat
    }
    document.querySelector('.miniCount').textContent = counter

    console.log(counter)

    document.querySelector('.new--chat--container').innerHTML = ""
    generateMiniChat()
}

function updateStat(){
    contactList = contactList.map((obj)=>{
        return {...obj,isOnline: false}
    })
    contactList = contactList.map((obj)=>{
        if (Math.floor(Math.random()*25)===24) {
            return {...obj,isOnline: !obj.isOnline}
        }
        return obj
    })
    return contactList
}


function fillContact(){ 
    contactList=[]
    for (let index = 0; index < userCookie[0].friendC; index++) {
        let randomName = Math.floor(Math.random()*NameSets.length)
        let randomName2 = Math.floor(Math.random()*NameSets.length)
        let firstname = NameSets[randomName]
        let lastname = NameSets[randomName2]

        let colorSelection = ['darkcyan','darkblue','darkgoldenrod','darkgreen','darkorange','darkred']
        let randomIndexsColor = Math.floor(Math.random()*colorSelection.length)

        contactList.push({
            fn: firstname,
            ln: lastname,
            isOnline: Math.floor(Math.random()*25) === 24 ? true:false,
            id: index,
            profileColor: colorSelection[randomIndexsColor]
        })
    }
    return contactList
}

function displayContact(){
    let rightMenu = document.getElementById('right-menus')
    rightMenu.innerHTML = ""
    let onlineCheck = []
    contactList.map((obj)=>{
        if (obj.isOnline) {
            onlineCheck.push(obj)
            return
        }
        return
    })
    onlineCheck.forEach((obj)=>{
        renderContacts(obj)
    })

}


function renderContacts(items){

    let rightMenu = document.getElementById('right-menus')

        let rightContact = document.createElement('div')
        rightContact.setAttribute('class','right-contacts')
        rightContact.id = items.id
        rightContact.onclick= (event)=>createChatBox(event.target.id)
        rightMenu.appendChild(rightContact)
            let contactProfile = document.createElement('div')
            contactProfile.setAttribute('class','contact--profile')
            contactProfile.textContent = `${items.fn[0]}${items.ln[0]}`
            contactProfile.style.background = items.profileColor
            rightContact.appendChild(contactProfile)

            if (items.isOnline) {
                let onlineStat = document.createElement('div')
                onlineStat.setAttribute('class','online--stat--green')
                contactProfile.appendChild(onlineStat)
            }
            else{
                let onlineStat = document.createElement('div')
                onlineStat.setAttribute('class','offline--stat--grey')
                contactProfile.appendChild(onlineStat)
            }

            let contactFullname = document.createElement('div')
            contactFullname.setAttribute('class','contact--fullname')
            contactFullname.textContent = `${items.fn} ${items.ln}`
            rightContact.appendChild(contactFullname)

}



function generatePost(){
    let startPosting = setInterval(()=>{
        if (postCount<5) {
            renderRandomPost('people')
            postCount+=1
            // console.log("New post created")
        }
        else{
            postCount = 0
            clearInterval(startPosting)
        }
        return postCount
    },1000)
}


function showComments(event){
    console.log(event.target.id + 'this is the btn id')//1st line
    const targetPost = event.target.id
    postDetails.filter((obj)=>{
        if (Number(targetPost) === obj.PostID) {   
            renderPostBlock(obj,'dialog')
            for (let index = 0; index < obj.commentC; index++) {
                renderShowComments(randomCommentPost()[0])
            }
            return 
        }
        return
    })
}

function randomCommentPost(){

///////////////////FIRSTNAME AND LASTNAME /////////////////////////////

    let randomFN = Math.floor(Math.random()*NameSets.length)
    let randomLN = Math.floor(Math.random()*NameSets.length)
    let firstname = NameSets[randomFN]
    let lastname = NameSets[randomLN]

//////////////////RANDOM COMMENT//////////////////////////////////////

    let randomDescArray = []
    let finalDesc
    let random20 = Math.floor(Math.random()*5) + Math.floor(Math.random()*15) + Math.floor(Math.random()*5) + Math.floor(Math.random()*15)
    for (let index = 0; index < random20; index++) {
        randomDescArray.push(wordSets[Math.floor(Math.random()*wordSets.length)])
        finalDesc = randomDescArray.join(" ")
    }

/////////////////// RANDOM REACT ///////////////////////////////////

    let random30 = Math.floor(Math.random()*30)
    let commentReactionCount = null

    if (random30 >= 25) {
        commentReactionCount = Math.floor(Math.random()*50)+1
    }

    let randomCommentObj = []

    randomCommentObj.push({
        fn: firstname,
        ln: lastname,
        comment: finalDesc,
        reactions: commentReactionCount
    })

    return randomCommentObj
}


function renderShowComments(items){
    // console.log(items)
    // console.log(`renderShowComments`)
    let commentSectionChild = document.querySelector('.comment--section--child')
        let commentBlock = document.createElement('div')
        commentBlock.setAttribute('class','comment--block')
        commentSectionChild.appendChild(commentBlock)

            let commentProfileBlock = document.createElement('div')
            commentProfileBlock.setAttribute('class','author-section comment-profile-block')
            commentBlock.appendChild(commentProfileBlock)

                let colorSelection = ['darkcyan','darkblue','darkgoldenrod','darkgreen','darkorange','darkred']
                let randomIndexsColor = Math.floor(Math.random()*colorSelection.length)
                let contactProfile = document.createElement('div')
                contactProfile.setAttribute('class','contact--profile')
                contactProfile.textContent = `${items.ln[0]}${items.fn[0]}`
                contactProfile.style.background = `${colorSelection[randomIndexsColor]}`
                contactProfile.style.marginRight = "0px"
                commentProfileBlock.appendChild(contactProfile)

            let commentWithAuthor = document.createElement('div')
            commentWithAuthor.setAttribute('class','comment--with--author')
            commentBlock.appendChild(commentWithAuthor)

                let commentWithAuthorUpper = document.createElement('div')
                commentWithAuthorUpper.setAttribute('class','comment--with--author--upper')
                commentWithAuthor.appendChild(commentWithAuthorUpper)

                    let postFullName = document.createElement('span')
                    postFullName.setAttribute('class','post-fullname')
                    postFullName.textContent = `${items.fn} ${items.ln}`
                    commentWithAuthorUpper.appendChild(postFullName)

                    let commented = document.createElement('span')
                    commented.textContent = items.comment
                    commentWithAuthorUpper.appendChild(commented)

                let commentReactCount = document.createElement('div')
                commentReactCount.setAttribute('class','comment--react--count')
                commentWithAuthor.appendChild(commentReactCount)

                    let commentWithAuthorLower = document.createElement('div')
                    commentWithAuthorLower.setAttribute('class','comment--with--author--lower')
                    commentReactCount.appendChild(commentWithAuthorLower)

                        let likeStrong = document.createElement('strong')
                        likeStrong.textContent = "Like"
                        let ReplyStrong = document.createElement('strong')
                        ReplyStrong.textContent = "Reply"

                        commentWithAuthorLower.appendChild(likeStrong)
                        commentWithAuthorLower.appendChild(ReplyStrong)

                    let sideReact = document.createElement('div')
                    sideReact.setAttribute('class','side-react')
                    commentReactCount.appendChild(sideReact)

                    let random2 = Math.floor(Math.random()*3+1)

                    let emojis = ['https://cdn.iconscout.com/icon/free/png-256/care-2387662-1991058.png?f=avif&w=128','https://cdn.iconscout.com/icon/free/png-256/sad-2387665-1991063.png?f=avif&w=128','https://cdn.iconscout.com/icon/free/png-256/angry-2387661-1991061.png?f=avif&w=128','https://cdn.iconscout.com/icon/free/png-256/wow-2387663-1991062.png?f=avif&w=128','https://cdn.iconscout.com/icon/free/png-256/love-2387666-1991064.png?f=avif&w=128','https://cdn.iconscout.com/icon/free/png-256/haha-2387660-1991060.png?f=avif&w=128','https://cdn.iconscout.com/icon/free/png-256/like-2387659-1991059.png?f=avif&w=128']

                    if (items.reactions >= 2) {
                        for (let index = 0; index < random2; index++) {
                            let randomIndex = Math.floor(Math.random()*emojis.length)

                            let newEmoji = document.createElement('img')
                            newEmoji.setAttribute('src',emojis[randomIndex])
                            newEmoji.setAttribute('class','emoji')
                            sideReact.appendChild(newEmoji)
                            emojis.splice(randomIndex,1)
                        }

                    } 
                    else if (items.reactions === 1) {
                        let newEmoji = document.createElement('span')
                        newEmoji.setAttribute('src',emojis[randomIndex])
                        newEmoji.setAttribute('class','emoji')
                        sideReact.appendChild(newEmoji)
                    }

                    if (items.reactions != null) {
                        let anotherSpan = document.createElement('span')
                        anotherSpan.textContent = items.reactions
                        sideReact.appendChild(anotherSpan)
                    }
                    
}


function renderPostBlock(items,type){
    // console.log(items)//3rd line
    // console.log(`renderPostBlock`)//last line
    let commentsDiv = document.getElementById('commentsdiv')
        let commentBox
        if (type === 'div') {
            commentBox = document.createElement('div')
            commentBox.setAttribute('class', "comment-box")
            commentBox.id = `${items.PostID}CB`
        } else if (type === 'dialog') {
            commentBox = document.createElement('dialog')
            commentBox.setAttribute('class', "comment-section")
            commentBox.open = true
            commentBox.id = 'temporaryBox'
        }
            commentsDiv.appendChild(commentBox)
            let authorSection = document.createElement('div')
            authorSection.setAttribute('class', "author-section")
            commentBox.appendChild(authorSection)

            
            let colorSelection = ['darkcyan','darkblue','darkgoldenrod','darkgreen','darkorange','darkred']
            let randomIndexsColor = Math.floor(Math.random()*colorSelection.length)
            let contactProfile = document.createElement('div')

            contactProfile.setAttribute('class','contact--profile')
            contactProfile.textContent = `${items.Firstname[0]}${items.Lastname[0]}`
            contactProfile.style.background = `${colorSelection[randomIndexsColor]}`
            contactProfile.style.marginRight = "0px"
            authorSection.appendChild(contactProfile)
            
                let fullNameSpan = document.createElement('span')
                fullNameSpan.setAttribute('class',"post-fullname")
                fullNameSpan.onclick = (e)=>{console.log(e.target.id)}
                fullNameSpan.textContent = items.Firstname + ' ' + items.Lastname
                authorSection.appendChild(fullNameSpan)

                let closeBTN = document.createElement('span')
                closeBTN.setAttribute('class','material-symbols-outlined close-btn-post')
                closeBTN.textContent = 'close'
                closeBTN.onclick = ()=>removeMyDOM()
                authorSection.appendChild(closeBTN)
    
            let descriptionSection = document.createElement('div')
            descriptionSection.setAttribute('class', "description-section")
            commentBox.appendChild(descriptionSection)
                let postDescriptionP = document.createElement('p')
                postDescriptionP.setAttribute('class', "post-description")
                postDescriptionP.textContent = items.PostDEscription
                descriptionSection.appendChild(postDescriptionP)
    
            let mediaSection = document.createElement('div')
            mediaSection.setAttribute('class', "media-section")
            commentBox.appendChild(mediaSection)
    
            if (items.mediaType === 'video') {
                let mediaPost = document.createElement('iframe')
                mediaPost.setAttribute('class', `media-post iframes`)
                mediaPost.setAttribute('src', items.mediaURL)
                mediaPost.style.height = "400px"
                mediaSection.appendChild(mediaPost)
            } else if(items.mediaType === 'image'){
                let mediaPost = document.createElement('img')
                mediaPost.setAttribute('class', "media-post")
                mediaPost.setAttribute('src', items.mediaURL)
                mediaSection.appendChild(mediaPost)
            }

            let reactionSection = document.createElement('div')
            reactionSection.setAttribute('class','reaction-section')
            commentBox.appendChild(reactionSection)
                let reactionLeft = document.createElement('div')
                reactionLeft.setAttribute('class','reaction-left')
                reactionSection.appendChild(reactionLeft)

                let random2 = Math.floor(Math.random()*3+1)

                let emojis = ['https://cdn.iconscout.com/icon/free/png-256/care-2387662-1991058.png?f=avif&w=128','https://cdn.iconscout.com/icon/free/png-256/sad-2387665-1991063.png?f=avif&w=128','https://cdn.iconscout.com/icon/free/png-256/angry-2387661-1991061.png?f=avif&w=128','https://cdn.iconscout.com/icon/free/png-256/wow-2387663-1991062.png?f=avif&w=128','https://cdn.iconscout.com/icon/free/png-256/love-2387666-1991064.png?f=avif&w=128','https://cdn.iconscout.com/icon/free/png-256/haha-2387660-1991060.png?f=avif&w=128','https://cdn.iconscout.com/icon/free/png-256/like-2387659-1991059.png?f=avif&w=128']
                

                for (let index = 0; index < random2; index++) {
                    let randomSelect = Math.floor(Math.random()*emojis.length)

                    let reactMaterial = document.createElement('img')
                    reactMaterial.setAttribute('class','emoji')
                    reactMaterial.setAttribute('src',emojis[randomSelect])
                    reactionLeft.appendChild(reactMaterial)
                    emojis.splice(randomSelect,1)
                }

                    let spanCount = document.createElement('span')
                    spanCount.setAttribute('class','spanCount')
                    spanCount.textContent = items.reaction
                    reactionLeft.appendChild(spanCount)

                let reactionRight = document.createElement('div')
                reactionRight.setAttribute('class','reaction-right')
                reactionSection.appendChild(reactionRight)
                    let commentCount = document.createElement('span')
                    commentCount.setAttribute('class','commentCount')
                    commentCount.textContent = `${items.commentC} comments`
                    reactionRight.appendChild(commentCount)
                    let shareCount = document.createElement('span')
                    shareCount.setAttribute('class','shareCount')
                    shareCount.textContent = `${items.shareC} shares`
                    reactionRight.appendChild(shareCount)

            let commentView = document.createElement('div')
            commentView.setAttribute('class', 'comment-view')
            commentBox.appendChild(commentView)
                let likeDiv = document.createElement('button')
                likeDiv.setAttribute('class','like-div')
                commentView.appendChild(likeDiv)
                    let likeLogo = document.createElement('span')
                    likeLogo.setAttribute('class','material-symbols-outlined like-logo')
                    likeLogo.textContent = "thumb_up"
                    likeDiv.appendChild(likeLogo)
                    let likeSpan = document.createElement('span')
                    likeSpan.textContent = "Like"
                    likeDiv.appendChild(likeSpan)
                
                let commnetBelow = document.createElement('button')
                commnetBelow.setAttribute('class','comment-below-div')
                commnetBelow.id = items.PostID
                commnetBelow.onclick = (event)=>showComments(event)
                // commentView.setAttribute('id', items.PostID)
                // commentView.onclick = (event)=>{showComments(event)}
                commentView.appendChild(commnetBelow)

                    let chatLogo = document.createElement('span')
                    chatLogo.setAttribute('class','material-symbols-outlined')
                    chatLogo.textContent = "chat"
                    // chatLogo.id = items.PostID

                    commnetBelow.appendChild(chatLogo)
                    let commentSpan = document.createElement('span')
                    commentSpan.textContent = "Comments"
                    // commentSpan.id = items.PostID
                    commnetBelow.appendChild(commentSpan)

                let shareDiv = document.createElement('button')
                shareDiv.setAttribute('class','share-div')
                commentView.appendChild(shareDiv)
                    let shareLogo = document.createElement('span')
                    shareLogo.setAttribute('class','material-symbols-outlined')
                    shareLogo.textContent = "google_plus_reshare"
                    shareDiv.appendChild(shareLogo)
                    let shareSpans = document.createElement('span')
                    shareSpans.textContent = "Share"
                    shareDiv.appendChild(shareSpans)
        if (type === 'dialog') {

            let commentSectionChild = document.createElement('div')
            commentSectionChild.setAttribute('class','comment--section--child')
            commentBox.appendChild(commentSectionChild)
        }
}


function renderComments(){
    let commentsDiv = document.getElementById('commentsdiv')
    commentsDiv.innerHTML = ""
    postDetails.forEach((obj)=>{
        renderPostBlock(obj,'div')
    })
        
}
///////////////////////////////////////// CONTROL //////////////////////////////////////////
///////////////////////////////////////// CONTROL //////////////////////////////////////////



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
document.querySelector('.profile-left').addEventListener('click', () => {
    location.href = "/profile"
})

// Make a post section
let postModal = document.querySelector('.make-post-modal')

document.querySelector('.createPost').addEventListener('click', () => {
    postModal.showModal()
    resetPostModal()
})
document.querySelector('.makeAcomment-photo').addEventListener('click', () => {
    postModal.showModal()
    resetPostModal()
})
document.querySelector('.makeAcomment-video').addEventListener('click', () => {
    postModal.showModal()
    resetPostModal()
})
document.querySelector('.makeAcomment-feeling').addEventListener('click', () => {
    postModal.showModal()
    resetPostModal()
})

//////////////////////////////////////////// POST FILE READER //////////////////////////////////

let postUploadImage = document.querySelector('.media-input')
let postUploadURL// for image

let mediaTypeout
postUploadImage.addEventListener('change', (e) => {
    const uploadReader = new FileReader()
    uploadReader.readAsDataURL(postUploadImage.files[0])
    let mediaType = postUploadImage.files[0].type// capture the file type
    let mediaSplit = mediaType.split("/")// splits then get the file type image or video

    uploadReader.addEventListener('load', () => {
        postUploadURL = uploadReader.result
        mediaTypeout = mediaSplit[0]
        if (mediaSplit[0] === "video") {
            let postMedia = document.getElementById('postMedia')
            postMedia.innerHTML = ""
            let newVideoEL = document.createElement('video')
            newVideoEL.style = "width:100%"
            newVideoEL.setAttribute('src',postUploadURL)
            newVideoEL.controls = true
            postMedia.appendChild(newVideoEL)
        } else {
            let postMedia = document.getElementById('postMedia')
            postMedia.innerHTML = ""
            let newVideoEL = document.createElement('img')
            newVideoEL.style = "width:100%"
            newVideoEL.setAttribute('src',postUploadURL)
            postMedia.appendChild(newVideoEL)
        }
    })
})

document.querySelector('.create-post-btn').addEventListener('click', () => {
    postDetails.push({
        userUniqueID : userCookie[0].UniqueUserID,
        UserProfile : null,
        Firstname : userCookie[0].Firstname,
        Lastname : userCookie[0].Lastname,
        PostID : new Date().getTime(),
        PostDEscription : document.getElementById('postTextArea').value,
        mediaURL : postUploadURL,
        mediaType : mediaTypeout,
        reaction : Math.floor(Math.random()*100)+Math.floor(Math.random()*500)+Math.floor(Math.random()*400),
        commentC : Math.floor(Math.random()*100)+Math.floor(Math.random()*100),
        shareC : Math.floor(Math.random()*100)+Math.floor(Math.random()*150)+Math.floor(Math.random()*50),
        isUser: true,
        postType: 'people' //page,gaming,video,people
      })
    postIDsort()
    SerailizePostDetails()
    postModal.close()
    renderComments()
    let postMedia = document.getElementById('postMedia')
    postMedia.innerHTML = ""
    postUploadURL = null
    mediaTypeout = null
})

window.addEventListener('scroll',()=>{
    scrollCount += 1
    
    if (scrollCount === 450) {
        console.log("Post Re-rendered!")
        renderComments() // RECREATE EACH POST FROM THE ARRAY
        SerailizePostDetails() // SAVES THE POSTDETAILS ARRAY INTO LOCALSTORAGE
        generatePost() // GENERATE NEW RANDOM POST
        
        return scrollCount = 0
    }
    else{
        return scrollCount
    }
    
})

function removeMyDOM(){
    console.log('remover triggered')
    let removeThis = document.getElementById('temporaryBox')
    removeThis.remove()
}
window.addEventListener('click',()=>randomFriendChat())

function closeChat(event){
    let removeChat = document.getElementById(`${event}CC`)
    removeChat.remove()
}

let showChat = false
document.querySelector('.chat').addEventListener('click',()=>{
    if (showChat) {
        document.querySelector('.chat--display--block').setAttribute('style','visibility: hidden;')
        showChat = false
    }
    else{
        document.querySelector('.chat--display--block').setAttribute('style','visibility: visible;')
        showChat = true
    }
})