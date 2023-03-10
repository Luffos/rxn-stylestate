<a href="#" align="center">
  <img src="https://user-images.githubusercontent.com/28831375/215550407-250d4fbe-5a62-49ee-b6c4-bb733136960a.png">
</a>
</br></br>
<p align="center">
  <img height="22px" alt="GitHub" src="https://img.shields.io/github/license/Luffos/rxn-stylestate?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub issues" src="https://img.shields.io/github/issues-raw/luffos/rxn-stylestate?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/luffos/rxn-stylestate?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/luffos/rxn-stylestate/main?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/luffos/rxn-stylestate?style=for-the-badge">
</p>

---------------------------------------------

## Install

⚠️ This library is extremely simple (one line), if you prefer you can just copy the contents of [src/index.ts](https://github.com/Luffos/rxn-stylestate/blob/main/src/index.ts) and use it directly in your project without downloads. The only function of this library is to make it possible to use React states together with styles without having to call the StyleSheet.create function, making the code slightly simpler.

Using NPM
```sh
npm install rxn-stylestate
```

Using Yarn
```sh
yarn add rxn-stylestate
```
🌐 Using this module for Web?<br/>Don't forget to setup [react-native-web](https://github.com/necolas/react-native-web)

## Usage 

### index.tsx
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

export const myView = createStyle(() => {
  return {
    wrapper: <ViewStyle>{ backgroundColor: 'black', alignSelf: 'flex-start', borderRadius: 8, padding: 20 },
    title: {
      0: <TextStyle>{ color: 'white' }, //0 is a fictitious name for "this", but you can use it as you wish
      span: <TextStyle>{
        color: 'cyan',
        fontSize: 20
      },
    },
  };
});

```
