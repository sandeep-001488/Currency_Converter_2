# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
```
let url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

## input  box
function InputBox({
    label,
    className="",
}){
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex`}>
            <div className="w-1/2">
                <label className='text-black/40 mb-2 inline-block'>label</label>
                <input 
                className='outline-none w-full
                bg-transparent py-1.5'
                type="number" 
                placeholder='Amount '
                />
            </div>
            <div className="w-1/2 flex flex-wrap 
            justify-end text-right
            ">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
                    <option value="usd">usd</option>
                </select>
            </div>
        </div>
    )
}
