# rxn-stylestate
React Native Style with States Utility (for React Native, React Native Web and Expo)


## index.tsx
```tsx
import React from 'react';

const App = () => {
  return <View><Text style={textStyle}>Hello World</Text></View>
}
```

### styles.ts
```ts
  const textStyle = createStyleState<StyleText>(()=>{
    return {}
  });
  
  const textStyle2 = createStyleStateObject<{wrapper: ViewStyle, title: StyleText, content: <StyleText, {span: StyleText}>}>(()=>{
    return {
      wrapper: {},
      title: {},
      content: {
        color: 'white',
        span: {
          color: 'cyan'
        }
    }}
  });
```
