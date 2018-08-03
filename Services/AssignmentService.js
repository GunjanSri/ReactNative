const ASSIGNMENT_URL = "https://web-dev-summer-react-native.herokuapp.com/api/assignment/assgnID"
const ASSIGNMENT_TOPIC_URL = "https://web-dev-summer-react-native.herokuapp.com/api/topic/topicId/assignment"

let _Singleton
export default class AssignmentService{

    constructor(singletonToken){
        if(_Singleton !== singletonToken){
            throw new Error('Singleton object is not same')
        }
    }

    static get instance(){
        if(!this[_Singleton])
            this[_Singleton] = new AssignmentService(_Singleton);
        return this[_Singleton]
    }

    getAssignmentListFromTopicId(topicId){
        return fetch(ASSIGNMENT_TOPIC_URL.replace('topicId' , topicId))
        .then(response => response.json())
    }
}