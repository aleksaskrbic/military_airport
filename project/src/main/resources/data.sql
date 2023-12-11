insert into authority(id,name) values (1,'ROLE_ADMIN');
insert into authority(id,name) values (2,'ROLE_PILOT');
insert into authority(id,name) values (3,'ROLE_MECHANIC');
insert into authority(id,name) values (4,'ROLE_FLYCONTROLLER');

insert into user (id,role, username, password, first_name, last_name, email, mobile,enabled,last_password_reset_date)
values (11,'Admin','truman@gmail.com', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Труман', 'Вилис', 'truman@gmail.com', '305-555-0163',true,'1983-07-12 21:30:55.888');

insert into user (id,role, username, password, first_name, last_name, email, mobile,enabled,last_password_reset_date,adress, jmbg, sex,city,state, organization_information, profession)
values (22,'Admin','isaisic587+1@gmail.com', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Рејмонд', 'Вивинг', 'isaisic587+1@gmail.com', '305-555-0720',false,'1983-07-12 21:30:55.888', 'Устаничка 6', '1528846975821', 'Male','Бостон', ' Масачусетс', '25 година службе','Пилот у администрацији');

--Kontrolori
insert into user (id,role, username, password, first_name, last_name, email,  mobile,enabled,last_password_reset_date)
values (5,'FlyController','aleksa@gmail.com', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Алекса', 'Алексић', 'aleksa@gmail.com', '306-555-333',true,'1983-07-12 21:30:55.888');

insert into user (id,role, username, password, first_name, last_name, email, mobile,enabled,last_password_reset_date)
values (6,'FlyController','nikola@gmail.com', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Никола', 'Николић', 'nikola@gmail.com', '307-558-0250',true,'1983-07-12 21:30:55.888');

--Piloti
insert into user (id,role, username, password, first_name, last_name, email,  mobile,enabled,last_password_reset_date, adress, city,state )
values (10,'Pilot','milenko@gmail.com', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Миленко', 'Павловић', 'milenko@gmail.com', '306-555-333',true,'2014-07-14 22:34:57.888', 'Кумановска 12', 'Нови Сад','Србија');

insert into user (id,role, username, password, first_name, last_name, email, mobile,enabled,last_password_reset_date)
values (12,'Pilot','zoran@gmail.com', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Зоран', 'Радосављевић', 'zoran@gmail.com', '320-589-0251',true,'2020-04-03 11:37:23.888');

insert into user (id,role, username, password, first_name, last_name, email, mobile,enabled,last_password_reset_date)
values (13,'Pilot','omer@gmail.com', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Омер', 'Мехић', 'omer@gmail.com', '320-589-0251',true,'2020-04-03 11:37:23.888');

--Pravimo jos jednog Pilota, SLUZICE SAMO KAO REZERVA I PRIJEMNIK TERMINA, SVAKI SLOBODAN TERMIN IMACE OVOG PILOTA
insert into user (id,role, username, password, first_name, last_name, email, mobile,enabled,last_password_reset_date)
values (133,'Pilot','@gmail.com', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', '*', '*', '*', '*',true,'2020-04-03 11:37:23.888');

--Mehanicar
insert into user (id,role, username, password, first_name, last_name, email, mobile,enabled,last_password_reset_date)
values (14,'Mechanic','zika@gmail.com', '$2a$04$Vbug2lwwJGrvUXTj6z7ff.97IzVBkrJ1XfApfGNl.Z695zqcnPYra', 'Живорад', 'Антић', 'zika@gmail.com', '320-589-0251',true,'2020-04-03 11:37:23.888');

insert into user_authority (user_id,authority_id) values (11,1);
insert into user_authority (user_id,authority_id) values (22,1);

insert into user_authority (user_id,authority_id) values (10,2);
insert into user_authority (user_id,authority_id) values (12,2);
insert into user_authority (user_id,authority_id) values (13,2);

insert into user_authority (user_id,authority_id) values (5,4);
insert into user_authority (user_id,authority_id) values (6,4);
insert into user_authority (user_id,authority_id) values (14,3);

--Dodavanje ostalih entiteta
insert into state (id, state_mark, state_name) values (1, 'SRB', 'Србија');

insert into airport(id, airport_mark, airport_name, city, Location, number_of_planes, number_of_stuff, number_of_control_towers, state_id)
values (1, 'BAT', 'Батајница(Потпуковник Миленко Павловић)', 'Нова Пазова','44 55 99', 12, 36, 3, 1);

--Sistemi za naoruzanje
insert into weapon_system(id, system_name, number_of_rockets, rocket_type)
values(1, 'МиГ-29',9, 'Ваздух-Ваздух Ваздух-Земља');

insert into weapon_system(id, system_name, number_of_rockets, rocket_type)
values(2, 'Сухој СУ-35', 24, 'Ваздух-Ваздух Ваздух-Земља');

insert into weapon_system(id, system_name, number_of_rockets, rocket_type)
values(3, 'МиГ-21', 6, 'Ваздух-Ваздух Ваздух-Земља');

insert into weapon_system(id, system_name, number_of_rockets, rocket_type)
values(4, 'Орао', 12, 'Ваздух-Земља');

--Piste za Letenje
insert into rail_way(id, strip_mark, planes_on_strip, airport_id) values(1, 'B1', 2, 1);
insert into rail_way(id, strip_mark, planes_on_strip, airport_id) values(2, 'B2', 4, 1);
insert into rail_way(id, strip_mark, planes_on_strip, airport_id) values(3, 'B3', 3, 1);
insert into rail_way(id, strip_mark, planes_on_strip, airport_id) values(4, 'B4', 3, 1);



-- Piloti
insert into pilot(id, airport_id, cin, points) values (10,1,'Потпуковник', 0);
insert into pilot(id, airport_id, cin, points) values (12,1,'Капетан', 0);
insert into pilot(id, airport_id, cin ,points) values (13,1,'Поручник', 0);
--Kvazi Pilot
insert into pilot(id, airport_id, cin, points) values (133,1,'Kvazi',0);

--Mehanicari
insert into mechanic(id) values (14);


--Kontrolori
insert into fly_controler(id, airport_id) values (5, 1);
insert into fly_controler(id, airport_id) values (6,1);

--Аvioni
insert into airplane(id, registration_mark, airplane_name, airplane_type, seat_number, maximum_speed, length_wings,pogon, maximum_high, tactical_radius, rocket_radius, fuel_reserve, enabled, weapon_system_id, airport_id, railway_id, mechanic_id)
values (2, 'МиГ-29','МиГ-29','Ловац', 1, 2450, 11.36,  '2 x Климов РД-33К', 18.000, 700, 15, 1500, true,  1, 1, 1, 14);

insert into airplane(id, registration_mark, airplane_name, airplane_type, seat_number,maximum_speed, length_wings,pogon, maximum_high, tactical_radius, rocket_radius, fuel_reserve, enabled, weapon_system_id, airport_id, railway_id, mechanic_id)
values (1, 'Сухој СУ-35', 'Сухој СУ-35','Ловац-Бомбардер', 1, 2450, 11.36,  '2 x Климов РД-33К', 18.000, 700, 15, 1200, true, 2, 1, 2, 14);

insert into airplane(id, registration_mark, airplane_name, airplane_type, seat_number, maximum_speed, length_wings,pogon, maximum_high, tactical_radius, rocket_radius, fuel_reserve, enabled, weapon_system_id, airport_id, railway_id, mechanic_id)
values (3, 'МиГ-21', 'МиГ-21','Ловац', 1, 2450, 11.36,  '2 x Климов РД-33К', 18.000, 700, 15,  1300, true, 3,  1, 2, 14);

insert into airplane(id, registration_mark, airplane_name, airplane_type, seat_number, maximum_speed, length_wings,pogon, maximum_high, tactical_radius, rocket_radius, fuel_reserve, enabled, weapon_system_id, airport_id, railway_id)
values (4, 'Орао','Орао','Бомбардер', 1, 2450, 11.36,  '2 x Климов РД-33К', 18.000, 700, 15,1400, true,  4, 1, 3);

--ANKETE
insert into pilot_survey(id, email, first_name, last_name, mobile, adress, city, state, p1, p2, p3, p4, p5, p6, is_pilot_approved, pilot_id)
values (1, 'milenko@gmail.com', 'Миленко',  'Павловић',  '065-898-656',  'Кумановска', 'Нови Сад',  'Србија',  'YES',  'YES',  'YES', 'YES', 'YES', 'YES', true, 10);

insert into pilot_survey(id, email, first_name, last_name, mobile, adress, city, state, p1, p2, p3, p4, p5, p6, is_pilot_approved, pilot_id)
values (2, 'milenko@gmail.com', 'Миленко',  'Павловић',  '065-898-656',  'Кумановска', 'Нови Сад',  'Србија',  'YES',  'YES',  'YES', 'YES', 'YES', 'YES', true, 10);

insert into pilot_survey(id, email, first_name, last_name, mobile, adress, city, state, p1, p2, p3, p4, p5, p6, is_pilot_approved, pilot_id)
values (3, 'milenko@gmail.com', 'Миленко',  'Павловић',  '065-898-656',  'Кумановска', 'Нови Сад',  'Србија',  'YES',  'YES',  'YES', 'YES', 'YES', 'YES', true, 10);

insert into mechanic_survey(id, email, first_name, last_name, mobile, adress, city, state, p1, p2, p3, p4, p5, mechanic_approved, mechanic_id)
values (1, 'zika@gmail.com', 'Живорад', 'Антић', '065-898-656', 'Пролетерска 6', 'Нови Сад', 'Србија', 'YES',  'YES',  'YES', 'YES', 'YES', true, 14);

insert into mechanic_survey(id, email, first_name, last_name, mobile, adress, city, state, p1, p2, p3, p4, p5, mechanic_approved, mechanic_id)
values (2, 'zika@gmail.com', 'Живорад', 'Антић', '065-898-656', 'Пролетерска 6', 'Нови Сад', 'Србија', 'YES',  'NO',  'NO', 'YES', 'YES', false , 14);

insert into mechanic_survey(id, email, first_name, last_name, mobile, adress, city, state, p1, p2, p3, p4, p5, mechanic_approved, mechanic_id)
values (3, 'zika@gmail.com', 'Живорад', 'Антић', '065-898-656', 'Пролетерска 6', 'Нови Сад', 'Србија', 'YES',  'YES',  'YES', 'YES', 'YES', true, 14);

--LETOVI
insert into fly_term(id, reservation_start, reservation_end, duration, is_pilot_come,  free_term,completed_term, pilot_got_penalty,   pilot_id, airplane_id, railway_id, pilot_survey_id, mechanic_survey_id)
values(1, '2023-03-03 07:00:00', '2023-03-03 09:00:00', 120, true, false, false, false,   10, 1, 1, 1, 1);

insert into fly_term(id, reservation_start, reservation_end, duration, is_pilot_come, free_term,completed_term, pilot_got_penalty,   pilot_id, airplane_id, railway_id, pilot_survey_id, mechanic_survey_id)
values(2, '2023-03-08 07:00:00', '2023-03-08 07:30:00', 30, true, false, false, false,   10, 2, 2, 2, 2);

insert into fly_term(id, reservation_start, reservation_end, duration, is_pilot_come, free_term,completed_term, pilot_got_penalty,   pilot_id,  airplane_id, railway_id, pilot_survey_id, mechanic_survey_id)
values(3, '2023-11-09 06:30:00', '2023-11-09 07:30:00', 60, true, true,false, false,   133,  4, 3, 3, 3);




