import { VEHICLE_FAILURE, GET_VEHICLE_SUCCESS, VEHICLE_REQUEST ,VEHICLE_POST_SUCCESS,VEHICLE_PATCH_SUCCESS} from './actionTypes';
import axios from 'axios';

export const getvehicleData = (vehicleData) => (dispatch) => {
  console.log(vehicleData);
  dispatch({ type: VEHICLE_REQUEST });

  axios
    .get('http://localhost:8082/api/getvehicle', vehicleData)
    .then((res) => {
      const filteredData = res.data.data.filter((item) => item.status === "available");

      const uniqueTypes = Array.from(new Set(filteredData.map((item) => item.type)));
      dispatch({
        type: GET_VEHICLE_SUCCESS,
        payload: {
          uniqueTypes: uniqueTypes,
          vehicleData: res.data.data,
          vehicleId: res.data.data.id
        }
      });
    })
    .catch(() => dispatch({ type: VEHICLE_FAILURE }));
};


export const userpost=(userData)=>(dispatch)=>{
  dispatch({type:VEHICLE_REQUEST})
axios.post("http://localhost:8082/api/userbookings",userData).then(()=>{
  dispatch({type:VEHICLE_POST_SUCCESS})
}).catch(()=>{
  dispatch({type:VEHICLE_FAILURE})
})   
}


export const vehcilepatch=(userData1,id)=>(dispatch)=>{
  dispatch({type:VEHICLE_REQUEST})
 return axios.patch(`http://localhost:8082/api/update/${id}`,userData1).then(()=>{
dispatch({type:VEHICLE_PATCH_SUCCESS})
  }).catch(()=>{
    dispatch({type:VEHICLE_FAILURE})
  })
}