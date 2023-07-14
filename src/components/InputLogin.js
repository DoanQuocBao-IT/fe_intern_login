
export default function InputLogin({placeholder, type, value, onChange}){

    return(
        <div>
            <input 
            placeholder={placeholder} 
            type={type} className="input" 
            value={value}
            onChange={onChange}></input>
        </div>
    );
}