import { createContext, useState ,useEffect} from "react"
const obj={
    firstName:"",
    lastName:"",
    wheels:0,
    vehicleType:"",
    selectedModel:"",
    startDate:"",
    endDate:""
  }

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [data,setData]=useState(obj)
    const [name, setName] = useState(true)
    const [wheel, setWheel] = useState(false)
    const [vehicle, setVehicle] = useState(false)
    const [model, setModel] = useState(false)
    const [date, setDate] = useState(false)

    const objName=(firstName,lastName)=>{
        setData(prevData => ({
            ...prevData,
            firstName: firstName,
            lastName: lastName
          }));
    }

    const objWheel=(wheel)=>{
        setData(prevData => ({
            ...prevData,
            wheels:wheel
          }));
    }

    const objVehical=(vehicle)=>{
        setData(prevData => ({
            ...prevData,
            vehicleType:vehicle
          }));
    }

    const objModel=(model)=>{
        setData(prevData => ({
            ...prevData,
            selectedModel:model
          }));
    }
    const objDate=(startDate,endDate)=>{
        setData(prevData => ({
            ...prevData,
            startDate:startDate,
            endDate:endDate
          }));
    }
    
 
    const setNames = (data) => {
        setName(data)
    }

    const setWheels = (data) => {
        setWheel(data)
    }

    const setModels = (data) => {
        setModel(data)
    }

    const setDates = (data) => {
        setDate(data)
    }

    const setVehicles = (data) => {
        setVehicle(data)
    }

    

    useEffect(()=>{
        const allFieldsFilled = Object.values(data).every((value) => !!value);
        if (allFieldsFilled) {
          console.log(data);
          setData(obj)
          console.log(data)
        }
    },[data])

    return (
        <AuthContext.Provider value={{data,objName,objWheel,objModel,objDate,objVehical, name, wheel, vehicle, model, date, setNames, setVehicles, setModels, setDates, setWheels }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;