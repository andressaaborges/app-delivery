import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { View, FlatList } from "react-native";
import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";

export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0])

    function handleCategorySelect(SelectedCategory: string) {
        setCategory(SelectedCategory)
    }

    return (
        <View className="pt-8 flex-1">
            <Header title="Faça seu Pedido" cartQuantityItems={4} />
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (<CategoryButton title={item} isSelected={item === category} onPress={() => handleCategorySelect(item)} />)}
                horizontal
                className="mah-h-10 mt-5"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
            />
        </View>
    )
}
