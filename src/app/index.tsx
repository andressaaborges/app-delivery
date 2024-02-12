import { Header } from "@/components/header";
import { View } from "react-native";


export default function Home() {
    return (
        <View className="pt-8 flex-1">
            <Header title="Faça seu Pedido" cartQuantityItems={4} />
        </View>
    )
}
