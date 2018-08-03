import React,{Component} from 'react'
import {View,ScrollView} from 'react-native'
import {Text,FormInput,Button,ListItem,Icon} from 'react-native-elements'
import AssignmentService from '../Services/AssignmentService'

class Widgets extends Component {
    static navigationOptions = {
        title: 'Widgets'
    }

    constructor(props) {
        super(props)
        this.assignmentService = AssignmentService.instance;
        this.assignmentListFromTopic = this.findAssignmentListFromTopic.bind(this);

        this.state = {
            topicId: '',
            assignmentLists:[]
        }
    }

    componentDidMount(){
        const topicId = this.props.navigation.getParam('topicId', '0');
        this.setState({topicId:topicId})
        this.findAssignmentListFromTopic(topicId)
    }

    findAssignmentListFromTopic = (topicId) => (
        this.assignmentService.getAssignmentListFromTopicId(topicId)
            .then(assignmentList => {
                this.setState({
                    assignmentLists: assignmentList
                })
            })
    );

    render(){
        return(
            <ScrollView>
            <View>
                {this.state.assignmentLists.map((assignment, index) => (

                    <ListItem
                        key={index}
                        leftIcon={<Icon name='subject'/>}
                        rightIcon={<Icon name='delete'/>}
                        title={assignment.title}

                    >

                    </ListItem>


                ))
                }
            </View>
            </ScrollView>
        )
    }
}
export default Widgets