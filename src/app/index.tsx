import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { View, Text, FlatList, SectionList } from "react-native";
import { CATEGORIES, MENU } from "@/utils/data/products";
import { useState, useRef } from "react";
import { Product } from "@/components/product";
import { Link } from "expo-router";

export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0])
    const sectionListRef = useRef<SectionList>(null)

    function handleCategorySelect(SelectedCategory: string) {
        setCategory(SelectedCategory)
        const sectionIndex = CATEGORIES.findIndex((category) => category === SelectedCategory)

        if (sectionListRef) {
            sectionListRef.current?.scrollToLocation({
                animated: true,
                sectionIndex,
                itemIndex: 0,
            })
        }
    }

    return (
        <View className="pt-8 flex-1">
            <Header title="Faça seu Pedido" cartQuantityItems={4} />
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (<CategoryButton title={item} isSelected={item === category} onPress={() => handleCategorySelect(item)} />)}
                horizontal
                className="max-h-10 mt-5"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
            />

            <SectionList
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={(item) => item.id}
                stickySectionHeadersEnabled={false}
                renderItem={({ item }) => (
                    <Link href={`/product/${item.id}`} asChild>
                        <Product data={item} />
                    </Link>)}
                renderSectionHeader={({ section: { title } }) => (
                    <Text className="text-xl text-white font-heading mt-8 mb-3">
                        {title}
                    </Text>
                )}
                className="flex-1 p-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    )
}
