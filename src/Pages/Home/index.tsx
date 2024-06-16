import { Image, ScrollView, Text, View, FlatList } from "react-native";
import Logo from "../../assets/images/logo.png";
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { styles } from "./stylesHome";
import foto from "../../assets/images/foto.png";
import foto2 from "../../assets/images/foto2.png";
import foto3 from "../../assets/images/foto3.png";
import foto4 from "../../assets/images/foto4.png";

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
];


export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Logo /> */}
        <Text>Instagram</Text>
        <View style={styles.headerOptions}>
        <Feather name="heart" size={24} color="#000" />
        <Fontisto name="messenger" size={24} color=" #000" />
        </View>
      </View>

      <View style={styles.stories}>
      <FlatList
          data={DATA}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <View style={styles.storesCard} key={item.item}>
              <Image source={item.item.pathURL}/>
            </View>
          )}
      />
      </View>
    </View>
  );
}
