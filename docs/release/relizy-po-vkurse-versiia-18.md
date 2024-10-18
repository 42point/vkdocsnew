# Версия 20

## Серверное обновление

| Функциональность                 | Описание                                                                                                                                                                                                                                                             | Статус |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Администрирование                |                                                                                                                                                                                                                                                                      |        |
| Поддержка больших RTMP-вебинаров | Поддержка проведения системой IVA MCU масштабных вебинаров численностью до 10 000 участников, которое реализуется распределением трансляции FLV-вебинара между пользователями через различные доступные сервера Nginx-media                                          | Новое  |
| Бронирование ресурсов подписки   | Реализован функционал бронирования ресурсов подписки, используемой в мероприятии (звонке, комнате) на определенный период времени. Ограничение на Максимальное количество WebRTC- участников / VVoIP-участников мероприятий являются бронируемыми ресурсами подписки | Новое  |

REST API
Управление пользовательскими шаблонами мероприятий
Реализовано клиентское REST API управления пользовательскими шаблонами мероприятий
Новое
Редактирование периодического мероприятия
Реализовано клиентское REST API редактирования всего периодического мероприятия
Новое
Интеграционное API для ВКурсе
Реализовано интеграционное REST API управления подписками пользователей
Новое
Клавиатурные действия в бот API
Изменение функции отправки сообщения в бот API и объектов чата в клиентском REST API
Новое
Мягкий мьют участника мероприятия
Реализовано клиентское REST API принудительного отключения медиа трансляций (аудио / видео по отдельности) отдельных участников мероприятия (без запрета на вещание отключаемого типа) и отправки запроса отдельным участникам мероприятия на включение медиа трансляции (аудио / видео по отдельности)
Новое
Мягкий мьют медиатрансляции всем участникам мероприятия
Мягкий мьют медиа трансляции всем участникам мероприятия
Новое
Внутренние модули
Monitoring
Возможность безусловного разрешения входа пользователя root
Новое
Исправления
Monitoring: Ошибка запуска SSH-службы после настройки
Исправлено
Monitoring: Отсутствие метода builder() в MonitoringDnsConfig
Исправлено
Monitoring: Ошибка синхронизации resolv.conf
Исправлено
VVoIP Signalling Gateway: Ошибка обработки запроса авторизации на bye
Исправлено
VVoIP Signalling Gateway: Некорректное логирование события «marked as reachable»
Исправлено
VVoIP Signalling Gateway: Ошибка сохранения route list на уровне диалога
Исправлено