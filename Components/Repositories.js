import React, { Component } from 'react';

import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import Badge from './badge';
import Separator from './Helpers/Separator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

class Repositories extends Component {
  openPage(url) {
    console.log(`the url is ${url}`);
  }
  render() {
    const repos = this.props.repos;
    const list = repos.map((item, index) => {
      const desc = item.description? <Text style={styles.description}> {item.description} </Text> : <View/>;
      return (
        <View key={index}>
          <View style={styles.rowContainer} >
            <TouchableHighlight
              onPress={this.openPage.bind(this, item.html_url)}
              underlayColor='transparent' >
              <Text style={styles.name}>{item.name}</Text>
              </TouchableHighlight>
              <Text style={styles.stars}> Stars: {item.stargazers_count}</Text>
              {desc}
          </View>
          <Separator />
        </View>
      )
    });
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
}

Repositories.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  repos: React.PropTypes.array.isRequired
}

module.exports = Repositories;