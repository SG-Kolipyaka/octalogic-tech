import { VEHICLE_FAILURE, GET_VEHICLE_SUCCESS, VEHICLE_REQUEST,VEHICLE_POST_SUCCESS ,VEHICLE_PATCH_SUCCESS} from './actionTypes';

const initialState = {
  isError: false,
  isLoading: false,
  vehicles: [],
  vehicledata: [],
  id: 0,
  success:""
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VEHICLE_REQUEST:
      return { ...state, isLoading: true };
    case VEHICLE_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case VEHICLE_POST_SUCCESS:
        return {...state,isLoading:false,isError:false,success:"Vehicle Booked Successfully"}
    case GET_VEHICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        vehicles: payload.uniqueTypes,
        vehicledata: payload.vehicleData,
        id: payload.vehicleId
      };
      case VEHICLE_PATCH_SUCCESS:
        return {...state,isLoading:false,isError:false}
    default:
      return state;
  }
};
