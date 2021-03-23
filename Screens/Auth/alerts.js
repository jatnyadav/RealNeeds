import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image style={styles.ImageStyle}
        source={require('../../assets/alert.png')} //Change your icon image here
            />
            <Text style={styles.modalText}>Password Changed!</Text>
            <Text style={styles.modalText2}>Your Password has been updated.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Password Change</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#037ECF",
    width:145,
    height:48,
    borderRadius:8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    alignSelf:'center',
    fontSize:16
  },
  modalText: { 
    textAlign: "center",
    color:'#037ECF',
    fontSize:30
  },
  modalText2: {
    marginBottom: 15,
    textAlign: "center",
    color:'#037ECF',
    fontSize:20
  },
  ImageStyle:{
    height:150,
    width:150
  }
});

export default App;