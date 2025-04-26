import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Image,
  Box,
  VStack,
  Text,
  HStack,
  ScrollView,
} from "@gluestack-ui/themed";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabsParams, RootStackParams } from "../../navigations/config";
import { excercises, Exercise } from "../../db/practice";

type PracticeCardProps = {
  index: number;
} & Exercise;

const PracticeCard = ({
  title,
  description,
  image,
  index,
}: PracticeCardProps) => {
  return (
    <VStack alignItems="center" gap={"$2"} softShadow="1" bg="white" p="$2">
      <Box borderWidth={1} borderColor="$coolGray100" rounded={"$2xl"}>
        <Image
          w={"$full"}
          aspectRatio={16 / 9}
          resizeMode="center"
          alt="img-practice"
          source={{ uri: image as string }}
        />
      </Box>
      <VStack gap="$1">
        <Text
          fontWeight="$semibold"
          fontSize={"$sm"}
          color="$coolGray800"
          numberOfLines={1}
        >
          Bài {index + 1}: {title}
        </Text>
        <Text
          fontWeight="$normal"
          fontSize={"$xs"}
          color="$coolGray500"
          numberOfLines={2}
        >
          {description}
        </Text>
      </VStack>
    </VStack>
  );
};

type Props = {} & NativeStackScreenProps<
  RootStackParams & BottomTabsParams,
  "Detail"
>;

const Practice = ({ navigation }: Props) => {
  const onPracticeDetail = (item: Exercise, index: number) => {
    navigation.navigate("PracticeDetail", {
      ...item,
      index,
    });
  };
  return (
    <VStack flex={1} justifyContent="space-between" bg="$white">
      <ScrollView bg="$white" flex={1} showsVerticalScrollIndicator={false}>
        <VStack justifyContent="space-between" m="$8" space="lg">
          {excercises.map((exercise, index) => (
            <Box w="$full" key={`${exercise.title}-${index}`}>
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => onPracticeDetail(exercise, index)}
              >
                <PracticeCard {...exercise} index={index} />
              </TouchableOpacity>
            </Box>
          ))}
        </VStack>
      </ScrollView>
    </VStack>
  );
};
export default Practice;

const styles = StyleSheet.create({});
