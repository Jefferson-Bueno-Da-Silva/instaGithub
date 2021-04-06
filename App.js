import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function InstaGitHubHeader(){
  return(
    <View
      style={{
        backgroundColor: 'black',
        height: 50,
        paddingLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        
        borderWidth: 1,
        borderBottomColorColor: 'white',
        borderStyle: 'dashed'

      }}
      >
        <TouchableOpacity>
          <Text style={{
            color: 'white',
            fontSize: 35,
            paddingRight: '20%'
          }}>
            𝓲𝓷𝓼𝓽𝓪𝓖𝓲𝓽𝓱𝓾𝓫
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <AntDesign 
          name="plussquareo" 
          size={24} 
          color="white" 
          style={{
            paddingLeft: "5%"
          }}
        />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons 
            name="ios-heart-outline" 
            size={24} 
            color="white"
            style={{
              paddingLeft: "5%"
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons
            name="paper-plane-outline"
            size={24}
            color="white"
            style={{
              paddingLeft: "5%"
            }}
          />
        </TouchableOpacity>
    </View>
  );
}

function InstaGitHubCard( { githubUser } ){
  const [ liked, setLikeState ] = useState(false);

  return(
    <View>
      {/* InstaCardHeader */}
      <View 
        style={{
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
      }} >
        
        <Image 
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 15,
          }}
          source={{
            uri: `https://github.com/${githubUser}.png`
          }}
        />
        <Text style={{color: 'white'}}>{githubUser}</Text>

      </View>
      {/* InstaCardHeader */}

      {/* InstaCardImage */}
      <Image 
        style={{
          width: '100%',
          height: 340,
        }}
        source={{
          uri: `https://github.com/${githubUser}.png`
        }}
      />
      {/* InstaCardImage */}

      {/* Footer */}
      <View style={{
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
      }}>
        <TouchableOpacity onPress={ () => setLikeState(!liked) }>
          { liked && <Ionicons name="ios-heart" size={24} color="red" /> }
          { !liked && <Ionicons name="ios-heart-outline" size={24} color="white" />  }
        </TouchableOpacity>
      </View>
      {/* Footer */}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <InstaGitHubHeader/>
      <ScrollView>
        
        {
          [
            'Jefferson-Bueno-Da-Silva',
            'emilyemy', 
            'omariosouto',
            'fabiomedeirosf'
          ].map( (githubUser) =>
            <InstaGitHubCard key={githubUser} githubUser={githubUser} />
          )
        }
      </ScrollView>
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Platform.OS === 'android' ? 25 : 0
},
});
