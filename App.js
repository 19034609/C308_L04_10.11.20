/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import moment from 'moment-timezone';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Welcome = () => {
  return <Text>Welcome to C308 Web Frameworks!</Text>;
}

class MyFirstApp extends React.Component {
  render(): React$Node {
    return <Text>My first React Native app</Text>;
  }
}

const SemModule = (props) => {
  return <Text>{props.day} - {props.code}</Text>;
};

class Eats extends React.Component {
  render() {
    return <Text>{this.props.name} {'\n'} {this.props.location} {'\n'}</Text>;
  }
}

class Clock extends React.Component {
  render() {
    return <Text>{this.props.location}</Text>;
  }
}

const WorldClock = (props) => {
  const time = moment().tz(props.name).format('HH:mm');
  const zone = moment().tz(props.name).format('Z');
  return (
    <Text>
      {time} {zone}
    </Text>
  );
};

const App: () => React$Node = () => {
  console.log("I'm a console statement!");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome/>
              <MyFirstApp/>

              <Text>{'\n'}</Text>

              <Text>My modules this semester:</Text>
              <SemModule day="Monday" code="C273"/>
              <SemModule day="Tuesday" code="C2308"/>
              <SemModule day="Thursday" code="C348"/>

              <Text>{'\n'}</Text>

              <Text>Recommended Eats @ RP</Text>
              <Eats name="Sweet Tooth Waffles" location="W6 Level 1, E-canteen"/>
              <Eats name="Crowded Bowl" location="W4/w6 Lawn Canteen"/>
              <Eats name="Western Cuisine @ Koufu" location="E1 Level 1, Kofu"/>
              <Eats name="Ayam Penyet" location="W4/W6 Lawn Canteen"/>

              <Text>{'\n'}</Text>

              <Text>World Clock</Text>
              <Clock location="Asia/Singapore"/><WorldClock name="Asia/Singapore"/><Text>{'\n'}</Text>
              <Clock location="Europe/London"/><WorldClock name="Europe/London"/><Text>{'\n'}</Text>
              <Clock location="America/New York"/><WorldClock name="America/New_York"/><Text>{'\n'}</Text>
              <Clock location="Europe/Oslo"/><WorldClock name="Europe/Oslo"/><Text>{'\n'}</Text>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
