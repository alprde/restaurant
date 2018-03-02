import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, } from 'react-native';
import color from "../../../assets/colors";
import ReviewList from './ReviewList';
import { Actions } from 'react-native-router-flux';

class Review extends Component {

    state = {
        reviews : null
    }

    componentWillMount() {
        Actions.refresh({ title: 'Review' });
    }

    componentDidMount() {
        this.setState({
            reviews: this.props.reviews
        })
    }
    _keyExtractor = (item, index) => item;
    _renderReview =() => {
        if (this.state.reviews) {
            return (
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={this.state.reviews}
                    renderItem={({ item }) => (
                        <ReviewList
                            item={item}
                            key={item}
                        />
                    )}
                />
            );
        }
    }
    render() {
        return (
            <View style={styles.container}>
              {this._renderReview()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#eee',

    }
});

export default Review;