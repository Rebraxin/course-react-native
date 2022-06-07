import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import { Container } from "./components/ui/Container";
import { colors } from "./constants/colors";
import Categories from "./pages/Categories";
import MealDetails from "./pages/MealDetails";
import MealsOverview from "./pages/MealsOverview";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Container>
      <StatusBar style='light' />
      {/* Work as a context with hooks (expect : useNavigation()) */}
      <NavigationContainer>
        {/* To set a diferent initial route you have to use : initialRouteName="" */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: colors.WHITE,
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* By default, the initial route will be the first child of Stack */}
          <Stack.Screen
            name='MealsCategories'
            component={Categories}
            options={{ title: "All Categories" }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverview}
            // Possible way to dynamic navigation
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name='MealDetails'
            component={MealDetails}
            // options={{
            //   headerRight: () => {
            //     return <Button title='Tap me!' />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  root: {},
});
