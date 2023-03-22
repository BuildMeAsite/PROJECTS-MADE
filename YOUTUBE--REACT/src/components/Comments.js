import React from 'react'

function Comments() {

    let randomComments = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque, saepe explicabo labore sapiente nobis eveniet minus repellat excepturi voluptas tenetur, dolore eum aut possimus. Tempore, maxime maiores tenetur sapiente facilis autem accusantium repellendus voluptas in distinctio magnam debitis quos neque qui vel magni saepe quidem beatae! Ut eum exercitationem dolore ullam recusandae, consectetur quia fuga molestias dignissimos blanditiis voluptas."

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
    ]

    function generateComment() {
        let randomSlice = randomComments.slice(0,Math.floor(Math.random()*randomComments.length-1))
        return randomSlice
    }
    function generateName() {
        let randomFN = NameSets[Math.floor(Math.random()*NameSets.length-1)]
        let randomLN = NameSets[Math.floor(Math.random()*NameSets.length-1)]
        let newName = `${randomFN} ${randomLN}`
        return newName
    }

    generateComment()
  return (
    <div className='comment--container'>
        <span className="material-symbols-outlined profile--comment">
           account_circle
        </span>
        <div className='comment--side'>
            <strong>{generateName()}</strong>
            {generateComment()}
            <div className='bottom--comments'>
                <span className="material-symbols-outlined">
                    thumb_up
                </span>
                {Math.floor(Math.random()*300)}
                <span className="material-symbols-outlined">
                    thumb_down
                </span>
                <span>Reply</span>
            </div>
        </div>

    </div>
  )
}

export default Comments