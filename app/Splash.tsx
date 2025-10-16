import { View, Image, ActivityIndicator } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Splash() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/RoleSection");
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Image
                source={require("../assets/images/logo.png")}
                className="mb-5 w-52 h-72"
                resizeMode="contain"
            />
            <ActivityIndicator size="large" color="#009688" className="mt-5" />
        </View>
    );
}
