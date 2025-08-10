import Layout from "@src/constants/Layout"
import { Image, StyleSheet, TouchableOpacity } from "react-native"

export default function BackButton({ handleBack }: { handleBack: () => void }) {
    return (
        <TouchableOpacity onPress={handleBack} style={styles.backButtonContainer}>
          <Image
                source={require('@src/assets/backButton.png')}
                style={styles.backButtonImage}
                resizeMode="cover"
          />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButtonContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Layout.spacing.sm,
        },
        backButtonImage: {
        width: 40,
        height: 40,
        },
})
