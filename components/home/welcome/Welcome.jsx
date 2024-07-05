import {useState} from 'react'
import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import {useRouter} from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';


const Welcome = () => {
  const router = useRouter();
  const jobTypes = ["Full-tiime", "Part-time", "Contract"];
  const [activeJobType, setActiveJobType] = useState("Full-time")
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Peculiars</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} placeholderTextColor='gray' value='' onChange={()=>{}} placeholder='What are you looking for?'/>
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)} 
              onPress={()=>{setActiveJobType(item); 
              router.push(`/search/${item}`)}}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome