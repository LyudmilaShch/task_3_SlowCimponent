// export const SlowComponent = () => {
//   console.log('SlowComponent re-render...');
//
//   let now = performance.now();
//
//   while (performance.now() - now < 1000) {
//     // Artificial delay -- do nothing for 100ms
//   }
//
//   return <p>I am a very slow component tree.</p>;
// };
//


//var2
//
// import {memo} from "react";
//
// export const SlowComponent = memo( () => {
//   console.log('SlowComponent re-render...');
//
//   let now = performance.now();
//
//   while (performance.now() - now < 1000) {
//     // Artificial delay -- do nothing for 100ms
//   }
//
//   return <p>I am a very slow component tree.</p>;
// })

//var 4
import {useMemo} from "react";

export const SlowComponent = () => {
    console.log('SlowComponent re-render...');
    useMemo(() => {
        let now = performance.now();

        while (performance.now() - now < 1000) {
            // Artificial delay -- do nothing for 100ms
        }
    }, [])


    return <p>I am a very slow component tree.</p>;
};
