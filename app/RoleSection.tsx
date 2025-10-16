import {View, Text, TouchableOpacity} from "react-native";
import { useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {useRouter} from "expo-router";

export default function RoleSelection({ navigation }: any) {
    const router = useRouter();
    const [selected, setSelected] = useState("driver");
    const roles = [
        {
            id: "driver",
            title: "راننده",
            desc: "رانندگان در اپیکیشن بارکده میتوانند بارهای مختلف را در کمترین زمان جستجو و پیدا کنند",
        },
        {
            id: "loader",
            title: "باربری",
            desc: "باربری ها در اپیکیشن بارکده میتوانند صفحه ای شخصی خودشون را داشته و اعلام بارها را به تمامی رانندگان معرفی و در کمترین زمان بارها را حمل کنند.",
        },
        {
            id: "mechanic",
            title: "متصدی",
            desc: " صاحبین بار نیز خود می‌توانند بارها را با کمترین هزینه بارگیری کرده و خود یک اعلام کننده بار باشند.",
        },
        {
            id: "owner",
            title: "صاحبان بار",
            desc: "صاحبان بار می‌توانند درخواست بارها را به راحتی در اپلیکیشن ثبت کرده و راننده خود را اعلام کنند.",
        },
    ];

    return (
        <SafeAreaView className="flex-1 bg-white p-5">
            <Text className="text-right text-lg font-bold text-gray-800 mb-8">
                نقش خود را انتخاب کنید
            </Text>

            {roles.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => setSelected(item.id)}
                    className={`border rounded-2xl p-4 mb-8 ${
                        selected === item.id
                            ? "border-primary bg-emerald-50"
                            : "border-gray-300"
                    }`}
                >
                    <View className="flex-row-reverse items-center">
                        <View
                            className={`w-4 h-4 rounded-full mr-2 border ${
                                selected === item.id
                                    ? "bg-primary border-primary"
                                    : "border-gray-400"
                            }`}
                        />
                        <Text className="text-gray-800 font-semibold pr-2">{item.title}</Text>
                    </View>
                    <Text className="text-gray-500 text-sm mt-1 ">{item.desc}</Text>
                </TouchableOpacity>
            ))}

            <TouchableOpacity
                className="bg-primary py-3 rounded-xl mt-5"
                onPress={() => router.push("/Register")} // navigate to /register page
            >
                <Text className="text-white text-center font-semibold">بعدی</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
