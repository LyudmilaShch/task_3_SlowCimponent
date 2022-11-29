import {ChangeEvent, memo, useCallback, useState} from 'react';
import {SlowComponent} from 'examples/slowComponent/SlowComponent';

//var 1
// export const Example_4 = memo(() => {
//     return (
//         <div>
//             <div>Lags when change value</div>
//             <Input/>
//             <SlowComponent/>
//         </div>
//     );
// })
//
// const Input = () => {
//     const [value, setValue] = useState('');
//
//     const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value), [value]);
//     return (
//         <input type="text" value={value} onChange={onChange}/>
//     )
// }


//var 2
// export const Example_4 = () => {
//     const [value, setValue] = useState('');
//
//     const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//
//     return (
//         <div>
//             <div>Lags when change value</div>
//             <input type="text" value={value} onChange={onChange} />
//             <SlowComponent />
//         </div>
//     );
// };



// //var 3
// type Example4Props = {
//     children: ReactNode
// }
// export const Example_4: React.FC<Example4Props> = ({children}) => {
//     const [value, setValue] = useState('');
//
//     const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//
//     return (
//         <div>
//             <div>Lags when change value</div>
//             <input type="text" value={value} onChange={onChange} />
//             {children}
//         </div>
//     );
// };

//var 4
export const Example_4 = () => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <div>
            <div>Lags when change value</div>
            <input type="text" value={value} onChange={onChange} />
            <SlowComponent />
        </div>
    );
};