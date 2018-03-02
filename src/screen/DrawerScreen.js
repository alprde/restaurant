import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import color from "../assets/colors";
import {connect } from 'react-redux';
import { logOut} from '../store/actions/index';


class DrawerScreen extends Component {
    
    state = {
        userInfo : null
    }

    componentWillReceiveProps(next) {
        this.setState({
            userInfo: next.auth.user
        });
    }
    _renderInformation = () => {
        if (this.state.userInfo) {
            return (
                <View style={styles.layerContainer}>
                    <View style={styles.layerWrapper}>
                        <View style={styles.firstLayer}>

                        </View>
                        <View style={styles.secondLayer}>


                        </View>
                        <View style={styles.thirdLayer}>

                        </View>
                        <View style={{ height: 20, width: 20, left: 10, bottom: 37, position: 'absolute', borderRadius: 10, backgroundColor: '#00C22F' }}>

                        </View>
                    </View>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: this.state.userInfo.type === 'fb' ? this.state.userInfo.picture.data.url :  ((this.state.userInfo.type === 'google') ? (this.state.userInfo.photo) : '')} } />

                    <View style={styles.infoContainer}>
                        <View style={{ height: 30, width: 30, left: 20, position: 'absolute', borderRadius: 15, backgroundColor: '#00C22F' }}></View>
                        <Text style={{
                            fontSize: 19,
                            color: '#000'
                        }}>{ this.state.userInfo.name}</Text>
                        <Text> Dhaka, Bangladesh </Text>
                        <View style={{ height: 12, width: 12, right: 20, bottom: 37, position: 'absolute', borderRadius: 6, backgroundColor: '#00C22F' }}>

                        </View>
                    </View>
                </View>
            );
        }
        
    }
    logOutHandler = () => {
        const type = this.state.userInfo.type;
        this.props.log_out_user({ type});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                        {this._renderInformation()}
                    <View>
                </View>
                </View>
                <View style={styles.settingsController}>
                    <TouchableOpacity
                        onPress={() => this.logOutHandler()}
                        style={{ width: '58%'}}  
                    >
                        <View 
                            style={{ width: '100%', height: 45, borderRadius: 5, backgroundColor: '#FF4800', justifyContent: 'center', alignItems: 'center'}}
                        >
                            <Text style={{color: '#fff', fontSize: 19, fontWeight: 'bold'}}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex :1
    },
    profileContainer : {
        flex: 1
    },
    layerContainer : {
        height : 300,
        width :'100%',
        backgroundColor : '#fff',
    },
    layerWrapper : {
        width :'100%',
        height: '100%',
        marginTop: -50
    },
    firstLayer : {
        width: 400,
        height: 400,
        borderRadius: 200,
        backgroundColor: '#00C22F',
        position : 'absolute',
        top: -200,
        left: -70,
        zIndex :2
    },
    secondLayer : {
        width: 440,
        height: 440,
        borderRadius: 220,
        backgroundColor: '#25C93F',
        position: 'absolute',
        top: -200,
        left: -90,
        zIndex: 1        
    },
    thirdLayer : {
        width: 480,
        height: 480,
        borderRadius: 240,
        backgroundColor: '#62D968',
        position: 'absolute',
        top: -200,
        left: -110
    },
    profileImage: { 
        height: 80, 
        width: 80, 
        position: 'absolute', 
        bottom: 100, 
        left: 100, 
        borderRadius: 5 ,
        zIndex: 4
    },
    infoContainer : {
        width: '100%',
        justifyContent: 'center',
        alignItems : 'center',
        marginBottom :5
    },
    settingsController : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps =({auth}) => {
    return {
        auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        log_out_user: ({type}) => dispatch(logOut({type})),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DrawerScreen);