import { Search, View } from "lucide-react-native";
import Colors from "@src/constants/Colors";
import Layout from "@src/constants/Layout";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

export const SearchInput = ({ searchQuery, setSearchQuery }: { searchQuery: string, setSearchQuery: React.Dispatch<React.SetStateAction<string>> }) => {
    return <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Busque seu produto aqui..."
          placeholderTextColor={Colors.light.placeholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Search size={20} color={Colors.light.primary} />
        </TouchableOpacity>
      </View>
}

const styles = StyleSheet.create({
    searchContainer: {
    flexDirection: 'row',
    marginHorizontal: Layout.spacing.xl,
    marginVertical: Layout.spacing.md,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: Layout.borderRadius.large,
    backgroundColor: 'white',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: Layout.spacing.md,
    paddingVertical: Layout.spacing.sm,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.light.text,
  },
  searchButton: {
    paddingHorizontal: Layout.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
