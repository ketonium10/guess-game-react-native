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
