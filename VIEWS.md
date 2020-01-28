# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolików
    - każdy wiersz = 30 minut
    - ma przypomnać widok tygodnia w kalendarzu Google, gzdie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwa edycję i zapisanie zmian
- `/tables/booking/new`
  - analogicznie do powyżej, bez początkowych informacji
- `/tables/events/:id`
  - analogicznie do powyżej, dla eventów
- `/tables/events/new`
  - analogicznie do powyżej, dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji (status, czas ostatniej aktywności)
    - w w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
  - numer stolika (edytowalny
    )
  - menu produktów
  - opce wybranego produktu
  - zamówienie (zamówienie produktu z opcjami i ceną)
  - kwotę zamówienia
- `/waiter/order/:id`
  - jak powyższa

# Widok kuchni

- `/kitchen`
  - wyswietla listę zamówień w kolejności ich złożenia
  - lista musi zawierać:
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych wydarzeń
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
