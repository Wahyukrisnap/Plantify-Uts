import React from "react";
import { View } from "react-native";
import plants from "../../constants/data";
import PlantCard from "../molecules/PlantCard";

export default function PlantList() {
  return (
    <View>
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </View>
  );
}
