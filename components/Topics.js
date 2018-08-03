import React,{Component} from 'react'
import {View} from 'react-native'
import {ListItem} from 'react-native-elements'

class Topics extends Component{
    static navigationOptions={
        title:'Topics'
    }

    constructor(props){
        super(props)
        const courseId = this.props.navigation.getParam('courseId' , '0')
        const moduleId = this.props.navigation.getParam('moduleId' , '0')
        const lessonId = this.props.navigation.getParam('lessonId' , '0')

        fetch('https://web-dev-summer-react-native.herokuapp.com/api/course/'+courseId+'/module/'+moduleId+
            '/lesson/'+lessonId+'/topic')
            .then(response => response.json())
            .then(topics => {this.setState({topicList : topics})
            })
        this.state = {topicList:[],
            courseId : courseId,
            moduleId: moduleId,
            lessonId:lessonId
        }
    }

    render(){
        return(
            <View>
                {this.state.topicList.map((topic,index) => (
                    <ListItem
                    key={index}
                    title={topic.title}
                    onPress={() => this.props.navigation.navigate('Widgets' , {'topicId' : topic.id})}>
                    </ListItem>
                ))}

            </View>
        )
    }
}
export default Topics