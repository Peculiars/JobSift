import { View, Text, SafeAreaView, ScrollView } from "react-native";

import {COLORS, icons, images, SIZES} from '../constants'
import { Stack, useRouter } from "expo-router";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'

const Home = () =>{
    const router = useRouter();
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: ()=>(
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%'/>
                ),
                headerRight: ()=>(
                    <ScreenHeaderBtn iconUrl={icons.profile} dimension='60%'/>
                ),
                headerTitle: ()=>(
                    <View>
                        <Text style={{fontWeight: "900"}}>Job Sift</Text>
                    </View>
                ) 
            }}/>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome/>
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home