import React,{Component} from 'react'
import {View} from 'react-native'
import {ListItem} from 'react-native-elements'

class Modules extends Component{

    static navigationOptions = {
        title:'Modules'
    }

    constructor(props){
        super(props)
        const courseId = this.props.navigation.getParam('courseId' , '0');
        fetch('https://web-dev-summer-react-native.herokuapp.com/api/course/' + courseId + '/module')
            .then(response => response.json())
            .then(modules => {
                this.setState({moduleList : modules})
            })
        this.state= {moduleList :[],
            courseId:courseId
        }
    }

    render(){

        return(
            <View>
                {this.state.moduleList.map((module,index) => (
                    <ListItem
                        key={index}
                        title = {module.title}
                        onPress={() => this.props.navigation.navigate('Lessons' , {'courseId' :  this.state.courseId,'moduleId' : module.id})}>
                    </ListItem>
                ))}
            </View>
        )
    }
}
export default Modules

