export const getPeople = () => {

    const getPeople = fetch('http://localhost:3000/people')
                      .then(res => res.json())
    return {
        type: 'GET_PEOPLE',
        payload: getPeople
    }
}


export const personDetail = (name) => {

    const getPerson = fetch(`http://localhost:3000/people?name=${name}`, {method:"GET"})
        .then(res => res.json())
    
    return {
        type: "PERSON_DETAIL",
        payload: getPerson
    }
}


export const fieldDetail = (name) => {

    const getField = fetch(`https://pris.dpr.gov.ng/getFields?id=11`, {method:"GET"})
        .then(res => res.json())
    
    return {
        type: "FIELD_DETAIL",
        payload: getField
    }




    