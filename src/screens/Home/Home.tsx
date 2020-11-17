import React from 'react';
import { View, Text, Image, Alert, ScrollView } from 'react-native';
import { NeuView, NeuButton } from "neumorphism-ui";

const component: React.FC = () => {

	return (
		<ScrollView style={{flex: 1,  backgroundColor:'#e0e5ec'}}>
			<Text>Home</Text>
			<NeuView pressed={false} containerStyle={{ marginTop: 30 }} >
                <Text style={{ opacity: 0.4 }}>UNPRESSED</Text>
              </NeuView>

              {/*NeuView pressed with viewStyles*/}
              <NeuView pressed={true}  style={{ height: 100, width: 100, borderRadius: 50 }}>
                <Text style={{ opacity: 0.4 }}>PRESSED</Text>
              </NeuView>

              {/*NeuView pressed with contentStyles*/}
              <NeuView pressed={true}  style={{ height: 400,}} contentStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ opacity: 0.4 }}>PRESSED</Text>
			</NeuView>
			
			            <NeuButton style={{ height: 150, width: 150, borderRadius: 75 }}
                onPress={() => {
                  Alert.alert("I was pressed")
                }}
                onUnpress={() => {
                  Alert.alert("I was unpressed")
                }}
              >
                <Text style={{ opacity: 0.4, textAlign: 'center' }}>NeuButton with listeners</Text>
            </NeuButton>

            {/* Rectangular NeuButton that doesn't stay pressed once clicked */}
            <NeuButton style={{ height: 70, width: 120, borderRadius: 50 }} noPressedState={true}
                onPress={() => {
                  Alert.alert("I was pressed")
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '60%' }}>
                  <Image
                    resizeMode="contain"
                    style={{ height: 30, width: 30 }}
                    source={{ uri: "https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png" }} />
                  <Text style={{ fontWeight: 'bold', opacity: 0.4 }}>LIKE</Text>
                </View>
            </NeuButton>

		</ScrollView>
	)

}

export default component;