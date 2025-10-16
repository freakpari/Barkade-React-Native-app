import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RoleSelection({ navigation }: any) {
    const [selected, setSelected] = useState("driver");
    const roles = [
        {
            id: "driver",
            title: "راننده",
            desc: "رانندگان در اپلیکیشن بارکده می‌توانند بارهای مختلف را در کمترین زمان جستجو و پیدا کنند.",
        },
        {
            id: "loader",
            title: "باربری",
            desc: "باربری‌ها در اپلیکیشن بارکده می‌توانند صفحه‌ای اختصاصی برای انجام بارهای رانندگان در شهر خود داشته باشند.",
        },
        {
            id: "mechanic",
            title: "متخصص",
            desc: "متخصصان در اپلیکیشن بارکده به راحتی می‌توانند تخصص خود را معرفی کرده و به رانندگان خدمت‌رسانی کنند.",
        },
        {
            id: "owner",
            title: "صاحبان بار",
            desc: "صاحبان بار می‌توانند درخواست بارها را به راحتی در اپلیکیشن ثبت کرده و راننده خود را اعلام کنند.",
        },
    ];

    return (
        <SafeAreaView className="flex-1 bg-white p-5">
            <Text className="text-right text-lg font-bold text-gray-800 mb-5">
                نقش خود را انتخاب کنید
            </Text>

            {roles.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => setSelected(item.id)}
                    className={`border rounded-2xl p-4 mb-3 ${
                        selected === item.id
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-300"
                    }`}
                >
                    <View className="flex-row items-center">
                        <View
                            className={`w-4 h-4 rounded-full mr-2 border ${
                                selected === item.id
                                    ? "bg-emerald-500 border-emerald-500"
                                    : "border-gray-400"
                            }`}
                        />
                        <Text className="text-gray-800 font-semibold">{item.title}</Text>
                    </View>
                    <Text className="text-gray-500 text-sm mt-1">{item.desc}</Text>
                </TouchableOpacity>
            ))}

            <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                className="bg-emerald-500 py-3 rounded-xl mt-5"
            >
                <Text className="text-white text-center font-semibold">بعدی</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
