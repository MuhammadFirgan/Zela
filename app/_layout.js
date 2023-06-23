import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: "Home"
}

export default function HomeLayout() {
    return (
        <Stack initialRouteName="Home">
          <Stack.Screen name="Home" />
        </Stack>
    )
} 