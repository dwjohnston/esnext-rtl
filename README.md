# esnext-rtl

Bizarre TypeScript/RTL/VScode issue. 


As this code currently is, you have a type error in Button.test.tsx: 


```
Argument of type '"aaaa"' is not assignable to parameter of type 'SelectorMatcherOptions | undefined'.ts(2345)
```

if you remove 'ESnext' from the 'lib' folder of the tsconfig, and restart VScode, this will go away. 

