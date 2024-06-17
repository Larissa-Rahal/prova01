import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo:{
    tintColor: 'black',
    height: "70%" ,
    width: '36%'
  },
  header: {
    width: "100%",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 50,
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
  },
  
  stories: {
    width: "100%",
    paddingLeft: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  storesCard: {
    alignContent: "center",
    borderWidth: 2,
    borderColor: "#F7B55A",
    borderRadius: 50,
    marginRight: 14,
    padding:2
  },
  storesCardImage: {
    width: 64,
    height: 64,
  },

  content: {
    width: "100%",
    marginTop: 15,
    marginBottom: 10,
  },
  contentHeader: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#F7B55A",
  },
  contentHeaderLeftText: {
    color: "#000",
  },
  contentImage: {
    width: "100%",
    height: 355,
  },

  
  contentFooter: {},
  contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentFooterOptionsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contentFooterText: {
    color: "Black",
  },
  contentFooterTexts: {
    paddingLeft: 20,
    gap: 10,
  },
  contentFooterText1: {
    fontSize: 14,
  },

  contentFooterText2: {
    fontSize: 14,
  },
  contentFooterText3: {
    fontSize: 10,
  },
  
});