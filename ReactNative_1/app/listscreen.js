// import React, {Component} from 'react';
//
// class MainScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Welcome',
//     };
//     render() {
//         const { navigate } = this.props.navigation;
//         return (
//             <Button
//                 title="Go to Jane's profile"
//                 onPress={() =>
//                     navigate('Profile', { name: 'Jane' })
//                 }
//             />
//         );
//     }
// }
//
// class ProfileScreen extends React.Component {
//     static navigationOptions = ({navigation}) => ({
//         title: navigation.state.params.name,
//     });
//     render() {
//         const { goBack } = this.props.navigation;
//         return (
//             <Button
//                 title="Go back"
//                 onPress={() => goBack()}
//             />
//         );
//     }
// }