import { Image, ScrollView, Text, View, FlatList, SafeAreaView } from "react-native";
import Logo from "../../assets/images/Instagram_Logo.png";
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from "./stylesHome";
import foto from "../../assets/images/foto.png";
import foto2 from "../../assets/images/foto2.png";
import image from "../../assets/images/image.png";
import InstagramMenu from "../../components/menu/menu";

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
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto2,
  },
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
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto2,
  },
];


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={Logo} />
        <View style={styles.headerOptions}>
        <Feather name="heart" size={24} color="#000" />
        <Fontisto name="messenger" size={24} color=" #000" />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
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

      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <View style={styles.contentHeaderLeft}>
            <Image style={styles.contentHeaderLeftImage} source={foto} />
            <Text style= {styles.contentHeaderLeftText}>Loghanne Rahalc</Text>
          </View>
          <Feather name="more-horizontal" size={24} color="black" />
        </View>
        <View>
        <View style={styles.contentImage}>
          <Image source={image}/>
        </View>
      </View>
      </View>

      <View style={styles.contentFooter}>
        <View style={styles.contentFooterOptions}>
          <View style={styles.contentFooterOptionsButton}>
          <Feather name="heart" size={24} color="#000" />
          <FontAwesome6 name="comment" size={24} color="black" />
          <Fontisto name="share-a" size={24} color="black" />
          </View>
          <Feather name="bookmark" size={24} color="black" />
        </View>

        <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}>
                clicslab How IOT is changing the world?
              </Text>
              <Text style={[styles.contentFooterText2, styles.contentFooterText]}>
                View all 3 comments
              </Text>
              <Text style={[styles.contentFooterText3, styles.contentFooterText]}>  3 hours ago See Translation</Text>
        </View>
      </View>

      <View style={styles.contentFooter}>
        <View style={styles.contentFooterOptions}>
          <View style={styles.contentFooterOptionsButton}>
          <Feather name="heart" size={24} color="#000" />
          <FontAwesome6 name="comment" size={24} color="black" />
          <Fontisto name="share-a" size={24} color="black" />
          </View>
          <Feather name="bookmark" size={24} color="black" />
        </View>

        <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}>
                clicslab How IOT is changing the world?
              </Text>
              <Text style={[styles.contentFooterText2, styles.contentFooterText]}>
                View all 3 comments
              </Text>
              <Text style={[styles.contentFooterText3, styles.contentFooterText]}>  3 hours ago See Translation</Text>
        </View>
      </View>

    </ScrollView>
    <InstagramMenu />
    </SafeAreaView>
  )
};
