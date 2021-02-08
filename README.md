# GUESS NUMBER GAME

- Making dynamic styling/Adding custom styling

  Below we are spreading the styles of Card component and then we can edit these edits by passing some styles as params, which will be added through spread operator

```
    const Card = (props) => (
    <View styles={{ ...styles.card, ...props.styles }}>{props.children}</View>
    );

    const styles = StyleSheet.create({
    card: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowRadius: 0.26,
        elevation: 6,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
    },
    });

```

- Taking all the props and spreading it

```
const Input = (props) => (
  <TextInput {...props} style={{ ...styles.input, ...props.styles }} />
);


```

## LOADING FONTS

- expo install expo-font
- import { useFonts } from "expo-font";

```
 const [loaded] = useFonts({
  "OpenSans-Regular": require("./assets/Fonts/OpenSans-Regular.ttf"),
  "OpenSans-Bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
  });

   headerText: {
    color: "black",
    fontSize: 28,
    fontFamily: "OpenSans-Bold",
  },
```

## APP LOADING

- This is used to load async data before the app loads
