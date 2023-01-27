# rxn-stylestate
React Native Style with States Utility (for React Native, React Native Web and Expo)


## index.tsx
```tsx
import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { myText, myView } from './styles';

function App() {
  const textStyle = myText();
  const viewStyle = myView();

  return (
    <SafeAreaView style={{margin: 20}}>
      <Text style={textStyle}>Hello World</Text>

      <View style={viewStyle.wrapper}>
        <Text style={viewStyle.title[0]}>
          Hello Again <Text style={viewStyle.title.span}>How are You?</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
```

### styles.ts
```ts
import { useState, useEffect } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { createStyle } from 'rxn-stylestate';

export const myText = createStyle<TextStyle>(() => {
  const [colorState, setColorState] = useState('red');

  useEffect(() => {
    const c = setInterval(() => {
      setColorState((prevState) => (prevState == 'red' ? 'blue' : 'red'));
    }, 500);

    return () => clearInterval(c);
  }, []);

  return { color: colorState, fontSize: 30 };
});

export const myView = createStyle<{ wrapper: ViewStyle; title: { 0: TextStyle; span: TextStyle } }>(() => {
  return {
    wrapper: { backgroundColor: 'black', alignSelf: 'flex-start', borderRadius: 8, padding: 20 },
    title: {
      0: { color: 'white' },
      span: {
        color: 'cyan',
        fontSize: 20
      },
    },
  };
});

```
