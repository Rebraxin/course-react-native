import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { Container } from "./components/ui/Container";
import { colors } from "./constants/colors";
import Categories from "./pages/Categories";
import MealDetails from "./pages/MealDetails";
import MealsOverview from "./pages/MealsOverview";
import Favorites from "./pages/Favorites";
import { Ionicons } from "@expo/vector-icons";
import { store } from "./store/redux/store";
// import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Drawernavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.DARK_BROWN },
        headerTintColor: colors.WHITE,
        sceneContainerStyle: { backgroundColor: colors.SCENE_BACKGROUND },
        drawerContentStyle: { backgroundColor: colors.DARK_BROWN },
        drawerInactiveTintColor: colors.WHITE,
        drawerActiveTintColor: colors.DARK_BROWN,
        drawerActiveBackgroundColor: colors.LIGHT_BROWN,
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={Categories}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={Favorites}
        options={{
          title: "My Favorites Meals",
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <Container>
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
                name='Drawer'
                component={Drawernavigator}
                options={{ headerShown: false }}
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
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}
