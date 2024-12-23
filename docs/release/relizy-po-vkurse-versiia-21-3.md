---
outline: deep
---

# Версия 21.3

Список обновлений и исправлений.

## Сервер 21.3

### Релиз новых версий клиентских приложений

- <Badge type="tip" text="RELEASE" /> Web клиент 17.2
- <Badge type="tip" text="RELEASE" /> Android клиент 18.3
- <Badge type="tip" text="RELEASE" /> Plugin клиент 1.5.5

### Доработки

- Отображение старой метки времени последней активности при повторном создании персонального чата после его удаления
- Ошибка перехода между слайдами и добавления новых слайдов белой доски после загрузки изображения неподдерживаемого формата

### Исправления

- Для медиасерверов разрешено обращение по любым адресам головных серверов без проверки заголовков Host
- Добавлена настройка пользовательских наборов аудиокодеков в системных настройках IVA MCU
- Реализовано ограничение на получение аудио- / видеотрансляции для участников мероприятия на уровне сервера по аналогии с VVoIP-участниками (настройка мероприятия «Прием аудио/видео трансляции»)

## Web клиент 17.2

### Доработки

- <Badge type="tip" text="NEW" /> Доработан дизайн диалогового окна удаления мероприятия / комнаты
- <Badge type="tip" text="NEW" /> Доработана логика формирования и обновления черновика сообщения в чате
- <Badge type="tip" text="NEW" /> Доработан дизайн повторного дозвона до участников
- <Badge type="tip" text="NEW" /> Адаптировано окно «Картинка в картинке» под разные разрешения экранов
- <Badge type="tip" text="NEW" /> Ускорено отображение больших сообщений в чатах
- <Badge type="tip" text="NEW" /> Увеличено максимальное количество символов в пароле мероприятия
- <Badge type="tip" text="NEW" /> Добавлены новые значения при выборе времени для подключения к мероприятию до его начала: 30 и 60 мин
- <Badge type="tip" text="NEW" /> Исправления
- <Badge type="tip" text="NEW" /> Отсутствие расстояния между кнопкой «Вернуться в основное мероприятие» и длительностью группы
- <Badge type="tip" text="NEW" /> Скачивание некорректных дистрибутивов клиентских приложений для ALT Linux и AlterOS
- <Badge type="tip" text="NEW" /> Ошибка отображения одноразового мероприятия после удаления всех сеансов периодического мероприятия с той же подпиской
- <Badge type="tip" text="NEW" /> Некорректный формат даты в списке чатов
- <Badge type="tip" text="NEW" /> Отображение окна пользователя, делающего вызов VVoIP-участника
- <Badge type="tip" text="NEW" /> Ошибка совершения звонка через профиль пользователя в случае, если вызывающий пользователь находится в активном звонке
- <Badge type="info" text="FIX" /> Ошибочное отображение кнопки «Поиск участников» у пользователей в Комнате ожидания
- <Badge type="info" text="FIX" /> Несоответствие дизайну окна «Картинка в картинке» в мобильном браузере на ОС Android
- <Badge type="info" text="FIX" /> Некорректный формат вывода длинного варианта ответа в опросе
- <Badge type="info" text="FIX" /> Ошибочное отображение кнопки «Обновить» на странице настроек после обновления до последней версии
- <Badge type="info" text="FIX" /> Зависание кадра видеотрансляции при смене качества трансляции в мероприятии на «Только аудио»
- <Badge type="info" text="FIX" /> Несоответствие дизайну окна «Картинка в картинке» в мобильном браузере на ОС iOS
- <Badge type="info" text="FIX" /> Несоответствие функциональным требованиямлогики отметки сообщения прочитанным в чате мероприятия
- <Badge type="info" text="FIX" /> Ошибка сохранения при изменении языковой пары в мероприятии с синхронным переводом
- <Badge type="info" text="FIX" /> Ошибка при переходе в чат по push-уведомлению нового сообщения из активного мероприятия на устройстве с macOS
- <Badge type="info" text="FIX" /> Отсутствие отображения количества непрочитанных сообщений в чате мероприятия после обновления страницы
- <Badge type="info" text="FIX" /> Дублирование списка чатов при прокрутке у пользователя с большим количеством чатов
- <Badge type="info" text="FIX" /> Задвоение аудиотрансляции (эхо) в основном потоке мероприятия с синхронным переводом
- <Badge type="info" text="FIX" /> Ошибка адаптации окна «Изменить фон» при изменении масштаба в браузере

## Android клиент 18.3

### Доработки

- <Badge type="tip" text="NEW" /> Обновлено значение копирайта в разделе «Настройки»
- <Badge type="tip" text="NEW" /> Исправления
- <Badge type="tip" text="NEW" /> Некорректное поведение отправки файлов при отключении Интернета
- <Badge type="tip" text="NEW" /> Некорректное отображение вкладок «Чаты» и «Контакты» пустыми после смены языка в настройках устройства
- <Badge type="tip" text="NEW" /> Отсутствие звука в голосовых сообщениях, записанных в сторонних мессенджерах при активной конференции в свернутом IVAConnect
- <Badge type="info" text="FIX" />Отсутствие отображения экрана исходящего вызова − отображается экран чата
- <Badge type="info" text="FIX" /> Ошибка отображения индикатора занятости микрофона после завершения звонка

## Outlook Plugin 1.5.5

### Исправления

- <Badge type="info" text="FIX" /> Ошибка «Срабатывание события изменения элемента календаря» при создании мероприятия
- <Badge type="info" text="FIX" /> Отсутствие отображения запланированного в Plugin мероприятия в приложениях IVA Connect
- <Badge type="info" text="FIX" /> Некорректная ссылка для подключения к мероприятиюв письме
- <Badge type="info" text="FIX" /> Некорректное отображение ссылки на сайт разработчика при запуске установщика Plugin
- <Badge type="info" text="FIX" /> Отображение окон «Рабочая область» и «Поиск комнаты» во время редактирования мероприятия в календаре Outlook
