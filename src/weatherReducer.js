export const INITIAL_STATE = {
  weather: {
    elevation: Number,
    latitude: Number,
    longitude: Number,
    timezone: String,
    temperature: [],
    time: [],
  },
  error: false,
  loading: false,
};

export function weatherReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        weather: {
          elevation: action.payload.elevation,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
          timezone: action.payload.timezone,
          temperature: action.payload.hourly.temperature_2m.map((item) => item),
          time: action.payload.hourly.time.map((item) => item),
        },
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: true,
        weather: {},
      };
    default:
      return {
        state,
      };
  }
}
