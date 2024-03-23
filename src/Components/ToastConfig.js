import { BaseToast, ErrorToast } from 'react-native-toast-message';
export const toastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: "#2976c3" }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontFamily: "Poppins",
                fontSize: 18,
                color: "#2976c3"
            }}
        />
    ),
    error: (props) => (
        <ErrorToast
            {...props}
            style={{ borderLeftColor: "red" }}
            text1Style={{
                fontFamily: "Poppins",
                fontSize: 18,
                color: "red"
            }}
        />
    )
};