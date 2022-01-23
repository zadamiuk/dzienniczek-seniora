import { 
  LOGIN_URL, 
  REGISTER_URL, 
  LOGOUT_URL,
  BLOOD_PRESSURE_URL,
  SUGAR_URL,
  WEIGHT_URL,
  SENIORS_URL,
  REFRESH_TOKEN_URL,
  SENIOR_BLOOD_PRESSURE_URL,
  SENIOR_SUGAR_URL,
  SENIOR_WEIGHT_URL,
  SCHEDULE_URL,
  YOUR_SUPERVISOR_URL,
  HOME_PAGE_URL
} from "./config/urls";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { errorToast, successToast } from './src/components/organisms/Toast/Toast.component';

let config = {};
const setConfig = (token) => {
  config = { 
    headers: {
      "Authorization" : "Bearer " + token.access
    } 
  }
}

export const refreshToken = async ({ navigation }) => {
  const payload = { 'refresh': await getStringValueFromLocalStorage('refresh') }
  axios
  .post(REFRESH_TOKEN_URL, payload)
  .then(response => {
    const accessToken = response.data.access;
    const token = {
      access: accessToken,
      refresh: getStringValueFromLocalStorage('refresh')
    }
    setConfig(token);
  })
  .catch(error => {
    if (error?.response?.status === 400) {
      navigation.navigate('SignIn')
      errorToast('Wymagane ponowne logowanie.')
    }
  });
};

export const storeStringValueInLocalStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.log(e);
  }
}

export const getStringValueFromLocalStorage = async (key) => {
  try {
    const res = await AsyncStorage.getItem(key);
    return res;
  } catch(e) {
    console.log(e);
  }
}

export const removeStringValueFromLocalStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
    console.log(e);
  }
}

export const Login = ( payload, navigation ) => {
    axios
    .post(LOGIN_URL, payload)
    .then(response => {
      const name = response.data.name;
      const hour = response.data.hour ? response.data.hour : '';
      const minutes = response.data.minutes ? response.data.minutes : '';

      const refreshToken = response.data.refresh;
      const accessToken = response.data.access;

      const token = {
        access: accessToken,
        refresh: refreshToken
      }

      setConfig(token);

      storeStringValueInLocalStorage('refresh', refreshToken)
      storeStringValueInLocalStorage('name', name)
      storeStringValueInLocalStorage('schedule_hour', hour.toString())
      storeStringValueInLocalStorage('schedule_minutes', minutes.toString())
  
      successToast('Pomyślnie zalogowano.')
      navigation.navigate('Home')
    })
    .catch(error => {
      if (!payload.email) {
        errorToast('Podaj adres email.')
      } else if (!payload.password) {
        errorToast('Podaj hasło.')
      } else {
        errorToast('Błędny email lub hasło.')
      }
    });
};

export const Register = ({ payload, navigation }) => {
    axios
    .post(REGISTER_URL, payload)
    .then(response => {
      navigation.navigate('SignIn')
      successToast('Utworzono konto, zaloguj się.')
    })
    .catch(error => {
      console.log(error);
      if (error.response.status == 406) {
        errorToast(error.response.data)
      } else {
        if (!payload.email) {
          errorToast('Podaj adres email.')
        } else if (!payload.name) {
          errorToast('Podaj imię.')
        } else if (!payload.password) {
          errorToast('Podaj hasło.')
        } else {
          errorToast('Wystąpił błąd, spróbuj ponownie.')
        }
      }
    });
};

export const Logout = ( navigation ) => {
  let payload;
  const myAsyncFunc = async (result) => { 
    payload = {
      refresh_token: await result
    }
    axios
      .post(LOGOUT_URL, payload, config)
      .then(response => {
        axios.defaults.headers.common.Authorization = null;
        removeStringValueFromLocalStorage('refresh')
        removeStringValueFromLocalStorage('name')
      })
      .catch(error => console.log(error));
  };
  getStringValueFromLocalStorage('refresh').then(data => myAsyncFunc(data))

  navigation.navigate('GetStarted')
};

export const AddBloodPressure = ({ payload, navigation }) => {
  axios
  .post(BLOOD_PRESSURE_URL, payload, config)
  .then(response => {
    navigation.navigate('Home')
    successToast('Dodano pomiar ciśnienia.')
  })
  .catch(error => {
    Object.entries(payload).forEach((element) => {
      if (!payload[element]){
        errorToast('Uzupełnij wszystkie pola.')
      }
    })
    if (error.response.status === 500) {
      refreshToken(navigation);
      navigation.navigate('AddBloodPressure');
      errorToast('Spróbuj ponownie.')
    }
    if (error.response.status === 401) {
      navigation.navigate('SignIn');
      errorToast('Wymagane ponowne zalogowanie.')
    }
  });
};

export const AddSugar = ({ payload, navigation }) => {
  axios
  .post(SUGAR_URL, payload, config)
  .then(response => {
    navigation.navigate('Home')
    successToast('Dodano pomiar glukozy.')
  })
  .catch(error => {
    if (!payload.level) {
      errorToast('Wprowadź wartość.')
    } else {
      if (error.response.status === 500) {
        refreshToken(navigation);
        navigation.navigate('AddSugarLevel');
        errorToast('Spróbuj ponownie.')
      }
      if (error.response.status === 401) {
        navigation.navigate('SignIn');
        errorToast('Wymagane ponowne zalogowanie.')
      }
    }
  });
};

export const AddWeight = ({ payload, navigation }) => {
  axios
  .post(WEIGHT_URL, payload, config)
  .then(response => {
    navigation.navigate('Home')
    successToast('Dodano pomiar wagi.')
  })
  .catch(error => {
    if (!payload.weight_value) {
      errorToast('Wprowadź wartość.')
    } else {
      if (error.response.status === 500) {
        refreshToken(navigation);
        navigation.navigate('AddSugarLevel');
        errorToast('Spróbuj ponownie.')
      }
      if (error.response.status === 401) {
        navigation.navigate('SignIn');
        errorToast('Wymagane ponowne zalogowanie.')
      }
    }
  });
};

export const GetBloodPressureList = async (setData, navigation) => {
   await axios
    .get(BLOOD_PRESSURE_URL, config)
    .then(response => setData(response.data))
    .catch(error => {
      if (error.response.status === 500) {
        refreshToken(navigation);
        navigation.navigate('ChooseMeasurementToList');
        navigation.navigate('ListBloodPressure');
      }
    });
};  

export const GetSugarLevelList = async (setData, navigation) => {
  await axios
  .get(SUGAR_URL, config)
  .then(response => setData(response.data))
  .catch(error => {
    if (error.response.status === 500) {
      refreshToken(navigation);
      navigation.navigate('ChooseMeasurementToList');
      navigation.navigate('ListSugarLevel');
    }
  });
};

export const GetWeightList = async (setData, navigation) => {
  await axios
  .get(WEIGHT_URL, config)
  .then(response => setData(response.data))
  .catch(error => {
    if (error.response.status === 500) {
      refreshToken(navigation);
      navigation.navigate('ChooseMeasurementToList');
      navigation.navigate('ListWeight');
    }
  });
};

export const GetSeniorsList = async (setData, navigation) => {
  await axios
  .get(SENIORS_URL, config)
  .then(response => setData(response.data))
  .catch(error => {
    if (error.response.status === 500) {
      refreshToken(navigation);
      navigation.navigate('Home');
      navigation.navigate('ListOfSeniors');
    }
  });
};

export const GetSeniorWeightList = async (id, setData, navigation) => {
  await axios
  .get(SENIOR_WEIGHT_URL(id), config)
  .then(response => setData(response.data))
  .catch(error => {
    if (error.response.status === 500) {
      refreshToken(navigation);
      navigation.navigate('ListOfSeniors');
      errorToast('Spróbuj ponownie.')
    }
  });
};

export const GetSeniorSugarList = async (id, setData, navigation) => {
  await axios
  .get(SENIOR_SUGAR_URL(id), config)
  .then(response => setData(response.data))
  .catch(error => {
    if (error.response.status === 500) {
      refreshToken(navigation);
      navigation.navigate('ListOfSeniors');
      errorToast('Spróbuj ponownie.')
    }
  });
};

export const GetSeniorBloodPressureList = async (id, setData, navigation) => {
  await axios
  .get(SENIOR_BLOOD_PRESSURE_URL(id), config)
  .then(response => setData(response.data))
  .catch(error => {
    if (error.response.status === 500) {
      refreshToken(navigation);
      navigation.navigate('ListOfSeniors');
      errorToast('Spróbuj ponownie.')
    }
  });
};

export const UpdateSchedule = ( payload, setVisibility, navigation ) => {
  axios
  .patch(SCHEDULE_URL, payload, config)
  .then(response => {
    if (response.status === 200) {
      setVisibility(false);
    }
    const hour = response.data.measurement_hour ? response.data.measurement_hour : '';
    const minutes = response.data.measurement_minutes ? response.data.measurement_minutes : '';
    
    storeStringValueInLocalStorage('schedule_hour', hour.toString())
    storeStringValueInLocalStorage('schedule_minutes', minutes.toString())

    ScheduledPushNotification();
    successToast('Zmieniono termin przypomnienia.')
  })
  .catch(error => {
    if (!payload.measurement_hour || !payload.measurement_minutes) {
      errorToast('Wprowadź nowy termin przypomnienia.')
    }  else {
      if (error?.response?.status === 500) {
        refreshToken(navigation);
        navigation.navigate('Notification');
        errorToast('Spróbuj ponownie.')
      }
      if (error?.response?.status === 401) {
        navigation.navigate('SignIn');
        errorToast('Wymagane ponowne zalogowanie.')
      }
    }
  });
};

export const AddSupervisor = ({ payload, navigation }) => {
  axios
  .patch(YOUR_SUPERVISOR_URL, payload, config)
  .then(response => {
    navigation.navigate('Home');
    navigation.navigate('YourSupervisor');
    successToast('Dodano opiekuna.');
  })
  .catch(error => {
    if (!payload.supervisor_email) {
      errorToast('Wprowadź email opiekuna.')
    }  else {
      if (error?.response?.status === 500) {
        refreshToken(navigation);
        navigation.navigate('YourSupervisor');
        errorToast('Spróbuj ponownie.')
      } else if (error?.response?.status === 401) {
        navigation.navigate('SignIn');
        errorToast('Wymagane ponowne zalogowanie.')
      } else if (error.response.status === 400) {
        errorToast('Nie znaleziono konta z podanym adresem email.')
      }
    }
  });
};

export const GetSupervisor = async (setData, navigation) => {
  await axios
  .get(YOUR_SUPERVISOR_URL, config)
  .then(response => {
    setData(response.data)
    console.log(response.data)
  })
  .catch(error => {
    if (error?.response?.status === 500) {
      refreshToken(navigation);
      GetSupervisor(setData, navigation)
    } 
  });
};


export const GetHomePage = async (setData, navigation) => {
  await axios
  .get(HOME_PAGE_URL, config)
  .then(response => setData(response.data))
  .catch(error => {
    if (error?.response?.status === 500) {
      refreshToken(navigation);
      GetHomePage(setData, navigation)
    }
  });
};