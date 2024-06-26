import { createContext, useState ,useEffect} from "react"
import { useDispatch } from 'react-redux';
import { userpost,vehcilepatch } from "../Redux/VehicleReducer/action";
const obj={
    firstName:"",
    lastName:"",
    wheels:0,
    vehicleType:"",
    selectedModel:"",
    startDate:"",
    endDate:"",
    bookingID:0
  }

 
export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const dispatch=useDispatch()
    const [data,setData]=useState(obj)
    const [name, setName] = useState(true)
    const [wheel, setWheel] = useState(false)
    const [vehicle, setVehicle] = useState(false)
    const [model, setModel] = useState(false)
    const [date, setDate] = useState(false)
    const [id,setId]=useState(0)
    const [vehicleBooked, setVehicleBooked] = useState(false);

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

    const objModel=(model,bookingID)=>{
      setId(bookingID)
        setData(prevData => ({
            ...prevData,
            selectedModel:model,
            bookingID:bookingID
          }));
    }
    const objDate=(startDate,endDate)=>{
        setData(prevData => ({
            ...prevData,
            startDate:startDate,
            endDate:endDate
          }));
    }
    
    const setDatas=(data)=>{
        setData(obj); 
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

    const handleBookVehicle = (data) => {
        setVehicleBooked(data);
      };

    
    useEffect(()=>{
        const allFieldsFilled = Object.values(data).every((value) => !!value);
        if (allFieldsFilled) {
            dispatch(userpost(data))
            dispatch(vehcilepatch({status:"booked"},id))
        }
    },[data])

    return (
        <AuthContext.Provider value={{vehicleBooked,setDatas,handleBookVehicle,data,objName,objWheel,objModel,objDate,objVehical, name, wheel, vehicle, model, date, setNames, setVehicles, setModels, setDates, setWheels }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider; 