const people = {}

export default function people_reducer(state=people, action)
{
    switch (action.type)
    {
        case "GET_PEOPLE":
            return{
                ...state,
                getPeople:action.payload
            }
        break
        
        case "PERSON_DETAIL":
            return{
                ...state,
                personDetail:action.payload
            }
        break
        
        case "FIELD_DETAIL":
            return{
                ...state,
                fieldDetail:action.payload
            }
        break

        default : 
            return state
    }
}