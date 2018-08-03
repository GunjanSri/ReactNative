import React,{Component} from 'react'
import {View} from 'react-native'
import {ListItem} from 'react-native-elements'

class Courses extends Component{
    static navigationOptions = {
        title:'Courses'
    }

    constructor(props){
        super(props)
        fetch('https://web-dev-summer-react-native.herokuapp.com/api/course')
            .then(response => response.json())
            .then(courses => {
                this.setState({courseList:courses})
            })
        this.state = {courseList:[]}
    }

    render(){
        return(
            <View style ={{padding:10}}>
                {this.state.courseList.map((course,index) => (
                    <ListItem
                        key={index}
                        title={course.title}
                        onPress={() => this.props.navigation.navigate('Modules' , {'courseId' :course.id})}>
                    </ListItem>
                ))}
            </View>
        )
    }
}
export default Courses