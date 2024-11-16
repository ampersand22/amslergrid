import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

export default function AmslerGridScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Amsler Grid</Text>
      <Text style={styles.subheader}>Kansal Eye, PLLC</Text>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("mailto:receptionist.kansaleye@gmail.com")
        }
      >
        <Text style={styles.emailtop}>https://www.optassociates.com</Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/amslergrid.png")}
        style={styles.gridImage}
      />

      <Text style={styles.instructions}>
        Focus on the center dot and note any distortions, wavy lines, missing
        areas, or blurriness. Repeat for each eye separately.
      </Text>

      <Text style={styles.alert}>
        If you're experiencing symptoms, please call your doctor.
      </Text>

      <Text style={styles.sectionHeader}>What is Macular Degeneration?</Text>
      <Text style={styles.info}>
        Macular degeneration is an eye condition that primarily affects the
        macula, the central portion of the retina, and can lead to vision loss.
        It is often age-related (AMD) and is a leading cause of blindness in
        older adults.
      </Text>

      <Text style={styles.sectionHeader}>
        Symptoms of Macular Degeneration:
      </Text>
      <Text style={styles.info}>
        - Blurred or distorted central vision{"\n"}- Difficulty recognizing
        faces{"\n"}- A dark or empty area in the center of your vision{"\n"}-
        Decreased ability to see colors vividly
      </Text>

      <Text style={styles.sectionHeader}>Helpful Resources:</Text>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://www.macular.org")}
      >
        <Text style={styles.link}>
          Macular Degeneration Foundation: www.macular.org
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://www.aao.org/eye-health/diseases/amd-macular-degeneration"
          )
        }
      >
        <Text style={styles.link}>
          American Academy of Ophthalmology: www.aao.org
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/macular-degeneration"
          )
        }
      >
        <Text style={styles.link}>National Eye Institute: www.nei.nih.gov</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 36,
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  emailtop: {
    fontSize: 16,
    marginVertical: 5,
    color: "blue",
    textDecorationLine: "underline",
  },
  gridImage: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  instructions: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  alert: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  sectionHeader: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  info: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 24,
  },
  link: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 10,
    textAlign: "center",
  },
});
