import React,{Component} from 'react'
import {View} from 'react-native'
import {Text} from 'react-native-elements'

class Assignment extends Component{

    static navigationOptions={
        title:'Assignment'
    }

    constructor(props){
        super(props)
        const topicId = this.props.navigation.getParam('topicId','0')
        fetch('')
        this.state={
            number:number,
            title:title,
            points:po,
            description:description
        }
    }

    render(){
        return(
            <View>
                <Text>

                </Text>
            </View>
        )
    }
}
