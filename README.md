# Dzienniczek Seniora
[*english version below*]

Aplikacja mobilna „Dzienniczek Seniora” to projekt umożliwiający osobom starszym przechowywanie wyników codziennych pomiarów.
Tworząc program szczególny nacisk kładziono na odpowiedni, dla wybranej grupy docelowej, interfejs graficzny. 
Oprócz archiwizacji wyników, użytkownicy mogą obejrzeć ich wizualizacje oraz udostępnić je wcześniej wybranemu opiekunowi. 
Zaimplementowano również możliwość dodawania przypomnień o badaniach, które wysyłane są do użytkownika w formie powiadomień push. 

**Uruchomienie serwera:**

Należy przejść do katalogu backend i wywołać w konsoli poniższe komendy.
```
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

**Uruchomienie części klienckiej:** 

Należy przejść do katalogu frontend, uruchomić emulator maszyny z systemem Android i wywołać w konsoli poniższe komendy.
```
npm install
npx react-native run-android
```
______________________________________________________________________________________

Mobile application “Dzienniczek Seniora” is a project, which aim is to enable the elderly to store their daily measurements. 
While creating the project special emphasis was placed on appropriate graphic interface for project’s target group. 
Besides archiving, users are able to display data visualizations and share them with previously chosen supervisor. 
There is also a possibility to add reminders about measurements, that would be sent to user as push notifications. 

**To run backend:**

Move to backend library and run following commands
```
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

**To run frontend:** 

Move to frontend library, run Android emulator and run following commands:
```
npm install
npx react-native run-android
```

   
