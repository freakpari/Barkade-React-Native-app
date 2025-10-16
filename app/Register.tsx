import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Register() {
    return (
        <SafeAreaView className="flex-1 bg-white p-5 ">
            <View className="items-center mb-8 ">
                <View className="border-2 border-primary rounded-full p-4 mt-8 ">
                    <Ionicons name="call-outline" size={60} color="#009688" />
                </View>
                <Text className="text-lg font-bold text-gray-800 mt-8">
                    ثبت نام در بارکده
                </Text>
                <Text className="text-gray-500 mt-4 text-center text-wrap">
                    برای ورود به برنامه شماره خود را وارد کنید و کد اعتبار سنجی را دریافت کنید.
                </Text>
            </View>

            <View className="flex-row items-center border border-gray-300 rounded-xl px-3 py-2 mb-4 mt-4 ">
                <Ionicons name="call" size={20} color="#009688" />
                <TextInput
                    placeholder="شماره همراه خود را وارد کنید"
                    keyboardType="phone-pad"
                    className="flex-1 text-right text-gray-700 mr-2"
                />
            </View>

            <TouchableOpacity className="bg-primary py-3 rounded-xl h-14">
                <Text className="text-white text-center font-semibold text-base">
                    ارسال
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
