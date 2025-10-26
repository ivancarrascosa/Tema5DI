import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text, View, StyleSheet } from "react-native";
import { container } from "../../Core/Container";
import { TYPES } from "../../Core/Types";
import { Persona } from "../../Domain/Entities/Persona";
import { PeopleListViewModel } from "../ViewModels/PeopleListViewModel";

export default function PeopleList() {
    const [viewModel] = useState(() => container.get<PeopleListViewModel>(TYPES.PeopleListViewModel));
    const [personas, setPersonas] = useState<Persona[]>([]);

    useEffect(() => {
        // Cargar las personas del ViewModel
        setPersonas(viewModel.personasList);
    }, [viewModel]);

    const renderItem = ({ item }: { item: Persona }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>
                {item.nombre} {item.apellidos}
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Listado de Personas</Text>
            <FlatList
                data={personas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={() => (
                    <Text style={styles.textoVacio}>No hay personas registradas</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 16,
        paddingTop: 30,
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
        color: "#333",
    },
    item: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    itemText: {
        fontSize: 16,
        color: "#333",
    },
    separator: {
        height: 10,
    },
    textoVacio: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
        color: "#888",
    },
});