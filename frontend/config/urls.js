//export const BASE_URL = 'http://127.10.0.0:8000/api/';
export const BASE_URL = 'http://10.0.2.2:8000/api/';

export const LOGIN_URL = BASE_URL + 'user/login/';
export const REGISTER_URL = BASE_URL + 'user/create/';
export const LOGOUT_URL = BASE_URL + 'user/logout/blacklist/';
export const REFRESH_TOKEN_URL = BASE_URL + 'token/refresh/';
export const YOUR_SUPERVISOR_URL = BASE_URL + 'user/your-supervisor/';
export const SCHEDULE_URL = BASE_URL + 'user/add-schedule/';

export const HOME_PAGE_URL = BASE_URL + 'home-page/';

export const MEASUREMENTS_URL = BASE_URL + 'measurements/';
export const BLOOD_PRESSURE_URL = MEASUREMENTS_URL + 'blood-pressure/';
export const SUGAR_URL = MEASUREMENTS_URL + 'sugar/';
export const WEIGHT_URL = MEASUREMENTS_URL + 'weight/';

export const SUPERVISOR_URL = BASE_URL + 'supervisor/';
export const SENIORS_URL = SUPERVISOR_URL  + 'users/';
export const SENIOR_SUGAR_URL= (id) => { return SENIORS_URL + id + '/sugar'; }
export const SENIOR_BLOOD_PRESSURE_URL= (id) => { return SENIORS_URL + id + '/blood-pressure'; }
export const SENIOR_WEIGHT_URL= (id) => { return SENIORS_URL + id + '/weight'; }
