import React,{Component} from 'react'
import {View} from 'react-native'
import {ListItem} from 'react-native-elements'

class Lessons extends Component {
    static navigationOptions = {
        title: 'Lessons'
    }

    constructor(props) {
        super(props)
        const moduleId = this.props.navigation.getParam('moduleId' , '0')
        const courseId = this.props.navigation.getParam('courseId' , '0')
        fetch('https://web-dev-summer-react-native.herokuapp.com/api/course/'+courseId+ '/module/' +moduleId+'/lesson')
            .then(response => response.json())
            .then(lessons => {
                this.setState({lessonsList : lessons})
            })
        this.state = {lessonsList:[],
        courseId : courseId,
        moduleId : moduleId}
    }

    render() {
        return (
            <View>
                {this.state.lessonsList.map((lesson,index) => (
                    <ListItem
                    key = {index}
                    title = {lesson.title}
                    onPress={() => this.props.navigation.navigate('Topics' , {'courseId' : this.state.courseId,
                                      'moduleId':this.state.moduleId,
                                       'lessonId' : lesson.id })}>
                    </ListItem>
                ))
                }
            </View>
        )
    }
}
export default Lessons
